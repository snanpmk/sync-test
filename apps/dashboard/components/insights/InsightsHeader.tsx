'use client';

export function InsightsHeader() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="text-2xl font-black text-neutral-900 tracking-tight">
                        Insights
                    </h1>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
                        Performance Overview
                    </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-[#F9F8F6] rounded-full w-fit border border-neutral-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#beee02] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 whitespace-nowrap">
                        Live Analytics
                    </span>
                </div>
            </div>
        </div>
    );
}
