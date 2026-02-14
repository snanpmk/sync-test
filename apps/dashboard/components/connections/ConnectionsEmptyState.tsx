'use client';

import { Search } from 'lucide-react';

export function ConnectionsEmptyState() {
    return (
        <div className="py-20 text-center">
            <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-neutral-200">
                <Search size={32} className="text-neutral-300" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">No results found</h3>
            <p className="text-neutral-500 text-sm mt-1">
                Try adjusting your search query or filters.
            </p>
        </div>
    );
}
