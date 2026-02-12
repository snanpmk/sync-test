export const PERFORMANCE_DATA = [
  { name: 'Mon', views: 40, clicks: 24 },
  { name: 'Tue', views: 30, clicks: 13 },
  { name: 'Wed', views: 20, clicks: 90 },
  { name: 'Thu', views: 27, clicks: 39 },
  { name: 'Fri', views: 18, clicks: 48 },
  { name: 'Sat', views: 23, clicks: 38 },
  { name: 'Sun', views: 34, clicks: 43 },
];

export const MOCK_METRICS = [
  {
    icon: 'Eye',
    label: 'Profile Views',
    value: '1,245',
    trend: '+12%',
    link: 'View Insights',
  },
  {
    icon: 'Link',
    label: 'Total Clicks',
    value: '842',
    trend: '+5%',
    link: 'View Insights',
  },
  {
    icon: 'Star',
    label: 'Review Clicks',
    value: '128',
    trend: '+8%',
    link: 'View Insights',
  },
  {
    icon: 'TrendingUp',
    label: 'Growth',
    value: '18%',
    trend: 'vs last week',
    link: 'View Activity',
    isGrowth: true,
  },
];

export const MOCK_SUGGESTIONS = [
  { text: 'Add Gallery', reward: '+20%' },
  { text: 'Link Calendar', reward: '+10%' },
  { text: 'Verify Email', reward: '+5%' },
];

export const ACTIONABLE_SUGGESTIONS = [
  {
    text: 'You received 24 views this week. Add a stronger Call-To-Action.',
    type: 'warning' as const,
  },
  {
    text: 'Add WhatsApp button for faster direct responses.',
    type: 'tip' as const,
  },
];

export const RECENT_ACTIVITY = [
  {
    text: 'New connection saved your contact',
    time: '2h ago',
    type: 'connection' as const,
  },
  {
    text: 'Profile viewed from New York',
    time: '4h ago',
    type: 'view' as const,
  },
  { text: 'Instagram link clicked', time: '6h ago', type: 'click' as const },
];
