'use client';

import { Home, User, Package, Youtube, Layers } from 'lucide-react';

interface SettingsSidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export function SettingsSidebar({
    activeTab,
    setActiveTab,
}: SettingsSidebarProps) {
    const tabs = [
        { id: 'profile', label: 'Home', icon: <Home size={20} /> },
        { id: 'details', label: 'Details', icon: <User size={20} /> },
        { id: 'catalog', label: 'Catalog', icon: <Package size={20} /> },
        { id: 'media', label: 'Media', icon: <Youtube size={20} /> },
        { id: 'crm', label: 'CRM', icon: <Layers size={20} /> },
    ];

    return (
        <div className="w-full lg:w-72 p-4 lg:p-6 lg:sticky lg:top-0 h-fit z-30">
            <h1 className="text-2xl font-black text-neutral-900 mb-8 px-4 tracking-tight">
                Settings
            </h1>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-4 px-6 py-4 rounded-3xl text-sm font-bold transition-all duration-300 active:scale-95 ${activeTab === tab.id
                            ? 'bg-neutral-900 text-white shadow-xl shadow-neutral-200'
                            : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900'
                            }`}
                    >
                        <span className={activeTab === tab.id ? 'text-primary' : ''}>
                            {tab.icon}
                        </span>
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
