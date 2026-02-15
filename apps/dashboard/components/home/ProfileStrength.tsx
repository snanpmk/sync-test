'use client';

import { CountUp } from '../ui/CountUp';
import { SuggestionBadge } from './SuggestionBadge';
import { MOCK_SUGGESTIONS } from '../../data/mock-data';

export function ProfileStrength() {
    return (
        <section className="bg-brand-black rounded-[32px] p-4 lg:p-5 relative overflow-hidden h-full flex flex-col justify-between ">
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-1">
                    Almost there!
                </h2>
                <p className="text-neutral-400 text-sm font-medium">
                    Complete these to boost engagement.
                </p>
            </div>

            <div className="relative z-10 mt-8">
                <a
                    href="/account"
                    className="inline-flex items-center gap-3 text-sm font-bold text-black bg-[#CCFF00] hover:bg-[#d4ff1a] transition-all px-8 py-4 rounded-full active:scale-[0.98]"
                >
                    Complete Profile
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
