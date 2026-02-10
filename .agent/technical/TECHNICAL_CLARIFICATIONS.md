# SynConnect v3 - Technical Clarifications

## 1. Next.js SSR/SSG Deployment on DigitalOcean

### Your Requirement:
- Marketing pages (landing, shop, etc.) → Server-Side Rendered (SSR) or Static (SSG)
- Customer profile pages → Server-Side Rendered for better performance

### How Next.js Works on DigitalOcean

**Unlike React (static files), Next.js needs a Node.js server running.**

#### Rendering Strategies:

```typescript
// apps/web/app/page.tsx (Landing Page)
// SSG - Pre-rendered at build time, cached
export const dynamic = 'force-static';

export default function LandingPage() {
  return <div>Landing Page</div>;
}
```

```typescript
// apps/web/app/profile/[id]/page.tsx (Profile Page)
// ISR - Static with revalidation (best of both worlds)
export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const profile = await getProfile(params.id);
  return <ProfileView profile={profile} />;
}
```

```typescript
// apps/dashboard/app/insights/page.tsx (Dashboard)
// SSR - Rendered on each request (dynamic data)
export const dynamic = 'force-dynamic';

export default async function InsightsPage() {
  const session = await getServerSession();
  const analytics = await getAnalytics(session.user.id);
  return <AnalyticsView data={analytics} />;
}
```

### Deployment Process

**Step 1: Build Next.js**
```bash
cd apps/web
npm run build
# Creates .next/ folder with:
# - Static pages (HTML)
# - Server functions
# - API routes
```

**Step 2: Run Next.js Server**
```bash
npm start
# Starts Node.js server on port 3000
# Serves static pages + handles SSR
```

**Step 3: PM2 Keeps it Running**
```bash
pm2 start npm --name web -- start
pm2 save
pm2 startup
```

**Step 4: Nginx Proxies Requests**
```nginx
server {
    server_name synconnect.com;
    
    location / {
        proxy_pass http://localhost:3000;  # Next.js server
        # Nginx handles SSL, caching, compression
    }
}
```

### Performance Optimization

**ISR (Incremental Static Regeneration) for Profiles:**
```typescript
// Profile page is static but updates when needed
export const revalidate = 60; // Revalidate every 60 seconds

// OR on-demand revalidation when profile is updated
// In API route:
import { revalidatePath } from 'next/cache';

export async function PUT(req: Request) {
  await updateProfile(profileId, data);
  revalidatePath(`/profile/${profileId}`); // Regenerate page
  return Response.json({ success: true });
}
```

**Benefits:**
- ✅ Profile pages load instantly (static HTML)
- ✅ SEO-friendly (pre-rendered)
- ✅ Updates within 60 seconds (or on-demand)
- ✅ No database query on every request

---

## 2. Custom Brand Logo & Theme Colors

### Requirement:
- Each customer can upload their logo (printed on NFC card)
- Each customer can choose custom colors for their profile page

### Solution: Dynamic Theming System

### Database Schema (Already Defined)

```typescript
interface Profile {
  // Logo (for physical card printing)
  logo?: {
    url: string;        // Cloudinary URL
    publicId: string;
  };
  
  // Theme (for profile page)
  theme?: {
    primaryColor?: string;      // Custom color (hex)
    secondaryColor?: string;    // Custom color (hex)
    fontFamily?: string;        // Custom font
    layout?: 'modern' | 'classic' | 'minimal';
  };
}
```

### Implementation

#### 1. Logo Upload (Dashboard)

```tsx
// apps/dashboard/components/ProfileEditor.tsx
function LogoUploader() {
  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', 'logo');
    
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    
    const { url, publicId } = await res.json();
    
    // Update profile
    await updateProfile({
      logo: { url, publicId }
    });
  };
  
  return (
    <div>
      <h3>Upload Logo (for NFC Card)</h3>
      <p>This logo will be printed on your physical card</p>
      <FileUpload onUpload={handleUpload} />
    </div>
  );
}
```

#### 2. Theme Color Picker (Dashboard)

```tsx
// apps/dashboard/components/ThemeCustomizer.tsx
function ThemeCustomizer({ profile }: { profile: Profile }) {
  const [primaryColor, setPrimaryColor] = useState(profile.theme?.primaryColor || '#67D861');
  const [secondaryColor, setSecondaryColor] = useState(profile.theme?.secondaryColor || '#B6ECAF');
  
  const handleSave = async () => {
    await updateProfile({
      theme: {
        primaryColor,
        secondaryColor,
        layout: profile.theme?.layout || 'modern',
      }
    });
  };
  
  return (
    <div>
      <h3>Customize Theme</h3>
      
      <div>
        <label>Primary Color</label>
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </div>
      
      <div>
        <label>Secondary Color</label>
        <input
          type="color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
      </div>
      
      <button onClick={handleSave}>Save Theme</button>
      
      {/* Live Preview */}
      <div style={{ 
        backgroundColor: primaryColor,
        color: '#fff',
        padding: '20px'
      }}>
        Preview: This is how your profile will look
      </div>
    </div>
  );
}
```

#### 3. Apply Theme on Profile Page

```tsx
// apps/web/app/profile/[id]/page.tsx
export default async function ProfilePage({ params }: { params: { id: string } }) {
  const profile = await getProfile(params.id);
  
  // Extract theme colors
  const primaryColor = profile.theme?.primaryColor || '#67D861'; // Default: Electric Green
  const secondaryColor = profile.theme?.secondaryColor || '#B6ECAF'; // Default: Pale Green
  
  return (
    <div
      style={{
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
      } as React.CSSProperties}
      className="profile-page"
    >
      {/* Logo */}
      {profile.logo && (
        <img src={profile.logo.url} alt={`${profile.name} logo`} className="logo" />
      )}
      
      {/* Name with custom color */}
      <h1 style={{ color: primaryColor }}>{profile.name}</h1>
      
      {/* Connect button with custom color */}
      <button
        style={{
          backgroundColor: primaryColor,
          color: '#fff',
        }}
        className="connect-button"
      >
        Connect with Me
      </button>
      
      {/* Rest of profile */}
    </div>
  );
}
```

#### 4. CSS Variables for Dynamic Theming

```css
/* apps/web/app/profile/[id]/profile.css */
.profile-page {
  /* Use CSS variables set inline */
  --primary: var(--primary-color, #67D861);
  --secondary: var(--secondary-color, #B6ECAF);
}

.connect-button {
  background-color: var(--primary);
  color: white;
}

.connect-button:hover {
  background-color: var(--secondary);
}

.social-link {
  color: var(--primary);
}

.section-heading {
  border-bottom: 2px solid var(--primary);
}
```

### Admin Dashboard - Download Logo for Printing

```tsx
// apps/admin/components/OrderDetails.tsx
function OrderDetails({ order }: { order: Order }) {
  return (
    <div>
      <h2>Order #{order.orderNumber}</h2>
      
      {order.profileAssignments?.map((assignment, index) => (
        <div key={index}>
          <h3>Card {assignment.cardNumber}</h3>
          <p>Profile: {assignment.profileId}</p>
          
          {/* Download logo for printing */}
          {assignment.profile?.logo && (
            <div>
              <img src={assignment.profile.logo.url} alt="Logo" width={200} />
              <a
                href={assignment.profile.logo.url}
                download={`logo-card-${assignment.cardNumber}.png`}
                className="btn"
              >
                Download Logo for Printing
              </a>
            </div>
          )}
          
          {/* Show theme colors */}
          {assignment.profile?.theme && (
            <div>
              <p>Theme Colors:</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: assignment.profile.theme.primaryColor,
                  }}
                  title="Primary Color"
                />
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: assignment.profile.theme.secondaryColor,
                  }}
                  title="Secondary Color"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## 3. Efficient Analytics Queries (Week/Month/Year)

### Requirement:
- Each customer should be able to view analytics for:
  - This week
  - This month
  - This year
  - Custom date range
- Queries must be efficient (fast)

### Solution: Optimized MongoDB Aggregation

### Database Indexes (Critical for Performance)

```javascript
// Analytics collection indexes
analyticsSchema.index({ profileId: 1, timestamp: -1 }); // Compound index
analyticsSchema.index({ eventType: 1 });
analyticsSchema.index({ createdAt: 1 });
```

### Efficient Queries

#### Get Taps by Time Period

```typescript
// apps/api/src/services/analytics.service.ts

export async function getProfileAnalytics(
  profileId: string,
  period: 'week' | 'month' | 'year' | 'all',
  startDate?: Date,
  endDate?: Date
) {
  // Calculate date range
  const now = new Date();
  let dateFilter: any = {};
  
  if (period === 'week') {
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);
    dateFilter = { timestamp: { $gte: weekAgo } };
  } else if (period === 'month') {
    const monthAgo = new Date(now);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    dateFilter = { timestamp: { $gte: monthAgo } };
  } else if (period === 'year') {
    const yearAgo = new Date(now);
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    dateFilter = { timestamp: { $gte: yearAgo } };
  } else if (startDate && endDate) {
    dateFilter = { timestamp: { $gte: startDate, $lte: endDate } };
  }
  
  // Aggregation pipeline (FAST)
  const result = await Analytics.aggregate([
    // Stage 1: Filter by profile and date
    {
      $match: {
        profileId: new ObjectId(profileId),
        ...dateFilter,
      },
    },
    
    // Stage 2: Group by event type
    {
      $group: {
        _id: '$eventType',
        count: { $sum: 1 },
      },
    },
  ]);
  
  // Transform result
  const analytics = {
    totalTaps: 0,
    totalViews: 0,
    totalLinkClicks: 0,
    totalConnections: 0,
  };
  
  result.forEach((item) => {
    if (item._id === 'profile_tap') analytics.totalTaps = item.count;
    if (item._id === 'profile_view') analytics.totalViews = item.count;
    if (item._id === 'link_click') analytics.totalLinkClicks = item.count;
    if (item._id === 'connection_submit') analytics.totalConnections = item.count;
  });
  
  return analytics;
}
```

#### Get Taps Over Time (for Chart)

```typescript
export async function getTapsOverTime(
  profileId: string,
  period: 'week' | 'month' | 'year'
) {
  const now = new Date();
  let dateFilter: any = {};
  let groupByFormat: string;
  
  if (period === 'week') {
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);
    dateFilter = { timestamp: { $gte: weekAgo } };
    groupByFormat = '%Y-%m-%d'; // Group by day
  } else if (period === 'month') {
    const monthAgo = new Date(now);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    dateFilter = { timestamp: { $gte: monthAgo } };
    groupByFormat = '%Y-%m-%d'; // Group by day
  } else if (period === 'year') {
    const yearAgo = new Date(now);
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    dateFilter = { timestamp: { $gte: yearAgo } };
    groupByFormat = '%Y-%m'; // Group by month
  }
  
  const result = await Analytics.aggregate([
    {
      $match: {
        profileId: new ObjectId(profileId),
        eventType: 'profile_tap',
        ...dateFilter,
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: groupByFormat, date: '$timestamp' } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  
  return result.map((item) => ({
    date: item._id,
    taps: item.count,
  }));
}
```

### Caching for Better Performance

```typescript
// Cache analytics in Profile.stats (updated periodically)
export async function updateProfileStats(profileId: string) {
  const analytics = await getProfileAnalytics(profileId, 'all');
  
  await Profile.findByIdAndUpdate(profileId, {
    'stats.totalTaps': analytics.totalTaps,
    'stats.totalViews': analytics.totalViews,
    'stats.totalConnections': analytics.totalConnections,
  });
}

// Run this as a cron job every hour
// Or trigger when new analytics event is created
```

### Frontend Display

```tsx
// apps/dashboard/app/insights/page.tsx
'use client';

import { useState } from 'react';

export default function InsightsPage() {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('week');
  const [analytics, setAnalytics] = useState(null);
  
  useEffect(() => {
    fetchAnalytics(period);
  }, [period]);
  
  const fetchAnalytics = async (period: string) => {
    const res = await fetch(`/api/analytics?period=${period}`);
    const data = await res.json();
    setAnalytics(data);
  };
  
  return (
    <div>
      <h1>Insights</h1>
      
      {/* Period Selector */}
      <div className="period-selector">
        <button
          onClick={() => setPeriod('week')}
          className={period === 'week' ? 'active' : ''}
        >
          This Week
        </button>
        <button
          onClick={() => setPeriod('month')}
          className={period === 'month' ? 'active' : ''}
        >
          This Month
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={period === 'year' ? 'active' : ''}
        >
          This Year
        </button>
      </div>
      
      {/* Analytics Cards */}
      {analytics && (
        <div className="analytics-grid">
          <div className="card">
            <h3>Total Taps</h3>
            <p className="stat">{analytics.totalTaps}</p>
          </div>
          <div className="card">
            <h3>Total Views</h3>
            <p className="stat">{analytics.totalViews}</p>
          </div>
          <div className="card">
            <h3>Connections</h3>
            <p className="stat">{analytics.totalConnections}</p>
          </div>
        </div>
      )}
      
      {/* Chart */}
      <TapsChart period={period} />
    </div>
  );
}
```

---

## 4. Geolocation & Heat Map

### Requirement:
- Track where users are tapping the card (city/country)
- Display heat map showing geographic distribution

### Solution: IP-based Geolocation + Visualization

### 1. Capture Location (Backend)

```typescript
// apps/api/src/middleware/geolocation.ts
import geoip from 'geoip-lite';

export function captureGeolocation(req: Request) {
  // Get IP address
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // Get location from IP (city-level only, no GPS)
  const geo = geoip.lookup(ip);
  
  if (geo) {
    return {
      city: geo.city,
      country: geo.country,
      latitude: geo.ll[0],  // For heat map
      longitude: geo.ll[1], // For heat map
    };
  }
  
  return {
    city: 'Unknown',
    country: 'Unknown',
  };
}
```

```typescript
// apps/api/src/routes/analytics.ts
app.post('/api/analytics/track', async (req, res) => {
  const { eventType, profileId } = req.body;
  
  // Capture location
  const location = captureGeolocation(req);
  
  // Save to database
  await Analytics.create({
    eventType,
    profileId,
    location: {
      city: location.city,
      country: location.country,
      latitude: location.latitude,
      longitude: location.longitude,
    },
    timestamp: new Date(),
    // ... other fields
  });
  
  res.json({ success: true });
});
```

### 2. Update Database Schema

```typescript
// Add latitude/longitude to Analytics schema
interface Analytics {
  location: {
    city?: string;
    country?: string;
    latitude?: number;   // For heat map
    longitude?: number;  // For heat map
  };
}
```

```javascript
// Mongoose schema
const analyticsSchema = new mongoose.Schema({
  // ... existing fields
  location: {
    city: String,
    country: String,
    latitude: Number,
    longitude: Number,
  },
});
```

### 3. Get Geographic Data (API)

```typescript
// apps/api/src/services/analytics.service.ts
export async function getGeographicDistribution(profileId: string, period: string) {
  const dateFilter = getDateFilter(period);
  
  const result = await Analytics.aggregate([
    {
      $match: {
        profileId: new ObjectId(profileId),
        eventType: 'profile_tap',
        ...dateFilter,
      },
    },
    {
      $group: {
        _id: {
          city: '$location.city',
          country: '$location.country',
          latitude: '$location.latitude',
          longitude: '$location.longitude',
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 100, // Top 100 locations
    },
  ]);
  
  return result.map((item) => ({
    city: item._id.city,
    country: item._id.country,
    latitude: item._id.latitude,
    longitude: item._id.longitude,
    taps: item.count,
  }));
}
```

### 4. Display Heat Map (Frontend)

```tsx
// apps/dashboard/components/HeatMap.tsx
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function HeatMap({ profileId, period }: { profileId: string; period: string }) {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    fetchLocations();
  }, [period]);
  
  const fetchLocations = async () => {
    const res = await fetch(`/api/analytics/geographic?profileId=${profileId}&period=${period}`);
    const data = await res.json();
    setLocations(data);
  };
  
  return (
    <div className="heat-map">
      <h3>Geographic Distribution</h3>
      
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={4}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        
        {locations.map((location, index) => (
          <CircleMarker
            key={index}
            center={[location.latitude, location.longitude]}
            radius={Math.min(location.taps / 2, 30)} // Size based on taps
            fillColor="#67D861"
            color="#67D861"
            fillOpacity={0.6}
          >
            <Popup>
              <div>
                <strong>{location.city}, {location.country}</strong>
                <p>{location.taps} taps</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      
      {/* Table View */}
      <table className="location-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Taps</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td>{location.city}</td>
              <td>{location.country}</td>
              <td>{location.taps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

### 5. Install Dependencies

```bash
# For geolocation (backend)
npm install geoip-lite

# For heat map (frontend)
npm install react-leaflet leaflet
npm install --save-dev @types/leaflet
```

---

## Summary

### 1. Next.js on DigitalOcean ✅
- Next.js runs as a Node.js server (not static files)
- Use PM2 to keep it running
- Nginx proxies requests
- Use ISR for profile pages (static + revalidation)

### 2. Custom Logo & Theme ✅
- Logo stored in `Profile.logo` (Cloudinary)
- Theme colors in `Profile.theme.primaryColor/secondaryColor`
- Apply theme using CSS variables
- Admin downloads logo for printing

### 3. Efficient Analytics ✅
- MongoDB aggregation for fast queries
- Compound indexes on `profileId + timestamp`
- Cache totals in `Profile.stats`
- Support week/month/year filters

### 4. Geolocation & Heat Map ✅
- Use `geoip-lite` to get city/country from IP
- Store latitude/longitude in Analytics
- Display heat map using `react-leaflet`
- Show top 100 locations

---

**Last Updated**: 2026-02-10
