'use client';

import { Share2, Eye, Link as LinkIcon, TrendingUp } from 'lucide-react';
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
    },
    {
      icon: <LinkIcon size={18} strokeWidth={2.5} />,
      label: 'Total Clicks',
      value: '842',
      trend: '+5%',
      link: 'View Insights',
      colorTheme: 'indigo',
    },
    {
      icon: <TrendingUp size={18} strokeWidth={2.5} />,
      label: 'Click Rate',
      value: '67.6%',
      trend: '+2.4%',
      link: 'View Details',
      colorTheme: 'emerald',
    },
  ];

  return (
    <div className="container mx-auto max-w-[1400px] space-y-6">
      {/* 1. Mobile Carousel (Only visible on small screens) */}
      <div className="lg:hidden">
        <HomeInsightsCarousel metrics={metrics} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Section (Column 1-8 on Desktop) */}
        <div className="lg:col-span-8 space-y-6">

          {/* A. Desktop Only: Profile Strength Bar */}
          <div className="hidden lg:block">
            <ProfileStrength />
          </div>

          {/* B. Desktop Only: Stats & Achievement Grid */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-4">
            {/* Row 1, Col 1 */}
            <div className="col-span-1">
              <MetricCard {...metrics[0]} />
            </div>
            {/* Row 1, Col 2 */}
            <div className="col-span-1">
              <MetricCard {...metrics[1]} />
            </div>
            {/* Row 1&2, Col 3-4 */}
            <div className="col-span-2 row-span-2">
              <WeeklyAchievement />
            </div>
            {/* Row 2, Col 1 */}
            <div className="col-span-1">
              <MetricCard {...metrics[2]} />
            </div>
            {/* Row 2, Col 2 (Empty) */}
            <div className="col-span-1"></div>
          </div>

          {/* C. Mobile Only: Quick Actions & Profile Strength Sequence */}
          <div className="lg:hidden space-y-6">
            <QuickActions />
            <ProfileStrength />
          </div>

          {/* D. Desktop Only: Quick Actions Bar */}
          <div className="hidden lg:block">
            <QuickActions />
          </div>

          {/* E. Desktop Only: Recent Activities */}
          <section className="hidden lg:block bg-white rounded-[40px] p-8 lg:p-10 border border-neutral-100/60 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 tracking-tight">Recent Activities</h3>
              <button className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-black transition-all">
                View All
              </button>
            </div>
            <RecentActivityList />
          </section>

          {/* F. Mobile Only: Weekly Achievement at bottom - REMOVED from here to move below performance */}
        </div>

        {/* Right Section (Column 9-12 on Desktop) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="h-full">
            <WeeklyPerformance />
          </div>

          {/* F. Mobile Only: Weekly Achievement after performance */}
          <div className="lg:hidden">
            <WeeklyAchievement />
          </div>

          {/* F. Suggested For You */}
          <SuggestedActions>
            {ACTIONABLE_SUGGESTIONS.map((s, i) => (
              <SmartSuggestion key={i} text={s.text} type={s.type} />
            ))}
          </SuggestedActions>

          {/* G. Mobile Only: Recent Activities (Shown last) */}
          <section className="lg:hidden bg-white rounded-[40px] p-8 border border-neutral-100/60 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Recent Activities</h3>
              <button className="bg-neutral-900 text-white px-5 py-2 rounded-full text-[10px] font-bold hover:bg-black transition-all">
                View All
              </button>
            </div>
            <RecentActivityList />
          </section>
        </div>
      </div>
    </div>
  );
}
