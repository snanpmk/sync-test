'use client';

import { Package, TrendingUp, BarChart3 } from 'lucide-react';
import { ProductServicePerformance } from './ProductServicePerformance';
import { TopPerformingLinks } from './TopPerformingLinks';
import { SocialMediaClicksChart } from './charts/SocialMediaClicksChart';

export function TrafficAnalysis() {
    return (
        <div className="lg:col-span-7 space-y-8">
            {/* Products & Services Performance */}
            <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-3">
                        <span className="p-2.5 bg-neutral-900 text-white rounded-2xl">
                            <Package size={20} />
                        </span>
                        Products & Services
                    </h2>
                </div>
                <ProductServicePerformance />
            </div>

            {/* Top PERFORMING LINKS */}
            <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-3">
                        <span className="p-2.5 bg-neutral-900 text-white rounded-2xl">
                            <TrendingUp size={20} />
                        </span>
                        External Link Performance
                    </h2>
                </div>
                <TopPerformingLinks />
            </div>

            {/* Social Traffic */}
            <div className="bg-[#222222] p-6 lg:p-8 rounded-[32px] border border-white/5 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="p-2.5 bg-[#beee02] text-black rounded-2xl">
                            <BarChart3 size={20} />
                        </span>
                        Traffic Channels
                    </h2>
                    <span className="text-[10px] font-black uppercase text-neutral-500 tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        Source Breakdown
                    </span>
                </div>
                <div className="min-h-[400px]">
                    <SocialMediaClicksChart />
                </div>
            </div>
        </div>
    );
}
