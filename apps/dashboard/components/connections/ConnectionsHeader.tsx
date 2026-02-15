'use client';

import { Search, UserPlus, Users } from 'lucide-react';

interface ConnectionsHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onAddClick: () => void;
}

export function ConnectionsHeader({
    searchQuery,
    setSearchQuery,
    onAddClick,
}: ConnectionsHeaderProps) {
    return (
        <div className="space-y-4">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
                        Your Connections
                    </h1>
                </div>
                <button
                    onClick={onAddClick}
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-neutral-900 text-white font-black rounded-full shadow-xl shadow-neutral-200 active:scale-95 hover:translate-y-[-2px] transition-all text-xs tracking-widest"
                >
                    <UserPlus size={18} className="text-primary" /> ADD CONNECTION
                </button>
            </div>

            <div className="relative group">
                <Search
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors"
                    size={20}
                />
                <input
                    type="text"
                    placeholder="Search by keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-16 pr-6 py-3.5 bg-neutral-100/50 border border-transparent rounded-full text-sm font-bold focus:outline-none focus:bg-white focus:border-neutral-200 transition-all shadow-sm italic"
                />
            </div>
        </div>
    );
}
