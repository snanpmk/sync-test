'use client';

import { Star } from 'lucide-react';

export function WeeklyAchievement() {
    return (
        <section className="bg-[#fdfee7] border border-neutral-100 rounded-[32px] p-6 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 h-full">
            {/* Star Icon background/decoration if needed, for now just the main star */}
            <div className="absolute top-4 right-4 text-[#dcfce7] -z-0">
                <Star size={120} fill="#dcfce7" strokeWidth={0} className="opacity-50 rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#a3e635] bg-white px-2 py-1 rounded-full border border-[#dcfce7]">
                            WEEKLY ACHIEVEMENT
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black leading-tight">
                        You are in the Top 20% most viewed profiles!
                    </h3>
                    <p className="text-neutral-500 text-xs mt-2 font-medium">
                        Keep sharing your card to reach the top 10% and unlock new badges.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {/* Placeholder for badges or stars if needed, based on screenshot there's a big star */}
                    <div className="bg-[#beee02] p-2 rounded-full shadow-lg shadow-[#beee02]/20">
                        <Star size={24} fill="white" className="text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
}
