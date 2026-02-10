# SynConnect v3 - Error Handling & Analytics

## Error Monitoring

### v1: Console Logging Only ✅

**Decision**: No external error monitoring for v1
- Use `console.log` and `console.error` for debugging
- Monitor server logs manually
- Add Sentry or similar in v2 if needed

**Why?**
- ✅ Simpler setup
- ✅ No additional costs
- ✅ Sufficient for MVP
- ✅ Can add later without major refactoring

---

## Analytics Strategy

### v1: Custom Analytics Only ✅

**Decision**: Use our own analytics system (already planned)
- Track profile views, taps, link clicks, connections
- Store in MongoDB Analytics collection
- Display in customer dashboard
- No Google Analytics or third-party tools

**Why?**
- ✅ Full control over data
- ✅ Privacy-friendly (no third-party tracking)
- ✅ Integrated with dashboard
- ✅ No additional setup required
- ✅ Meets all business requirements

---

## Custom Analytics Implementation

### Events We Track

**Profile Events:**
- `profile_view` - Someone views a profile page
- `profile_tap` - Someone taps NFC card (opens profile)
- `link_click` - Someone clicks a social link
- `vcard_download` - Someone downloads vCard
- `connection_submit` - Someone submits Connect form

**E-commerce Events:**
- `product_view` - Someone views product detail page
- `add_to_cart` - Someone adds product to cart
- `checkout_start` - Someone starts checkout
- `payment_success` - Payment completed
- `order_complete` - Order fully processed

### Analytics Schema

```typescript
interface AnalyticsEvent {
  _id: ObjectId;
  
  // Event Info
  eventType: 'profile_view' | 'profile_tap' | 'link_click' | 'vcard_download' | 'connection_submit';
  profileId?: ObjectId; // For profile events
  
  // Metadata (Anonymous)
  timestamp: Date;
  device: 'iOS' | 'Android' | 'Desktop';
  browser: string; // 'Safari', 'Chrome', 'Firefox'
  location: {
    city: string;
    country: string;
    // No precise GPS coordinates
  };
  ipHash: string; // Hashed IP (not stored in plain text)
  
  // Additional Data (varies by event type)
  metadata?: {
    linkType?: string; // For link_click: 'linkedin', 'twitter', etc.
    productId?: string; // For product events
    orderId?: string; // For order events
  };
  
  createdAt: Date;
}
```

### Tracking Implementation

**Frontend (Profile Page):**
```typescript
// Track profile view
useEffect(() => {
  trackEvent({
    eventType: 'profile_view',
    profileId: profile._id,
  });
}, [profile._id]);

// Track link click
const handleLinkClick = (linkType: string) => {
  trackEvent({
    eventType: 'link_click',
    profileId: profile._id,
    metadata: { linkType },
  });
};

// Track vCard download
const handleVCardDownload = () => {
  trackEvent({
    eventType: 'vcard_download',
    profileId: profile._id,
  });
};
```

**Backend (API Endpoint):**
```typescript
// POST /api/analytics/track
app.post('/api/analytics/track', async (req, res) => {
  const { eventType, profileId, metadata } = req.body;
  
  // Get device info from user agent
  const userAgent = req.headers['user-agent'];
  const device = getDeviceType(userAgent);
  const browser = getBrowser(userAgent);
  
  // Get location from IP (city-level only)
  const ip = req.ip;
  const ipHash = hashIP(ip);
  const location = await getLocationFromIP(ip);
  
  // Save to database
  await Analytics.create({
    eventType,
    profileId,
    device,
    browser,
    location,
    ipHash,
    metadata,
    timestamp: new Date(),
  });
  
  res.json({ success: true });
});
```

---

## Dashboard Analytics Display

### Insights Tab (Customer Dashboard)

**Metrics Displayed:**
1. **Card Usage Overview**
   - Total taps (all time)
   - Total views (all time)
   - Unique visitors (last 30 days)

2. **Usage Trends**
   - Daily/Weekly/Monthly/Yearly charts
   - Line chart showing taps over time

3. **Social Media Breakdown**
   - Clicks per platform (LinkedIn, Twitter, etc.)
   - Click-through rate (CTR)

4. **Connections Made**
   - Total connections (all time)
   - Connections over time (chart)

5. **Geographic Distribution**
   - Map showing visitor locations
   - Table: Top cities/countries

6. **Device Breakdown**
   - iOS vs Android vs Desktop
   - Pie chart

7. **Peak Activity Times**
   - Heatmap showing when people tap card
   - By day of week and hour

**Example Query:**
```typescript
// Get total taps for a profile
const totalTaps = await Analytics.countDocuments({
  profileId: profile._id,
  eventType: 'profile_tap',
});

// Get taps over last 30 days
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

const tapsOverTime = await Analytics.aggregate([
  {
    $match: {
      profileId: profile._id,
      eventType: 'profile_tap',
      timestamp: { $gte: thirtyDaysAgo },
    },
  },
  {
    $group: {
      _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
      count: { $sum: 1 },
    },
  },
  { $sort: { _id: 1 } },
]);
```

---

## Admin Analytics

### Platform-Wide Metrics

**Admin Dashboard → Analytics Tab:**
1. **Revenue Analytics**
   - Total revenue (all time)
   - Revenue by product
   - Average order value

2. **User Growth**
   - New users (daily/weekly/monthly)
   - Active users
   - User retention

3. **Product Performance**
   - Units sold by product
   - Revenue by product

4. **Engagement Metrics**
   - Total profile taps (platform-wide)
   - Total connections made
   - Average taps per card

5. **Geographic Distribution**
   - Users by city/country
   - Orders by city/country

---

## Error Handling (v1)

### Frontend Error Handling

```typescript
// Global error boundary (React)
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('React Error:', error, errorInfo);
    // Show user-friendly error message
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// API error handling
async function apiCall() {
  try {
    const response = await fetch('/api/endpoint');
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    toast.error('Something went wrong. Please try again.');
    throw error;
  }
}
```

### Backend Error Handling

```typescript
// Global error handler (Express)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server Error:', err);
  
  // Don't expose internal errors to client
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Async error wrapper
function asyncHandler(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// Usage
app.get('/api/profiles/:id', asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    throw new Error('Profile not found');
  }
  res.json(profile);
}));
```

---

## Logging Strategy (v1)

### Server Logs

**What to Log:**
- ✅ API requests (method, path, status, duration)
- ✅ Errors (stack trace, context)
- ✅ Database queries (slow queries)
- ✅ Payment events (Razorpay webhooks)
- ✅ Email events (sent, failed)

**What NOT to Log:**
- ❌ Passwords
- ❌ API keys
- ❌ Payment details (card numbers)
- ❌ Personal data (unless necessary)

**Example:**
```typescript
// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} ${res.statusCode} ${duration}ms`);
  });
  
  next();
});
```

---

## Future Enhancements (v2)

### Error Monitoring
- Add Sentry for error tracking
- Session replay with LogRocket
- Real-time alerts for critical errors

### Analytics
- Add Google Analytics for marketing insights
- A/B testing framework
- Conversion funnel analysis
- Cohort analysis

---

## Privacy & GDPR Compliance

### Data We Collect

**Anonymous Analytics:**
- Device type (iOS/Android/Desktop)
- Browser
- City/Country (from IP, no precise location)
- Hashed IP (not stored in plain text)

**Personal Data (Connections Only):**
- Name, Email, Phone (when user submits Connect form)
- User can delete connections anytime

### User Rights
- ✅ Right to access data (export analytics)
- ✅ Right to delete data (delete account)
- ✅ Right to opt-out (disable analytics tracking)

### Privacy Policy
- Clearly state what data we collect
- How we use it
- How long we keep it (5 years for analytics)
- User rights

---

## Performance Monitoring (v1)

### Manual Monitoring

**What to Monitor:**
- Server response times (aim for < 200ms)
- Database query times (aim for < 100ms)
- Page load times (aim for < 2 seconds)
- API error rates

**Tools:**
- Server logs
- Browser DevTools (Network tab)
- Lighthouse (for page performance)

**Future (v2):**
- Add Vercel Analytics
- Add New Relic or Datadog
- Set up uptime monitoring (Pingdom, UptimeRobot)

---

## Summary

### v1 Approach: Keep It Simple ✅

**Error Monitoring:**
- Console logging only
- Manual log review
- No external tools

**Analytics:**
- Custom analytics system
- Track profile views, taps, connections
- Display in dashboard
- No Google Analytics

**Why This Works:**
- ✅ Simpler to build
- ✅ No additional costs
- ✅ Meets all business requirements
- ✅ Privacy-friendly
- ✅ Can add external tools later if needed

### v2 Enhancements (Future)
- Add Sentry for error tracking
- Add Google Analytics for marketing
- Add performance monitoring
- Add A/B testing

---

**Last Updated**: 2026-02-10
