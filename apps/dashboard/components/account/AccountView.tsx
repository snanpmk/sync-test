'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TabNav } from '../ui/TabNav';
import { ProfileTab } from './ProfileTab';
import { SocialTab } from './SocialTab';
import { CatalogTab } from './CatalogTab';
import { MediaTab } from './MediaTab';
import { CRMTab } from './CRMTab';

type TabType = 'profile' | 'details' | 'catalog' | 'media' | 'crm';

const tabs: { value: TabType; label: string }[] = [
  { value: 'profile', label: 'Profile' },
  { value: 'details', label: 'Socials' },
  { value: 'catalog', label: 'Catalogs' },
  { value: 'media', label: 'Media' },
  { value: 'crm', label: 'CRM' },
];

export function AccountView() {
  const [activeTab, setActiveTab] = useState<TabType>('details'); // Set to 'details' (Socials) to match screenshot

  return (
    <div className="flex flex-col min-h-full">
      {/* Header Section (Greeting) - Desktop only matches main dashboard layout */}

      {/* Main Settings Container */}
      <div className="p-4 lg:p-8">
        <div className="max-w-6xl mx-auto lg:mx-0 bg-white rounded-[32px] overflow-hidden shadow-sm border border-neutral-100 min-h-[700px] flex flex-col lg:flex-row">

          {/* PC/Desktop Internal Sidebar */}
          <aside className="hidden lg:flex flex-col w-72 border-r border-neutral-50 p-8 pt-10">
            <h1 className="text-2xl font-black text-neutral-900 tracking-tight mb-10">
              Settings
            </h1>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`
                                            w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all
                                            ${isActive
                        ? 'bg-[#444444] text-white shadow-xl shadow-black/5'
                        : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'}
                                        `}
                  >
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    {tab.label === 'Socials' ? 'Socials' :
                      tab.label === 'Profile' ? 'Home' : tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Mobile View Header/Nav */}
          <div className="lg:hidden p-6 pb-0">
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-black text-neutral-900 tracking-tight">
                Settings
              </h1>
              <TabNav
                tabs={tabs}
                activeTab={activeTab}
                onChange={setActiveTab}
                layoutId="accountTabNav"
                variant="dark"
              />
            </div>
          </div>

          {/* Tab Content Area */}
          <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProfileTab />
                </motion.div>
              )}
              {activeTab === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SocialTab />
                </motion.div>
              )}
              {activeTab === 'catalog' && (
                <motion.div
                  key="catalog"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CatalogTab />
                </motion.div>
              )}
              {activeTab === 'media' && (
                <motion.div
                  key="media"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MediaTab />
                </motion.div>
              )}
              {activeTab === 'crm' && (
                <motion.div
                  key="crm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CRMTab />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
