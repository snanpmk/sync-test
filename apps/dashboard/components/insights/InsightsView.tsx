'use client';

import { useState, useEffect } from 'react';
import { InsightFilters } from './InsightFilters';
import { PrimaryStats } from './PrimaryStats';
import { TrendingCard } from './TrendingCard';
import { PerformanceOverview } from './PerformanceOverview';
import { ProductServiceCard } from './ProductServiceCard';
import { TrafficAnalysis } from './TrafficAnalysis';
import { AudienceAnalysis } from './AudienceAnalysis';

export function InsightsView() {
  const [activePeriod, setActivePeriod] = useState<'daily' | 'weekly' | 'monthly' | 'six_months'>('daily');

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [activePeriod]);

  return (
    <div className="p-4 lg:p-8 pt-0 mx-auto space-y-6 max-w-[1600px]">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10">

        {/* Left Column Area (8 cols on desktop) */}
        <div className="lg:col-span-12 space-y-4">

          {/* Mobile Only: Trending Card */}
          <div className="lg:hidden">
            <TrendingCard />
          </div>

          {/* Filters Area - Sticky behavior */}
          <div className="sticky top-0 z-40 bg-[#f8f7f5]/80 backdrop-blur-md -mx-4 px-4 py-4 mb-2">
            <InsightFilters activePeriod={activePeriod} onChange={setActivePeriod} />
          </div>

          {/* Main Content Sections: Top & Middle combined into Two Parallel Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">

            {/* Left Column (8-span): Primary Metrics + Graphs */}
            <div className="lg:col-span-8 space-y-6">
              <PrimaryStats />
              <PerformanceOverview activePeriod={activePeriod} />
            </div>

            {/* Right Column (4-span): Trending + Lists */}
            <div className="lg:col-span-4 space-y-6">
              <div className="hidden lg:block h-full">
                <div className="space-y-6 h-full flex flex-col">
                  <div className="flex-1">
                    <TrendingCard />
                  </div>
                  <div className="flex-1">
                    <ProductServiceCard />
                  </div>
                </div>
              </div>

              {/* Mobile Only (Mobile ordering: Performance -> Achievement -> Suggested) */}
              <div className="lg:hidden space-y-6">
                <ProductServiceCard />
              </div>
            </div>
          </div>

          {/* Bottom Section: Traffic + Audience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
            <div className="lg:col-span-5">
              <div className="bg-white p-6 lg:p-10 rounded-[40px] border border-neutral-100/60 shadow-sm h-full">
                <TrafficAnalysis />
              </div>
            </div>
            <div className="lg:col-span-7">
              <AudienceAnalysis />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
