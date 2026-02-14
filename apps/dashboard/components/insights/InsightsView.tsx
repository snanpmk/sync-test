'use client';

import { useState } from 'react';
import { Sparkles, Users, MousePointer2, Smartphone, TrendingUp } from 'lucide-react';
import { MetricCard } from '../home/MetricCard';
import { InsightsHeader } from './InsightsHeader';
import { PrimaryStats } from './PrimaryStats';
import { EngagementStats } from './EngagementStats';
import { PerformanceOverview } from './PerformanceOverview';
import { TrafficAnalysis } from './TrafficAnalysis';
import { AudienceAnalysis } from './AudienceAnalysis';

export function InsightsView() {
  const [activePeriod, setActivePeriod] = useState<
    'daily' | 'weekly' | 'monthly' | 'six_months'
  >('weekly');

  return (
    <div className="p-4 lg:p-10 space-y-10 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header Context & Filters */}
      <InsightsHeader
        activePeriod={activePeriod}
        onPeriodChange={setActivePeriod}
      />

      {/* Primary KPI Stats */}
      <PrimaryStats />

      {/* Engagement Stats */}
      <EngagementStats />

      {/* Main Graph: Views vs Clicks */}
      <PerformanceOverview activePeriod={activePeriod} />

      {/* Grid Layout for secondary charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Users size={20} />}
          label="Profile Views"
          value="12,234"
          trend="+12%"
          link="Audience Data"
        />
        <MetricCard
          icon={<MousePointer2 size={20} />}
          label="Link Clicks"
          value="8,540"
          trend="+25%"
          link="Click Map"
        />
        <MetricCard
          icon={<Smartphone size={20} />}
          label="NFC/QR Scans"
          value="945"
          trend="+15%"
          link="Hardware Stats"
        />
        <MetricCard
          icon={<TrendingUp size={20} />}
          label="Conversion Rate"
          value="4.8%"
          trend="+2.1%"
          link="Funnel Analysis"
        />
      </div>

      {/* Bottom Floating Tip or motivation */}
      <div className="bg-primary p-6 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_20px_50px_rgba(190,238,2,0.2)]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-neutral-900 rounded-2xl shadow-lg">
            <Sparkles className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-neutral-900 font-black text-lg">
              Your profile is trending!
            </h3>
            <p className="text-neutral-900/70 text-sm font-medium">
              You've reached <span className="font-bold">2,500 new people</span>{' '}
              this week. Keep sharing!
            </p>
          </div>
        </div>
        <button className="px-8 py-4 bg-neutral-900 text-primary font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
          EXPORT FULL REPORT
        </button>
      </div>
    </div>
  );
}

