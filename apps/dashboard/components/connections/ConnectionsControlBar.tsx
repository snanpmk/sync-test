'use client';

import { TabNav } from '../ui/TabNav';

interface ConnectionsControlBarProps {
    filter: 'all' | 'starred' | 'recent';
    setFilter: (filter: 'all' | 'starred' | 'recent') => void;
}

const filterTabs: { value: 'all' | 'starred' | 'recent'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'starred', label: 'Starred' },
    { value: 'recent', label: 'Recent' },
];

export function ConnectionsControlBar({
    filter,
    setFilter,
}: ConnectionsControlBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
            <TabNav
                tabs={filterTabs}
                activeTab={filter}
                onChange={setFilter}
                layoutId="connectionsFilterBg"
            />
        </div>
    );
}
