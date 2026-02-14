import { CountUp } from '../ui/CountUp';
import {
  Share2,
  Eye,
  Link as LinkIcon,
  Star,
  TrendingUp,
  PenSquare,
  Copy,
  Download,
  ScanLine,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { SuggestionBadge } from './SuggestionBadge';
import { SmartSuggestion } from './SmartSuggestion';
import { ActivityItem } from './ActivityItem';
import { QuickActionBtn } from './QuickActionBtn';
import { HomeInsightsCarousel } from './HomeInsightsCarousel';
import { MetricCard, MetricCardProps } from './MetricCard';
import {
  PERFORMANCE_DATA,
  MOCK_SUGGESTIONS,
  ACTIONABLE_SUGGESTIONS,
  RECENT_ACTIVITY,
} from '../../data/mock-data';

interface HomeViewProps {
  onNavigate?: (tab: string) => void;
}

// ... existing imports ...

export function HomeView({ onNavigate }: HomeViewProps) {
  const handleShare = () => {
    // Basic clipboard sharing logic
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '/profile/alex');
      alert('Profile link copied to clipboard!');
    }
  };



  const metrics: MetricCardProps[] = [
    {
      icon: <Eye size={18} strokeWidth={2.5} />,
      label: 'Profile Views',
      value: '1,245',
      trend: '+12%',
      link: 'View Insights',
      colorTheme: 'blue',
      onAction: () => onNavigate?.('insights'),
    },
    {
      icon: <LinkIcon size={18} strokeWidth={2.5} />,
      label: 'Total Clicks',
      value: '842',
      trend: '+5%',
      link: 'View Insights',
      colorTheme: 'indigo',
      onAction: () => onNavigate?.('insights'),
    },
    {
      icon: <TrendingUp size={18} strokeWidth={2.5} />,
      label: 'Click Rate',
      value: '67.6%',
      trend: '+2.4%',
      link: 'View Details',
      colorTheme: 'emerald',
      onAction: () => onNavigate?.('insights'),
    },
  ];

  const QuickActions = () => (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <QuickActionBtn
        icon={<PenSquare size={20} />}
        label="Edit Profile"
        onClick={() => onNavigate?.('account')}
        colorTheme="orange"
      />
      <QuickActionBtn
        icon={<Share2 size={20} />}
        label="Share Profile"
        onClick={handleShare}
        colorTheme="blue"
      />
      <QuickActionBtn
        icon={<Copy size={20} />}
        label="Copy Link"
        onClick={() => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(
              window.location.origin + '/profile/alex'
            );
            alert('Link copied!');
          }
        }}
        colorTheme="emerald"
      />
      <QuickActionBtn
        icon={<Download size={20} />}
        label="Download QR"
        onClick={() => alert('Downloading QR Code...')}
        colorTheme="purple"
      />
    </section>
  );

  return (
    <div className="p-4 md:p-8 pt-0 md:pt-0 mx-auto space-y-6 md:space-y-8 relative">
      {/* 1. Performance Snapshot (High-Level Only) */}
      {/* 1. Performance Snapshot (High-Level Only) */}
      <section>
        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <HomeInsightsCarousel metrics={metrics} />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3 width on lg) */}
        <div className="lg:col-span-2 space-y-6">
          {/* 5. Quick Actions Panel (Moved Up) */}
          <QuickActions />

          {/* 2. Profile Strength - Emotional: Achievement & Progress */}
          <section className="bg-white border border-neutral-100 rounded-[32px] p-6 lg:p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 relative z-10">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100/50 text-emerald-600 text-xs font-bold ring-4 ring-emerald-50">
                    <CountUp end={80} suffix="%" />
                  </span>
                  Profile Strength
                </h2>
                <p className="text-neutral-500 text-sm mt-1 font-medium ml-12">
                  Almost there! 🔥 Complete these to boost engagement.
                </p>
              </div>
              <button
                onClick={() => onNavigate?.('account')}
                className="text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-200 active:scale-95"
              >
                Complete Profile →
              </button>
            </div>
            {/* Progress Bar with Glow */}
            <div className="w-full bg-neutral-100 rounded-full h-3 mb-6 overflow-visible relative z-10">
              <div
                className="bg-emerald-500 h-full rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] relative"
                style={{ width: '80%' }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-emerald-500 shadow-sm" />
              </div>
            </div>
            {/* Missing Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 relative z-10">
              {MOCK_SUGGESTIONS.map((s, i) => (
                <SuggestionBadge key={i} text={s.text} reward={s.reward} />
              ))}
            </div>
          </section>

          {/* 6. Profile Performance Highlight (Single Graph Only) */}
          <section className="bg-white border border-neutral-100 rounded-[32px] p-6 lg:p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="font-bold text-xl flex items-center gap-2 text-neutral-900">
                Weekly Performance
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                  Last 7 Days
                </span>
              </h3>
              <button
                onClick={() => onNavigate?.('insights')}
                className="text-xs font-semibold text-neutral-500 hover:text-black transition-colors flex items-center gap-1 cursor-pointer bg-neutral-50 px-3 py-1.5 rounded-full hover:bg-neutral-100"
              >
                View Insights <ChevronRight size={12} strokeWidth={3} />
              </button>
            </div>

            <div className="h-48 md:h-64 w-full -ml-2 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_DATA}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#171717" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#171717" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorClicks"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#beee02" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#beee02" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    vertical={false}
                    stroke="#f3f4f6"
                    strokeDasharray="3 3"
                    opacity={1}
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#a3a3a3', fontSize: 11, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#a3a3a3', fontSize: 11, fontWeight: 500 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#000000',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                    itemStyle={{
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 500,
                      padding: '2px 0',
                    }}
                    labelStyle={{
                      color: '#a3a3a3',
                      marginBottom: '4px',
                      fontSize: '11px',
                    }}
                    cursor={{ stroke: '#e5e5e5', strokeWidth: 1 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#171717"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorViews)"
                    activeDot={{
                      r: 4,
                      fill: '#171717',
                      stroke: '#fff',
                      strokeWidth: 2,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="clicks"
                    stroke="#beee02"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorClicks)"
                    activeDot={{
                      r: 4,
                      fill: '#beee02',
                      stroke: '#fff',
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Right Column (1/3 width on lg) */}
        <div className="space-y-6">
          {/* 8. Motivation Section */}
          <section className="bg-linear-to-br from-amber-50 to-orange-50 border border-orange-100 rounded-[32px] p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <Star size={80} className="text-orange-400 rotate-12" />
            </div>
            <p className="text-xs uppercase tracking-wider text-orange-600 font-bold mb-2 flex items-center gap-1">
              <Star size={12} fill="currentColor" /> Weekly Achievement
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">
              You are in the Top 20% most viewed profiles!
            </h3>
            <p className="text-sm text-neutral-600">
              Keep sharing your card to reach the top 10% and unlock new badges.
            </p>
          </section>

          {/* 3. Smart Growth Suggestions (AI / Logic-Based) */}
          <section className="bg-white border border-neutral-100 rounded-[32px] p-6 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300">
            <h3 className="font-bold mb-5 text-xs uppercase tracking-wider text-neutral-500 flex items-center justify-between">
              Suggested For You
              <span className="bg-black text-white font-semibold text-[10px] px-2.5 py-1 rounded-full shadow-md shadow-black/20">
                AI Powered
              </span>
            </h3>
            <div className="space-y-3">
              {ACTIONABLE_SUGGESTIONS.map((s, i) => (
                <SmartSuggestion key={i} text={s.text} type={s.type} />
              ))}
            </div>
          </section>

          {/* 4. Recent Activity (Preview Only) */}
          {/* 4. Recent Activity (Preview Only) */}
          <section className="bg-white border border-neutral-100 rounded-[32px] p-6 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-neutral-900">Recent Activity</h3>
              <button className="text-xs text-primary hover:underline transition-all">
                View All
              </button>
            </div>
            <ul className="space-y-4">
              {RECENT_ACTIVITY.map((activity, i) => (
                <ActivityItem
                  key={i}
                  text={activity.text}
                  time={activity.time}
                  type={activity.type}
                />
              ))}
            </ul>
          </section>

          {/* 7. QR / NFC Usage Snapshot */}
          <section className="bg-white border border-neutral-100 rounded-[32px] p-6 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300">
            <h3 className="font-bold mb-4 text-neutral-900">Sharing Methods</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 bg-neutral-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-100 transition-colors cursor-pointer group">
                <ScanLine className="text-neutral-900 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-bold text-neutral-900">
                  <CountUp end={142} />
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  QR Scans
                </span>
              </div>
              <div className="flex-1 bg-neutral-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-100 transition-colors cursor-pointer group">
                <Smartphone className="text-neutral-900 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-bold text-neutral-900">
                  <CountUp end={89} />
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  NFC Taps
                </span>
              </div>
            </div>
            <p className="text-xs text-center text-neutral-500">
              🚀 <span className="text-neutral-900 font-bold">QR Codes</span>{' '}
              are your most popular sharing method this week.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
