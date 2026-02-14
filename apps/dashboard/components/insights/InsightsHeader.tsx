'use client';

import { InsightFilters } from './InsightFilters';

interface InsightsHeaderProps {
    activePeriod: 'daily' | 'weekly' | 'monthly' | 'six_months';
    onPeriodChange: (period: 'daily' | 'weekly' | 'monthly' | 'six_months') => void;
}

export function InsightsHeader({ activePeriod, onPeriodChange }: InsightsHeaderProps) {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center justify-between w-full empty:hidden">
                {/* Optional Status Pulse - Only shown when greeting is absent or on desktop */}
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#F9F8F6] rounded-full w-fit border border-neutral-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#beee02] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 whitespace-nowrap">
                        Live Analytics
                    </span>
                </div>
            </div>

            <div className="w-full">
                <InsightFilters activePeriod={activePeriod} onChange={onPeriodChange} />
            </div>
        </div>
    );
}
