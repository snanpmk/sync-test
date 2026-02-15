'use client';

import { SocialMediaClicksChart } from './charts/SocialMediaClicksChart';

export function TrafficAnalysis() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                    Traffic Channels
                </h2>
                <span className="text-[10px] font-black uppercase text-neutral-500 tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    Source Breakdown
                </span>
            </div>
            <div className="flex-1 min-h-[400px]">
                <SocialMediaClicksChart />
            </div>
        </div>
    );
}
