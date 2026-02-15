'use client';

import { useState } from 'react';
import { TabNav } from '../ui/TabNav';

export function ProductServiceCard() {
    const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');

    const tabs: { value: 'products' | 'services'; label: string }[] = [
        { value: 'products', label: 'Products' },
        { value: 'services', label: 'Services' },
    ];

    const items = activeTab === 'products' ? [
        { name: 'E-Basic Growth Hacks', count: '1,145' },
        { name: 'NFC Smart Card', count: '3,120' },
    ] : [
        { name: 'Consultation Call', count: '450' },
        { name: 'Profile Optimization', count: '890' },
    ];

    return (
        <div className="bg-white p-6 lg:p-10 rounded-[40px] border border-neutral-100/60 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-neutral-900">
                    Products & Services
                </h2>
            </div>

            {/* Reusable Tab Toggle */}
            <div className="mb-8">
                <TabNav
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                    layoutId="productServiceTabs"
                    variant="light"
                />
            </div>

            {/* List */}
            <div className="space-y-4 flex-1">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-neutral-50 rounded-[20px] border border-neutral-100/50 hover:border-neutral-200 transition-colors cursor-pointer group">
                        <span className="text-sm font-bold text-neutral-900">
                            {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-neutral-400">
                                {item.count}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-neutral-100 group-hover:bg-primary group-hover:border-primary transition-all">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300 group-hover:text-black">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-8 py-4 bg-neutral-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-neutral-200">
                View All
            </button>
        </div>
    );
}
