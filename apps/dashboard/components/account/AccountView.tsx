'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SettingsSidebar } from './SettingsSidebar';
import { ProfileTab } from './ProfileTab';
import { SocialTab } from './SocialTab';
import { CatalogTab } from './CatalogTab';
import { MediaTab } from './MediaTab';
import { CRMTab } from './CRMTab';

export function AccountView() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F9FAFB]">
      {/* Settings Navigation */}
      <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Settings Content */}
      <main className="flex-1 p-4 lg:p-10 lg:pl-0 space-y-8 max-w-4xl w-full mx-auto lg:mx-0 pb-32 lg:pb-10">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ProfileTab />
            </motion.div>
          )}

          {activeTab === 'social' && (
            <motion.div
              key="social"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SocialTab />
            </motion.div>
          )}

          {activeTab === 'catalog' && (
            <motion.div
              key="catalog"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <CatalogTab />
            </motion.div>
          )}

          {activeTab === 'media' && (
            <motion.div
              key="media"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <MediaTab />
            </motion.div>
          )}

          {activeTab === 'crm' && (
            <motion.div
              key="crm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <CRMTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
