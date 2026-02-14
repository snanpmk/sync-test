'use client';

import { useState } from 'react';
import { InsightsHeader } from './InsightsHeader';
import { PrimaryStats } from './PrimaryStats';
import { PerformanceOverview } from './PerformanceOverview';
import { TrafficAnalysis } from './TrafficAnalysis';
import { AudienceAnalysis } from './AudienceAnalysis';
import { InsightFilters } from './InsightFilters';
import { Share2, Check } from 'lucide-react';
import { useEffect } from 'react';

export function InsightsView() {
  const [copied, setCopied] = useState(false);
  const [activePeriod, setActivePeriod] = useState<
    'daily' | 'weekly' | 'monthly' | 'six_months'
  >('weekly');

  const handleShare = () => {
    navigator.clipboard.writeText('sync-test.com/alex-profile');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [activePeriod]);

  return (
    <div className="p-4 lg:p-10 space-y-8 max-w-[1600px] mx-auto">
      {/* Header Context */}
      <InsightsHeader />

      {/* Sticky Filters Tab - Pinned ALWAYS across all screen sizes */}
      <div className="sticky top-0 z-50 bg-neutral-50 -mx-4 px-4 py-2 sm:mx-0 sm:px-0 sm:top-2 md:top-0 !mt-2">
        <InsightFilters
          activePeriod={activePeriod}
          onChange={setActivePeriod}
        />
      </div>

      {/* Trending Banner (Top-most highlight) */}
      <div className="bg-[#beee02] p-8 rounded-[32px] flex flex-col items-center text-center gap-6 shadow-[0_20px_50px_rgba(190,238,2,0.1)]">
        <div className="space-y-2">
          <h3 className="text-neutral-900 font-extrabold text-2xl tracking-tight leading-none">
            Your profile is trending!
          </h3>
          <p className="text-neutral-900/70 text-sm font-semibold max-w-[280px] mx-auto leading-relaxed">
            You've reached <span className="font-bold">2,500 new people</span> this week. Keep sharing!
          </p>
        </div>
        <button
          onClick={handleShare}
          className="px-10 py-4 bg-[#222222] text-white font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 group"
        >
          {copied ? (
            <>
              <Check size={14} className="text-[#beee02]" />
              LINK COPIED!
            </>
          ) : (
            <>
              <Share2 size={14} className="text-[#beee02] group-hover:rotate-12 transition-transform" />
              SHARE YOUR PROFILE
            </>
          )}
        </button>
      </div>

      {/* Primary KPI Stats */}
      <PrimaryStats />

      {/* Main Graph: Views vs Clicks */}
      <PerformanceOverview activePeriod={activePeriod} />

      {/* Detailed Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <TrafficAnalysis />
        <AudienceAnalysis />
      </div>
    </div>
  );
}
