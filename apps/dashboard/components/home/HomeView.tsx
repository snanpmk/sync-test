import { Share2, Eye, Link as LinkIcon, TrendingUp, Star } from 'lucide-react';
import { SmartSuggestion } from './SmartSuggestion';
import { HomeInsightsCarousel } from './HomeInsightsCarousel';
import { MetricCard, MetricCardProps } from './MetricCard';

import { ACTIONABLE_SUGGESTIONS } from '../../data/mock-data';
import { QuickActions } from './QuickActions';
import { ProfileStrength } from './ProfileStrength';
import { WeeklyPerformance } from './WeeklyPerformance';
import { RecentActivityList } from './RecentActivityList';

import { WeeklyAchievement } from './WeeklyAchievement';
import { SuggestedActions } from './SuggestedActions';

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
  const THEME_STYLES = {
    orange: {
      bg: 'bg-neutral-50',
      text: 'text-neutral-900',
      border: 'border-neutral-100',
      hover: 'hover:bg-neutral-100',
    },
    blue: {
      bg: 'bg-neutral-50',
      text: 'text-neutral-900',
      border: 'border-neutral-100',
      hover: 'hover:bg-neutral-100',
    },
    indigo: {
      bg: 'bg-neutral-50',
      text: 'text-neutral-900',
      border: 'border-neutral-100',
      hover: 'hover:bg-neutral-100',
    },
    purple: {
      bg: 'bg-neutral-50',
      text: 'text-neutral-900',
      border: 'border-neutral-100',
      hover: 'hover:bg-neutral-100',
    },
    emerald: {
      bg: 'bg-neutral-50',
      text: 'text-neutral-900',
      border: 'border-neutral-100',
      hover: 'hover:bg-neutral-100',
    },
    black: {
      bg: 'bg-neutral-50',
      text: 'text-neutral-900',
      border: 'border-neutral-100',
      hover: 'hover:bg-neutral-100',
    },
  };

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

        {/* Row 1 on Desktop */}
        <div className="lg:col-span-3">
          <QuickActions />
        </div>

        {/* Column 1 */}
        <div className="space-y-6 flex flex-col">
          <ProfileStrength />
        </div>

        {/* Column 2 (Wide) */}
        <div className="lg:col-span-2 space-y-6 flex flex-col">
          <WeeklyPerformance />
          {/* Mobile Only: Weekly Achievement flow (Profile -> Performance -> Achievement) */}
          <div className="block lg:hidden">
            <WeeklyAchievement />
          </div>
        </div>

        {/* Row 2 / Grid flow */}
        {/* Desktop: Weekly Achievement takes a slot */}
        <div className="hidden lg:block">
          <WeeklyAchievement />
        </div>

        {/* Desktop: Suggestions List */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <SuggestedActions>
              {ACTIONABLE_SUGGESTIONS.map((s, i) => (
                <SmartSuggestion key={i} text={s.text} type={s.type} />
              ))}
            </SuggestedActions>

            {/* Recent Activity or other widgets */}
            <RecentActivityList />
          </div>
        </div>
      </div>
    </div>
  );
}

