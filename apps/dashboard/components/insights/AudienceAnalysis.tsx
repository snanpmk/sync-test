'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import { AIInsights } from './AIInsights';
import { GeoHeatmap } from './charts/GeoHeatmap';
import { DeviceBreakdownChart } from './charts/DeviceBreakdownChart';
import { AudienceDemographicsChart } from './charts/AudienceDemographicsChart';

const MapHeatmap = dynamic(() => import('./charts/MapHeatmap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-neutral-50 animate-pulse rounded-3xl flex items-center justify-center">
            <p className="text-neutral-400 font-medium">Loading Map...</p>
        </div>
    ),
});

export function AudienceAnalysis() {
    return (
        <div className="lg:col-span-5 space-y-8">
            {/* AI INSIGHTS - Premium Look */}
            <div className="bg-neutral-900 p-1 text-white rounded-[34px] shadow-2xl overflow-hidden group">
                <div className="bg-white/5 p-6 lg:p-8 rounded-[32px] border border-white/10 h-full">
                    <AIInsights />
                </div>
            </div>

            {/* Locations & Devices Combined or Separate */}
            <div className="bg-[#222222] p-6 lg:p-8 rounded-[32px] border border-white/5 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="p-2.5 bg-[#beee02] text-black rounded-2xl">
                        <MapPin size={22} />
                    </span>
                    Audience Geolocation
                </h2>

                <div className="h-[400px] mb-8 rounded-[24px] overflow-hidden border border-white/5">
                    <MapHeatmap />
                </div>

                <h3 className="text-sm font-black uppercase text-neutral-500 mb-4 tracking-widest leading-none">
                    Global Distribution
                </h3>
                <GeoHeatmap />

                <div className="mt-10 pt-8 border-t border-neutral-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-neutral-900">
                            Device Origin
                        </h2>
                        <span className="text-[10px] font-black uppercase text-neutral-400">
                            Past 7 Days
                        </span>
                    </div>
                    <div className="h-[220px]">
                        <DeviceBreakdownChart />
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-neutral-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-neutral-900">
                            Age Demographics
                        </h2>
                    </div>
                    <div className="h-[220px]">
                        <AudienceDemographicsChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
