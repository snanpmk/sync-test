'use client';

import { ClicksVsViewsChart } from './charts/ClicksVsViewsChart';

interface PerformanceOverviewProps {
    activePeriod: 'daily' | 'weekly' | 'monthly' | 'six_months';
}

export function PerformanceOverview({ activePeriod }: PerformanceOverviewProps) {
    return (
        <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold text-neutral-900">
                        Performance Over Time
                    </h2>
                    <p className="text-neutral-400 text-xs font-medium mt-1 uppercase tracking-wider">
                        Metrics compared to previous period
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#1e293b]" />
                        <span className="text-xs font-bold text-neutral-500">Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-xs font-bold text-neutral-500">Clicks</span>
                    </div>
                </div>
            </div>
            <div className="h-[380px]">
                <ClicksVsViewsChart period={activePeriod} />
            </div>
        </div>
    );
}
