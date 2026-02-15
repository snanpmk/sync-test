'use client';

import { Star } from 'lucide-react';

export function WeeklyAchievement() {
    return (
        <section className="bg-[#fdfee7] border border-[#f0f0c0] rounded-[32px] p-6 lg:p-10 relative overflow-hidden group transition-all duration-300 h-full min-h-[220px]">
            {/* Star Icon background/decoration */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 text-[#CCFF00] opacity-30 group-hover:scale-110 transition-transform duration-700">
                <Star size={160} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#99cc00] bg-white/50 px-3 py-1 rounded-full border border-[#CCFF00]/30 backdrop-blur-sm">
                            WEEKLY ACHIEVEMENT
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black leading-tight max-w-[240px]">
                        You are in the Top 20% most viewed profiles!
                    </h3>
                    <p className="text-neutral-500 text-xs mt-4 font-medium max-w-[200px] leading-relaxed">
                        Keep sharing your card to reach the top 10% and unlock new badges.
                    </p>
                </div>
            </div>
        </section>
    );
}
