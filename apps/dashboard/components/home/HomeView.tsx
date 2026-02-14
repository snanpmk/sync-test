import { Share2, Eye, Link as LinkIcon, TrendingUp, Star } from 'lucide-react';
import { SmartSuggestion } from './SmartSuggestion';
import { HomeInsightsCarousel } from './HomeInsightsCarousel';
import { MetricCard, MetricCardProps } from './MetricCard';
import { ACTIONABLE_SUGGESTIONS } from '../../data/mock-data';
import { QuickActions } from './QuickActions';
import { ProfileStrength } from './ProfileStrength';
import { WeeklyPerformance } from './WeeklyPerformance';
import { RecentActivityList } from './RecentActivityList';
import { SharingMethods } from './SharingMethods';

interface HomeViewProps {
  onNavigate?: (tab: string) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const metrics: MetricCardProps[] = [
    {
      icon: <Eye size={18} strokeWidth={2.5} />,
      label: 'Profile Views',
      value: '1,245',
      trend: '+12%',
      link: 'View Insights',
      colorTheme: 'blue',
      onAction: () => { }, // Handled by link wrapper in MetricCard if we add it, or we just rely on parent
    },
    {
      icon: <LinkIcon size={18} strokeWidth={2.5} />,
      label: 'Total Clicks',
      value: '842',
      trend: '+5%',
      link: 'View Insights',
      colorTheme: 'indigo',
      onAction: () => { },
    },
    {
      icon: <TrendingUp size={18} strokeWidth={2.5} />,
      label: 'Click Rate',
      value: '67.6%',
      trend: '+2.4%',
      link: 'View Details',
      colorTheme: 'emerald',
      onAction: () => { },
    },
  ];

  return (
    <div className="p-4 md:p-8 pt-0 md:pt-0 mx-auto space-y-6 md:space-y-8 relative">
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
          <ProfileStrength />

          {/* 6. Profile Performance Highlight (Single Graph Only) */}
          <WeeklyPerformance />
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
          <RecentActivityList />

          {/* 7. QR / NFC Usage Snapshot */}
          <SharingMethods />
        </div>
      </div>
    </div>
  );
}

