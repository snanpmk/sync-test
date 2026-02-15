'use client';

import { Search } from 'lucide-react';

export function ConnectionsEmptyState() {
    return (
        <div className="py-32 text-center animate-in fade-in duration-500">
            <div className="w-24 h-24 bg-neutral-100 rounded-[32px] flex items-center justify-center mx-auto mb-8 border border-neutral-200/50 shadow-sm">
                <Search size={32} className="text-neutral-300" />
            </div>
            <h3 className="text-2xl font-black text-neutral-900 tracking-tight">No results found</h3>
            <p className="text-neutral-400 text-sm mt-3 font-medium max-w-[200px] mx-auto leading-relaxed">
                We couldn't find any connections matching your search criteria.
            </p>
        </div>
    );
}
