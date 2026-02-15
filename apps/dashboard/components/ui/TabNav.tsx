'use client';

import { motion } from 'framer-motion';

interface TabNavProps<T extends string> {
    tabs: { value: T; label: string }[];
    activeTab: T;
    onChange: (value: T) => void;
    layoutId: string;
    variant?: 'dark' | 'light';
}

export function TabNav<T extends string>({
    tabs,
    activeTab,
    onChange,
    layoutId,
    variant = 'dark',
}: TabNavProps<T>) {
    const containerBg = variant === 'dark' ? 'bg-[#222222]' : 'bg-neutral-100';
    const containerBorder = variant === 'dark' ? 'border-white/5' : 'border-neutral-200/50';
    const inactiveText = variant === 'dark' ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-500 hover:text-neutral-900';
    const activeText = 'text-black';

    return (
        <div className={`flex items-center gap-1 p-1 ${containerBg} rounded-full w-full sm:w-fit overflow-hidden border ${containerBorder}`}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.value;
                return (
                    <button
                        key={tab.value}
                        onClick={() => onChange(tab.value)}
                        className={`
              relative flex-1 sm:flex-none px-4 sm:px-8 py-2.5 text-[10px] sm:text-[11px] font-black uppercase tracking-tight sm:tracking-[0.15em] rounded-full transition-all duration-300 z-10 whitespace-nowrap
              ${isActive ? activeText : inactiveText}
            `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId={layoutId}
                                className="absolute inset-0 bg-primary rounded-full -z-10"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
