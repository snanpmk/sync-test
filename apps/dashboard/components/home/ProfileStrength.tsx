'use client';

import { CountUp } from '../ui/CountUp';
import { SuggestionBadge } from './SuggestionBadge';
import { MOCK_SUGGESTIONS } from '../../data/mock-data';

export function ProfileStrength() {
    return (
        <section className="bg-white border border-neutral-100 rounded-[32px] p-6 lg:p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 relative z-10">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100/50 text-emerald-600 text-xs font-bold ring-4 ring-emerald-50">
                            <CountUp end={80} suffix="%" />
                        </span>
                        Profile Strength
                    </h2>
                    <p className="text-neutral-500 text-sm mt-1 font-medium ml-12">
                        Almost there! 🔥 Complete these to boost engagement.
                    </p>
                </div>
                <a
                    href="/account"
                    className="text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-200 active:scale-95 inline-block"
                >
                    Complete Profile →
                </a>
            </div>
            {/* Progress Bar with Glow */}
            <div className="w-full bg-neutral-100 rounded-full h-3 mb-6 overflow-visible relative z-10">
                <div
                    className="bg-emerald-500 h-full rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] relative"
                    style={{ width: '80%' }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-emerald-500 shadow-sm" />
                </div>
            </div>
            {/* Missing Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 relative z-10">
                {MOCK_SUGGESTIONS.map((s, i) => (
                    <SuggestionBadge key={i} text={s.text} reward={s.reward} />
                ))}
            </div>
        </section>
    );
}
