'use client';

import { ActivityItem } from './ActivityItem';
import { RECENT_ACTIVITY } from '../../data/mock-data';

export function RecentActivityList() {
    return (
        <section className="bg-white border border-neutral-100 rounded-[32px] p-6 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-neutral-900">Recent Activity</h3>
                <button className="text-xs text-primary hover:underline transition-all">
                    View All
                </button>
            </div>
            <ul className="space-y-4">
                {RECENT_ACTIVITY.map((activity, i) => (
                    <ActivityItem
                        key={i}
                        text={activity.text}
                        time={activity.time}
                        type={activity.type}
                    />
                ))}
            </ul>
        </section>
    );
}
