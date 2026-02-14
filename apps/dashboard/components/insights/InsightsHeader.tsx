'use client';

import { InsightFilters } from './InsightFilters';

interface InsightsHeaderProps {
    activePeriod: 'daily' | 'weekly' | 'monthly' | 'six_months';
    onPeriodChange: (period: 'daily' | 'weekly' | 'monthly' | 'six_months') => void;
}

export function InsightsHeader({ activePeriod, onPeriodChange }: InsightsHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100/50 rounded-full w-fit border border-neutral-100/50">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                    Live Analytics Dashboard
                </span>
            </div>
            <InsightFilters activePeriod={activePeriod} onChange={onPeriodChange} />
        </div>
    );
}
