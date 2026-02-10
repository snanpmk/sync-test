# Customer Dashboard - UX Specification

## Overview
The Customer Dashboard is where users manage their SynConnect profiles, view analytics, and track connections.

**URL**: `dashboard.synconnect.com`

---

## Dashboard Structure

### Navigation: 4 Main Tabs
```
┌─────────────────────────────────────────────────────────────┐
│  SynConnect Dashboard                          👤 John Doe ▼│
├─────────────────────────────────────────────────────────────┤
│  [📊 Insights] [👤 Profile] [🤝 Connections] [⚙️ Settings] │
└─────────────────────────────────────────────────────────────┘
```

### Starting Point
**Default Landing Page**: 📊 **Insights Tab**

When a user signs in, they immediately see their analytics dashboard.

---

## Tab 1: 📊 Insights (Analytics Dashboard)

### Purpose
View comprehensive analytics about card usage, social media performance, connections, and geographical reach.

### Time Period Filters
- **Daily**: Last 7 days (hourly breakdown)
- **Weekly**: Last 8 weeks (daily breakdown)
- **Monthly**: Last 12 months (weekly breakdown)
- **Yearly**: Last 5 years (monthly breakdown)

### Sections

#### 1. Card Usage Overview
**Metrics:**
- Total Taps (with % change vs previous period)
- Profile Views (with % change)
- Unique Users (with % change)

**Visual**: 3 metric cards with trend indicators (↑ ↓ →)

#### 2. Usage Trend Chart
**Visual**: Line chart showing taps and views over the selected time period

**Breakdown by Period:**
- Daily: Hourly data points
- Weekly: Daily data points
- Monthly: Weekly data points
- Yearly: Monthly data points

#### 3. Social Media Breakdown
**Table showing:**
- Platform name (LinkedIn, Twitter, Instagram, Portfolio, Email, Phone, Website, etc.)
- Total clicks
- Click-through rate (CTR)
- Trend vs previous period
- Visual bar chart

**Sorting**: By clicks (descending)

#### 4. Connections Made
**Metrics:**
- Total connections count
- Bar chart showing connections per day/week/month/year
- Breakdown by source:
  - Networking Events
  - Client Meetings
  - Conferences
  - Other

#### 5. Geographical Location
**Visual**: Interactive map with pins or heatmap

**Table showing:**
- Location (City, Country)
- Number of taps
- Percentage of total
- Visual bar chart

**Additional Info:**
- International reach (number of countries)

#### 6. Device Breakdown
**Visual**: Pie chart

**Data:**
- iOS (percentage and count)
- Android (percentage and count)
- Desktop (percentage and count)

#### 7. Peak Activity Times
**Visual**: Heatmap (Day of Week vs Hour of Day)

**Insights:**
- Busiest day of the week
- Peak hour of the day

### Actions
- 📥 Export Data (CSV)
- 📊 Generate Report (PDF)

---

## Tab 2: 👤 Profile (Edit Profile)

### Purpose
Edit profile content with live preview.

### Layout
**Split Screen:**
- **Left 50%**: Edit Panel (form fields)
- **Right 50%**: Live Preview (real-time preview of profile)

### Sections

#### 1. Basic Information
- Profile Photo (upload/change)
- Full Name
- Job Title
- Company
- Bio (textarea)

#### 2. Contact Information
- Email
- Phone
- Website
- Location

#### 3. Social Links
- Add/remove social media links
- Supported platforms:
  - LinkedIn
  - Twitter
  - Instagram
  - Facebook
  - GitHub
  - Behance
  - Dribbble
  - YouTube
  - TikTok
  - Custom URL

**UI**: [+ Add Link] button with dropdown to select platform

#### 4. Services (Optional)
- Add/remove services offered
- Each service has:
  - Service name
  - Description (optional)

**UI**: [+ Add Service] button, each service has [Edit] [×] buttons

#### 5. Products / Portfolio (Optional)
**Purpose**: Display products, projects, or portfolio items on profile

**Each Product has:**
- Product Image (upload)
- Product Name
- Description
- Price (optional)
- Link/CTA URL
- Button Text (e.g., "Learn More", "View Case Study", "Buy Now")

**UI**: 
- [+ Add Product] button
- Each product card shows:
  - Thumbnail
  - Name
  - [Edit] [×] buttons
- Click [Edit] to expand inline editor

**Product Editor:**
```
┌────────────────────────────────────────────────────────┐
│ Product Image: [Upload/Change]  [Current image]       │
│ Product Name:  [E-commerce App Redesign___________]   │
│ Description:   [Complete redesign of mobile app...]   │
│                [________________________________]      │
│ Price:         [₹ 50,000] (Optional)                  │
│ Link/CTA:      [https://example.com/case-study___]    │
│ Button Text:   [Learn More___]                        │
│                                                        │
│ [Save] [Cancel]                                       │
└────────────────────────────────────────────────────────┘
```

#### 6. Appearance
- Theme (Electric Green, Blue, Purple, etc.)
- Layout (Modern, Classic, Minimal)
- Font (Inter, Roboto, Outfit, etc.)

### Actions
- [Cancel] - Discard changes
- [Save Changes] - Save and update profile
- [View Public Profile →] - Open profile in new tab

### Live Preview
**Shows:**
- Real-time preview of profile as user edits
- Mobile and desktop views (toggle)
- All sections: Basic info, Contact, Social links, Services, Products

---

## Tab 3: 🤝 Connections (Lead Management)

### Purpose
View and manage all connections made through the profile.

### How Connections are Created

**Connections are ONLY created when visitors explicitly click the "Connect" button on the profile and submit the form.**

#### User Flow:
```
1. Visitor taps NFC card
2. Profile page opens
3. Visitor sees "Connect with Me" button (prominent CTA)
4. Visitor clicks button
5. Dialog/Modal opens with connection form
6. Visitor fills form and submits
7. Connection saved to database
8. Profile owner sees it in Connections tab
9. (Optional) Profile owner gets email notification
```

#### Connection Form Fields:
```
┌─────────────────────────────────────────┐
│  Connect with John Doe                  │
├─────────────────────────────────────────┤
│                                         │
│  Name:     [________________] *Required │
│  Email:    [________________] *Required │
│  Phone:    [________________] Optional  │
│  Company:  [________________] Optional  │
│  Message:  [________________] Optional  │
│            [________________]           │
│                                         │
│  [Cancel]           [Connect]           │
└─────────────────────────────────────────┘
```

#### What Gets Stored:
- **Visitor Info** (from form): Name, Email, Phone, Company, Message
- **Metadata** (auto-captured): Timestamp, Location (city/country from IP), Device type, Browser
- **Status**: isRead (false by default), tags (empty), notes (empty)

#### Analytics vs Connections:
- **Analytics**: Track all profile views, taps, link clicks (anonymous)
- **Connections**: Only created when visitor submits Connect form (with contact details)

**Note**: Clicking social links (LinkedIn, Email, etc.) does NOT create a connection. Only the Connect button form creates connections.

### Filters
- All
- Today
- This Week
- This Month
- Custom date range

### Search
Search by name, email, location, or notes

### Connection Summary
**Metrics:**
- Total connections
- Connections this week
- Connections this month

### Connection List
**Each connection shows:**
- Name (or "Anonymous" if no form filled)
- Email (if provided)
- Phone (if provided)
- Location (City, Country)
- Which link they clicked
- Job title / Company (if provided via form)
- Timestamp (relative: "2 hours ago", "1 day ago")

**Additional Features:**
- Notes: Add private notes about this connection
- Tags: Add tags (e.g., "Client", "Lead", "Networking Event", "Follow-up")
- Actions:
  - 📧 Email (opens email client)
  - 💬 Add Note
  - 🏷️ Add Tag
  - ⋮ More (Archive, Delete)

### Actions
- 📥 Export All Connections (CSV)
- 📧 Email Selected (bulk email)

---

## Tab 4: ⚙️ Settings

### Purpose
Manage account settings, profiles, notifications, and privacy.

### Sections

#### 1. Account Information
- Email (with [Change] button)
- Password (with [Change] button)
- Phone (with [Change] button)

#### 2. My Profiles
**Purpose**: Manage multiple profiles (if user has more than one)

**Features:**
- [+ Create New Profile] button
- List of all profiles:
  - Profile name
  - Profile URL
  - Status (Active/Inactive)
  - Number of cards linked
  - Actions: [Edit] [View Public] [Delete]

**Note**: Users can create multiple profiles for different purposes (e.g., work, personal, side business)

#### 3. Notifications
**Email Preferences:**
- ☑ Email me when someone taps my card
- ☑ Daily analytics summary (8:00 AM)
- ☑ Weekly analytics report (Monday 9:00 AM)
- ☑ New connection notifications
- ☑ Order updates and shipping notifications

#### 4. Connected Accounts
- Google: ✅ Connected (email@gmail.com) [Disconnect]

#### 5. Order History
- [View All Orders →] link
- Recent orders preview:
  - Order number
  - Status
  - Date

#### 6. Privacy & Security
- ☑ Make my profile public (searchable)
- ☐ Show location data on profile
- ☑ Allow analytics tracking

#### 7. Danger Zone
- [Delete Account] button - Permanently delete account and all data

---

## Mobile Responsiveness

### Mobile Navigation
**Bottom Tab Bar:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  [Content Area]                                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  [📊]      [👤]      [🤝]      [⚙️]                         │
│  Insights  Profile  Connections Settings                    │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Optimizations
- **Insights**: Stack metrics vertically, scrollable charts
- **Profile**: Edit panel full width, preview accessible via [Preview] button
- **Connections**: Card-based layout, swipe actions
- **Settings**: Accordion-style sections

---

## User Flow Examples

### First-Time User (After Activation)
```
1. Sign in → Lands on Insights tab
2. Sees "No data yet" message with CTA: "Complete your profile"
3. Clicks CTA → Redirected to Profile tab
4. Fills profile → Saves
5. Returns to Insights → Sees "Start sharing your card to see analytics"
```

### Returning User
```
1. Sign in → Lands on Insights tab
2. Sees latest analytics (default: Weekly view)
3. Checks social media breakdown
4. Switches to Connections tab
5. Reviews new connections
6. Adds notes to important leads
7. Exports connections CSV
```

### User Editing Profile
```
1. Clicks Profile tab
2. Sees current profile in live preview
3. Edits basic info → Sees changes in real-time
4. Adds new product:
   - Clicks [+ Add Product]
   - Fills product details
   - Uploads image
   - Saves
5. Sees product appear in live preview
6. Clicks [Save Changes]
7. Profile updated
```

---

## Key Features Summary

### Analytics (Insights Tab)
- ✅ Daily, Weekly, Monthly, Yearly views
- ✅ Card usage metrics (taps, views, unique users)
- ✅ Social media breakdown with CTR
- ✅ Connections made over time
- ✅ Geographical location map + table
- ✅ Device breakdown (iOS, Android, Desktop)
- ✅ Peak activity times heatmap
- ✅ Export data (CSV) and generate reports (PDF)

### Profile Management (Profile Tab)
- ✅ Live preview (split screen)
- ✅ Basic info, contact, social links
- ✅ Services section
- ✅ **Products/Portfolio section** with images, descriptions, CTAs
- ✅ Appearance customization (theme, layout, font)
- ✅ Real-time preview updates

### Connections (Connections Tab)
- ✅ Connection list with details
- ✅ Notes and tags for each connection
- ✅ Filters (date range)
- ✅ Search functionality
- ✅ Export connections (CSV)
- ✅ Bulk email

### Settings (Settings Tab)
- ✅ Account management
- ✅ Multiple profile support
- ✅ Notification preferences
- ✅ Connected accounts (Google OAuth)
- ✅ Order history
- ✅ Privacy settings
- ✅ Account deletion

---

## Technical Notes

### Data Tracking

#### Analytics Tracking (Anonymous)
**Analytics are tracked when:**
- Someone taps the NFC card (tap event)
- Someone views the profile page (view event)
- Someone clicks a social link (click event with link type)

**Data stored per analytics event:**
- Timestamp
- User agent (device type, browser)
- IP address (for geolocation - city level only)
- Referrer (if applicable)
- Link clicked (if applicable)

**Note**: Analytics are anonymous and aggregated for insights.

#### Connection Tracking (With Contact Details)
**Connections are created when:**
- Someone clicks the "Connect with Me" button
- Fills out the connection form
- Submits the form

**Data stored per connection:**
- Name (required)
- Email (required)
- Phone (optional)
- Company (optional)
- Message (optional)
- Timestamp
- Location (city/country from IP)
- Device type
- Browser
- isRead status
- Tags (added by profile owner)
- Notes (added by profile owner)

**Note**: Connections contain personally identifiable information (PII) and are stored securely.

### Privacy Considerations
- IP addresses are hashed for privacy
- Geolocation is city-level only (not precise)
- Users can opt out of analytics tracking
- Connections can be deleted by user

---

**Last Updated**: 2026-02-10
