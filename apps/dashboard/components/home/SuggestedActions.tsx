'use client';

interface SuggestedActionsProps {
    children: React.ReactNode;
}

export function SuggestedActions({ children }: SuggestedActionsProps) {
    return (
        <section className="bg-[#222222] rounded-[32px] p-6 lg:p-8 h-full flex flex-col">
            <h3 className="text-[#beee02] text-xs font-bold uppercase tracking-wider mb-4">
                SUGGESTED FOR YOU
            </h3>
            <div className="space-y-3 flex-1">
                {children}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800">
                <p className="text-neutral-400 text-xs border border-neutral-700 rounded-xl p-3 bg-neutral-800/50">
                    Add WhatsApp button for faster direct responses.
                </p>
            </div>
        </section>
    );
}
