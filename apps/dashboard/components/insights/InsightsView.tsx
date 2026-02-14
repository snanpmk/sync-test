'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Social & Demographics (Lg: 7/12) */}
        <TrafficAnalysis />

        {/* Right Column - Locations & AI (Lg: 5/12) */}
        <AudienceAnalysis />
      </div>

      {/* Bottom Floating Tip or motivation */}
      <div className="bg-primary p-6 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_20px_50px_rgba(204,255,0,0.2)]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-black rounded-2xl shadow-lg">
            <Sparkles className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-black font-black text-lg">
              Your profile is trending!
            </h3>
            <p className="text-black/70 text-sm font-medium">
              You've reached <span className="font-bold">2,500 new people</span>{' '}
              this week. Keep sharing!
            </p>
          </div>
        </div>
        <button className="px-8 py-4 bg-black text-primary font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
          EXPORT FULL REPORT
        </button>
      </div>
    </div>
  );
}

