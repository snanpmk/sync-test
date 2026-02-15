'use client';

import { Sidebar } from '../../components/layout/Sidebar';
import { MobileNav } from '../../components/layout/MobileNav';
import { DashboardHeader } from '../../components/layout/DashboardHeader';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        const scrollContainer = document.getElementById('main-scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [pathname]);

    return (
        <div className="flex h-screen w-full bg-[#f8f7f5] text-neutral-900 overflow-hidden font-sans select-none p-4">
            {/* Sidebar - Fixed/Sticky on Desktop */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative lg:ml-6">
                {/* Header is part of the scroll or sticky? Image shows it aligned with content */}
                <DashboardHeader />

                {/* Scrollable Content */}
                <div
                    id="main-scroll-container"
                    className="flex-1 overflow-y-auto pb-28 lg:pb-6 scrollbar-hide scroll-smooth"
                >
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <MobileNav />
        </div>
    );
}
