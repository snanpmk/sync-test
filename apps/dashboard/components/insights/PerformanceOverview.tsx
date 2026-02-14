'use client';

import { ClicksVsViewsChart } from './charts/ClicksVsViewsChart';

interface PerformanceOverviewProps {
    activePeriod: 'daily' | 'weekly' | 'monthly' | 'six_months';
}

export function PerformanceOverview({ activePeriod }: PerformanceOverviewProps) {
    return (
        <div className="bg-[#222222] p-6 lg:p-8 rounded-[32px] border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold text-white">
                        Performance Over Time
                    </h2>
                    <p className="text-neutral-500 text-xs font-medium mt-1 uppercase tracking-wider">
                        Metrics compared to previous period
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#4c4c4c]" />
                        <span className="text-xs font-bold text-neutral-400">Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#beee02]" />
                        <span className="text-xs font-bold text-neutral-400">Clicks</span>
                    </div>
                </div>
            </div>
            <div className="h-[380px]">
                <ClicksVsViewsChart period={activePeriod} />
            </div>
        </div>
    );
}
