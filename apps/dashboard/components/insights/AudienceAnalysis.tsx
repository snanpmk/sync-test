'use client';

import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { GeoHeatmap } from './charts/GeoHeatmap';

const MapHeatmap = dynamic(() => import('./charts/MapHeatmap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-neutral-50 animate-pulse rounded-[24px] flex items-center justify-center border border-neutral-100">
            <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest">Loading Analytics Map...</p>
        </div>
    ),
});

export function AudienceAnalysis() {
    return (
        <div className="lg:col-span-5 space-y-8 h-fit">
            {/* Locations Card */}
            <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                    <span className="p-2.5 bg-neutral-900 text-white rounded-2xl">
                        <MapPin size={22} />
                    </span>
                    Audience Geolocation
                </h2>

                <div className="h-[430px] mb-8 rounded-[24px] overflow-hidden border border-neutral-100">
                    <MapHeatmap />
                </div>

                <div className="mt-8">
                    <h3 className="text-[10px] font-black uppercase text-neutral-400 mb-6 tracking-widest leading-none">
                        Global Distribution
                    </h3>
                    <GeoHeatmap />
                </div>
            </div>
        </div>
    );
}
