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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 bg-primary text-black rounded-lg">
                        <Users size={16} strokeWidth={3} />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                        Personal CRM
                    </span>
                </div>
                <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
                    Your Connections
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                <div className="relative flex-1 sm:w-80 group">
                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors"
                        size={18}
                    />
                    <input
                        type="text"
                        placeholder="Search by name, place, or role..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all shadow-sm"
                    />
                </div>
                <button
                    onClick={onAddClick}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-black rounded-2xl shadow-lg shadow-neutral-200 active:scale-95 hover:translate-y-[-2px] transition-all text-sm tracking-tight"
                >
                    <UserPlus size={18} className="text-primary" /> ADD CONNECTION
                </button>
            </div>
        </div>
    );
}
