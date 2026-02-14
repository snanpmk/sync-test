'use client';

import { Users, MousePointer2, Smartphone, TrendingUp } from 'lucide-react';
import { MetricCard } from '../home/MetricCard';

export function PrimaryStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
                icon={<Users size={20} />}
                label="Profile Views"
                value="12,234"
                trend="+12%"
                link="Audience Data"
                colorTheme="blue"
            />
            <MetricCard
                icon={<MousePointer2 size={20} />}
                label="Link Clicks"
                value="8,540"
                trend="+25%"
                link="Click Map"
                colorTheme="emerald"
            />
            <MetricCard
                icon={<Smartphone size={20} />}
                label="NFC/QR Scans"
                value="945"
                trend="+15%"
                link="Hardware Stats"
                colorTheme="orange"
            />
            <MetricCard
                icon={<TrendingUp size={20} />}
                label="Conversion Rate"
                value="4.8%"
                trend="+2.1%"
                link="Funnel Analysis"
                colorTheme="purple"
            />
        </div>
    );
}
