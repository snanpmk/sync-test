'use client';

import { InsightFilters } from './InsightFilters';

interface InsightsHeaderProps {
    activePeriod: 'daily' | 'weekly' | 'monthly' | 'six_months';
    onPeriodChange: (period: 'daily' | 'weekly' | 'monthly' | 'six_months') => void;
}

export function InsightsHeader({ activePeriod, onPeriodChange }: InsightsHeaderProps) {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-neutral-200 overflow-hidden border-2 border-white shadow-md">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                                alt="Alex"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-neutral-900 leading-tight">
                            Good Morning, Alex
                        </h1>
                        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                            Here's how your card is performing today
                        </p>
                    </div>
                </div>

                {/* Optional Status Pulse */}
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#F9F8F6] rounded-full w-fit border border-neutral-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#beee02] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Live Analytics
                    </span>
                </div>
            </div>

            <div className="flex justify-start">
                <InsightFilters activePeriod={activePeriod} onChange={onPeriodChange} />
            </div>
        </div>
    );
}
