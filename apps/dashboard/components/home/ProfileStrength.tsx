'use client';

import { CountUp } from '../ui/CountUp';
import { SuggestionBadge } from './SuggestionBadge';
import { MOCK_SUGGESTIONS } from '../../data/mock-data';

export function ProfileStrength() {
    return (
        <section className="bg-[#EAE8E7] rounded-[32px] p-6 lg:p-8 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="relative z-10 mb-6">
                <h2 className="text-2xl font-bold text-black mb-1">
                    Almost there!
                </h2>
                <p className="text-neutral-500 text-sm font-medium">
                    Complete these to boost engagement.
                </p>
            </div>

            <div className="relative z-10 mt-auto">
                <a
                    href="/account"
                    className="w-full flex items-center justify-between text-sm font-bold text-black bg-[#beee02] hover:bg-[#d4ff1a] transition-colors px-6 py-4 rounded-full active:scale-[0.98]"
                >
                    Complete Profile
                    <span className="bg-black/10 rounded-full p-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </span>
                </a>
            </div>
        </section>
    );
}
