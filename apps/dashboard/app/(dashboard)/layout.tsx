'use client';

import { Sidebar } from '../../components/layout/Sidebar';
import { MobileNav } from '../../components/layout/MobileNav';
import { DashboardHeader } from '../../components/layout/DashboardHeader';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
            {/* Sidebar - Hidden on mobile, visible on lg screens */}
            {/* Note: Sidebar needs to be updated to handle active state via URL */}
            <Sidebar />

            {/* Main Content - Light Theme Inner Container */}
            <main className="flex-1 flex flex-col h-full bg-[#F9FAFB] lg:rounded-[32px] lg:py-4 lg:mr-3 text-neutral-900 shadow-2xl transition-all overflow-hidden relative">
                {/* Sticky Header outside scroll container */}
                <DashboardHeader />

                {/* Scrollable Content Area with hidden scrollbar */}
                <div className="flex-1 overflow-y-auto pb-28 lg:pb-0 scrollbar-hide">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            {/* Note: MobileNav needs to be updated to handle active state via URL */}
            <MobileNav />
        </div>
    );
}
