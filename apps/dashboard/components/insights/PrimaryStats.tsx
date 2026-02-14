'use client';

import { Users, MousePointer2, Smartphone, TrendingUp } from 'lucide-react';
import { MetricCard } from '../home/MetricCard';

export function PrimaryStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
                icon={<Users size={20} />}
                label="Profile Views"
                value="1,245"
                trend="+12%"
                link="Audience Data"
                variant="dark"
            />
            <MetricCard
                icon={<MousePointer2 size={20} />}
                label="Link Clicks"
                value="8,540"
                trend="+25%"
                link="Click Map"
                variant="dark"
            />
            <MetricCard
                icon={<Smartphone size={20} />}
                label="Connections"
                value="1,245"
                trend="+22%"
                link="Manage Network"
                variant="dark"
            />
            <MetricCard
                icon={<TrendingUp size={20} />}
                label="Phone Links"
                value="1,245"
                trend="+22%"
                link="Share History"
                variant="dark"
            />
        </div>
    );
}
