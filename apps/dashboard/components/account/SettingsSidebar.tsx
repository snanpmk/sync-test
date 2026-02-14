'use client';

import { User, Link as LinkIcon, Package, Youtube, Layers } from 'lucide-react';

interface SettingsSidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export function SettingsSidebar({
    activeTab,
    setActiveTab,
}: SettingsSidebarProps) {
    const tabs = [
        { id: 'profile', label: 'Profile', icon: <User size={18} /> },
        { id: 'social', label: 'Socials', icon: <LinkIcon size={18} /> },
        { id: 'catalog', label: 'Catalog', icon: <Package size={18} /> },
        { id: 'media', label: 'Media', icon: <Youtube size={18} /> },
        { id: 'crm', label: 'CRM', icon: <Layers size={18} /> },
    ];

    return (
        <div className="w-full lg:w-80 p-4 lg:p-10 lg:sticky lg:top-0 h-fit z-30 bg-[#F9FAFB]/80 backdrop-blur-md lg:bg-transparent">
            <h1 className="text-2xl lg:text-3xl font-black text-neutral-900 mb-6 lg:mb-10 px-2 lg:px-4 tracking-tight">
                Settings
            </h1>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-3 px-5 py-3.5 lg:px-6 lg:py-4 rounded-2xl text-xs lg:text-sm font-black transition-all whitespace-nowrap active:scale-95 ${activeTab === tab.id
                            ? 'bg-neutral-900 text-white shadow-xl shadow-neutral-200 translate-y-[-2px] lg:translate-y-0 lg:translate-x-1'
                            : 'text-neutral-400 hover:bg-neutral-100 hover:text-black'
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
