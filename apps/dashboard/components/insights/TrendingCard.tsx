'use client';

export function TrendingCard() {
    return (
        <div className="bg-primary p-8 rounded-[32px] flex flex-col items-center justify-between text-center gap-6 shadow-[0_20px_50px_rgba(204,255,0,0.1)] h-full">
            <div className="space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
                        <polyline points="16 7 22 7 22 13" />
                    </svg>
                </div>
                <h3 className="text-neutral-900 font-black text-2xl tracking-tight leading-tight">
                    Your profile is trending!
                </h3>
                <p className="text-neutral-900/70 text-sm font-semibold max-w-[200px] mx-auto leading-relaxed">
                    You've reached <span className="font-bold underline">2,500 new people</span> this week. Keep sharing!
                </p>
            </div>

            <button
                className="w-full py-4 bg-[#222222] text-white font-black rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl text-[10px] tracking-[0.2em] uppercase"
            >
                EXPORT FULL REPORT
            </button>
        </div>
    );
}
