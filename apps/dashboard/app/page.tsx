'use client';

import { useState } from 'react';
import { SynConnectLogo } from '@synconnect/ui'; // Kept for mobile header if needed, but actually MobileNav handles bottom, Sidebar handles side.
// Wait, Mobile Header is inside main content in original file.

import { Sidebar } from '../components/layout/Sidebar';
import { MobileNav } from '../components/layout/MobileNav';
import { DashboardHeader } from '../components/layout/DashboardHeader';
import { HomeView } from '../components/home/HomeView';
import { InsightsView } from '../components/insights/InsightsView';
import { ConnectionsView } from '../components/connections/ConnectionsView';
import { AccountView } from '../components/account/AccountView';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      {/* Sidebar - Hidden on mobile, visible on lg screens */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content - Light Theme Inner Container */}
      <main className="flex-1 flex flex-col h-full bg-[#F9FAFB] lg:rounded-[32px] lg:py-4 lg:mr-3 text-neutral-900 shadow-2xl transition-all overflow-hidden relative">
        {/* Sticky Header outside scroll container */}
        <DashboardHeader />

        {/* Scrollable Content Area with hidden scrollbar */}
        <div className="flex-1 overflow-y-auto pb-28 lg:pb-0 scrollbar-hide">
          {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
          {activeTab === 'insights' && <InsightsView />}
          {activeTab === 'connections' && <ConnectionsView />}
          {activeTab === 'account' && <AccountView />}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
