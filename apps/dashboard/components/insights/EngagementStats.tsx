'use client';

import { Contact, UserPlus, Share2, Sparkles } from 'lucide-react';
import { MetricCard } from '../home/MetricCard';

export function EngagementStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
                icon={<Contact size={20} />}
                label="Save Contacts"
                value="1,450"
                trend="+8%"
                link="Contact CRM"
                colorTheme="indigo"
            />
            <MetricCard
                icon={<UserPlus size={20} />}
                label="Connections"
                value="1,240"
                trend="+22%"
                link="Manage Network"
                colorTheme="emerald"
            />
            <MetricCard
                icon={<Share2 size={20} />}
                label="Share Clicks"
                value="2,120"
                trend="+18%"
                link="Share History"
                colorTheme="orange"
            />
            <MetricCard
                icon={<Sparkles size={20} />}
                label="Lead Generation"
                value="342"
                trend="+5%"
                link="Leads Form"
                colorTheme="purple"
            />
        </div>
    );
}
