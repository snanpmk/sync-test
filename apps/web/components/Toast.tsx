'use client';

import { useCartStore } from '@/store/useCartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Info, X } from 'lucide-react';
import { useEffect } from 'react';

export const Toast = () => {
  const { notification, hideNotification } = useCartStore();

  useEffect(() => {
    if (notification.isVisible) {
      const timer = setTimeout(hideNotification, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.isVisible, hideNotification]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-primary" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />
  };

  return (
    <AnimatePresence>
      {notification.isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-12 sm:bottom-12 z-[100] flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-0 sm:min-w-[300px]"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
            {icons[notification.type]}
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-bold italic uppercase tracking-wider">
              {notification.message}
            </p>
          </div>
          <button 
            onClick={hideNotification}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors text-white/40 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
