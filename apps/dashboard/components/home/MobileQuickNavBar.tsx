'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QrCode,
  Share2,
  UserPen,
  MoreHorizontal,
  X,
  Download,
} from 'lucide-react';
import Link from 'next/link';

interface MobileQuickNavBarProps {
  onNavigate?: (path: string) => void;
}

export function MobileQuickNavBar({ onNavigate }: MobileQuickNavBarProps) {
  const [showQR, setShowQR] = useState(false);

  // Hardcoded profile URL as per request
  const profileUrl = 'https://synconnect.app/profile/alex';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(profileUrl)}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out my profile',
          text: 'Here is my SynConnect profile!',
          url: profileUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback
      navigator.clipboard.writeText(profileUrl);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownloadQR = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-profile-qr.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed', error);
      alert('Failed to download QR code');
    }
  };

  return (
    <>
      {/* Floating Dynamic Island Nav Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full mb-6 relative z-10 md:hidden"
      >
        <div className="relative overflow-hidden rounded-full border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
          {/* Background Decorative Gradients - "Aurora" effect */}
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-20 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />

          {/* Nav Items Container */}
          <div className="relative flex items-center justify-between px-6 py-3">
            {/* 1. QR Code Action */}
            <NavAction
              icon={<QrCode size={20} />}
              label="QR Code"
              onClick={() => setShowQR(true)}
            />

            {/* divider */}
            <div className="h-4 w-px bg-white/10" />

            {/* 2. Share Action */}
            <NavAction
              icon={<Share2 size={20} />}
              label="Share"
              onClick={handleShare}
            />

            {/* divider */}
            <div className="h-4 w-px bg-white/10" />

            {/* 3. Edit Profile Action */}
            <NavAction
              icon={<UserPen size={20} />}
              label="Edit"
              onClick={() => onNavigate?.('account')}
            />

            {/* divider */}
            <div className="h-4 w-px bg-white/10" />

            {/* 4. Placeholder / More Action */}
            <NavAction
              icon={<MoreHorizontal size={20} />}
              label="More"
              onClick={() => {}}
            />
          </div>
        </div>
      </motion.div>

      {/* QR Code Modal Overlay */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-brand-black p-6 shadow-2xl"
            >
              {/* Modal Background Effects */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

              <button
                onClick={() => setShowQR(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center gap-6 mt-2 relative z-10">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">Your QR Code</h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Share your profile instantly
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  {/* Using standard img for QR to avoid extra deps, valid for MVP */}
                  <img
                    src={qrCodeUrl}
                    alt="Profile QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>

                <div className="flex w-full gap-3">
                  <button
                    onClick={handleDownloadQR}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-black hover:bg-primary/90 transition-colors active:scale-95"
                  >
                    <Download size={18} />
                    Save Image
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-neutral-800 py-3 font-semibold text-white hover:bg-neutral-700 transition-colors active:scale-95 border border-white/5"
                  >
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavAction({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-1 group relative cursor-pointer"
    >
      <div className="rounded-full p-2 text-neutral-400 transition-colors group-hover:text-white group-active:text-primary">
        {icon}
      </div>
    </motion.button>
  );
}
