'use client';

import { Grid, List, ArrowUpDown } from 'lucide-react';

interface ConnectionsControlBarProps {
    filter: 'all' | 'starred' | 'recent';
    setFilter: (filter: 'all' | 'starred' | 'recent') => void;
}

export function ConnectionsControlBar({
    filter,
    setFilter,
}: ConnectionsControlBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-y border-neutral-100/50">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
                {(['all', 'starred', 'recent'] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === t
                                ? 'bg-neutral-900 text-white shadow-md'
                                : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center bg-neutral-100 p-1 rounded-xl">
                    <button className="p-1.5 bg-white text-black rounded-lg shadow-sm">
                        <Grid size={16} />
                    </button>
                    <button className="p-1.5 text-neutral-400 hover:text-black transition-colors">
                        <List size={16} />
                    </button>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-black transition-colors">
                    <ArrowUpDown size={14} /> Sort: Recent
                </button>
            </div>
        </div>
    );
}
