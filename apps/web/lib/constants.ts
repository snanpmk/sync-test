import { Zap, Shield, Target } from 'lucide-react';

export const MOCK_ANALYTICS_STATS = [
  { label: 'Profile Views', value: '1,280', trend: '+124%' },
  { label: 'Social Clicks', value: '450', trend: '+45%' },
  { label: 'Contact', value: '85', trend: '+8%' },
  { label: 'Conversion', value: '18.5%', trend: '+2.4%' },
];

export const MOCK_CHART_DATA = [
  { name: 'Mon', views: 85, clicks: 35 },
  { name: 'Tue', views: 110, clicks: 45 },
  { name: 'Wed', views: 160, clicks: 75 },
  { name: 'Thu', views: 220, clicks: 90 },
  { name: 'Fri', views: 190, clicks: 80 },
  { name: 'Sat', views: 260, clicks: 120 },
  { name: 'Sun', views: 240, clicks: 105 },
];

export const MOCK_STAND_CHART_DATA = [
  { name: 'Mon', taps: 120, reviews: 40 },
  { name: 'Tue', taps: 150, reviews: 55 },
  { name: 'Wed', taps: 130, reviews: 45 },
  { name: 'Thu', taps: 180, reviews: 70 },
  { name: 'Fri', taps: 210, reviews: 90 },
  { name: 'Sat', taps: 290, reviews: 140 },
  { name: 'Sun', taps: 250, reviews: 110 },
];

export const MOCK_CARD_PIE_DATA = [
  { name: 'Mobile', value: 75 },
  { name: 'Desktop', value: 20 },
  { name: 'Tablet', value: 5 },
];

export const MOCK_STAND_PIE_DATA = [
  { name: '5 Star', value: 65 },
  { name: '4 Star', value: 25 },
  { name: '3 Star', value: 10 },
];

export const PIE_COLORS = ['#beee02', '#4c4c4c', '#a0a0a0'];

export const PROFESSIONAL_STEPS = [
  {
    title: 'Purchase your card',
    text: 'Select your preferred design and finish from our shop.',
  },
  {
    title: 'Setup your profile',
    text: 'Add your contact info, social links, and showcase services.',
  },
  {
    title: 'Tap to share instantly',
    text: 'Touch your card to any smartphone to share your profile.',
  },
];

export const BUSINESS_STEPS = [
  {
    title: 'Purchase your stand',
    text: 'Premium acrylic stands built for high-traffic service counters.',
  },
  {
    title: 'Add Google review link',
    text: 'Configure your destination in seconds on our dashboard.',
  },
  {
    title: 'Collect reviews instantly',
    text: 'Drive massive customer action with a simple counter-top tap.',
  },
];

export const CARD_FEATURES = [
  'NFC + QR enabled',
  'Instant contact sharing',
  'Add social media links',
  'Showcase services & portfolio',
  'Real-time analytics',
  'Edit anytime from dashboard',
];

export const STAND_FEATURES = [
  'NFC + QR tap',
  'Direct Google review link',
  'Custom branding',
  'Thank you messaging',
  'Tap tracking analytics',
  'Built for retail/service',
];

export const FAQS = [
  {
    question: "Do I need an app to use SynConnect?",
    answer: "No. SynConnect works natively with NFC-enabled smartphones. When someone taps your card or stand, your profile or review link opens directly in their default web browser (Safari, Chrome, etc.)."
  },
  {
    question: "Which phones are compatible?",
    answer: "Most iPhones (iPhone 7 and newer) and almost all Android devices released in the last 8-10 years have NFC capabilities. For older devices, you can always use the QR code printed on your card or stand."
  },
  {
    question: "Can I change my info after buying?",
    answer: "Absolutely. You can update your contact details, social links, and documents as many times as you want through your SynConnect dashboard. The changes are instant and reflected on your card immediately."
  },
  {
    question: "Is there a monthly subscription?",
    answer: "We offer a one-time purchase for the hardware. Basic profile hosting and analytics are included for free. Advanced professional features and team management tools are available through an optional premium subscription."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. Your data is encrypted and hosted on secure servers. You have complete control over what information you choose to share publicly on your profile."
  }
];

export const ENTERPRISE_EMPLOYEES = [
  { name: 'John Doe', role: 'CTO', status: 'Active', color: 'text-primary' },
  { name: 'Sarah Miller', role: 'Marketing Dir.', status: 'Active', color: 'text-primary' },
  { name: 'Michael Chen', role: 'Sales Lead', status: 'Pending', color: 'text-yellow-500' },
  { name: 'Emma Wilson', role: 'Designer', status: 'Active', color: 'text-primary' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const CORE_VALUES = [
  {
    title: 'Simplicity First',
    text: 'One tap. No apps. No login friction for the receiver.',
    icon: Zap,
  },
  {
    title: 'Privacy Optimized',
    text: 'You control exactly what you share, and when you share it.',
    icon: Shield,
  },
  {
    title: 'Impact Driven',
    text: 'Measurable analytics for every card tap and stand review.',
    icon: Target,
  },
];
