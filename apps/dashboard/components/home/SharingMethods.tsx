'use client';

import { ScanLine, Smartphone } from 'lucide-react';
import { CountUp } from '../ui/CountUp';

export function SharingMethods() {
    return (
        <section className="bg-white border border-neutral-100 rounded-[32px] p-6 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300">
            <h3 className="font-bold mb-4 text-neutral-900">Sharing Methods</h3>
            <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 bg-neutral-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-100 transition-colors cursor-pointer group">
                    <ScanLine className="text-neutral-900 group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-bold text-neutral-900">
                        <CountUp end={142} />
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">QR Scans</span>
                </div>
                <div className="flex-1 bg-neutral-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-100 transition-colors cursor-pointer group">
                    <Smartphone className="text-neutral-900 group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-bold text-neutral-900">
                        <CountUp end={89} />
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">NFC Taps</span>
                </div>
            </div>
            <p className="text-xs text-center text-neutral-500">
                🚀 <span className="text-neutral-900 font-bold">QR Codes</span> are your
                most popular sharing method this week.
            </p>
        </section>
    );
}
