'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/SiteFooter';
import {
  CheckCircle2,
  ArrowRight,
  Package,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mx-auto h-24 w-24 sm:h-32 sm:w-32 bg-primary/10 rounded-full flex items-center justify-center mb-12 border border-primary/20 shadow-[0_0_50px_rgba(190,238,2,0.1)] relative"
          >
            <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black italic mb-6 tracking-tighter">
              ORDER PLACED
            </h1>
            <p className="text-xl sm:text-2xl text-white/40 font-bold italic mb-12">
              "Your digital revolution has officially begun."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-[2rem] border border-white/10 bg-white/5 text-left group hover:border-primary/20 transition-all"
            >
              <Package className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">
                Order ID
              </p>
              <p className="font-mono font-bold text-lg text-primary">
                SYN-8294-XQ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-[2rem] border border-white/10 bg-white/5 text-left group hover:border-primary/20 transition-all"
            >
              <Sparkles className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">
                Delivery Status
              </p>
              <p className="font-bold text-lg">Processing</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="p-10 rounded-[2.5rem] bg-linear-to-br from-primary/20 to-transparent border border-primary/20 mb-12 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Smartphone className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-black italic mb-4">
                Start Setup Right Now
              </h2>
              <p className="text-white/60 font-medium mb-8 max-w-md mx-auto italic">
                You don't need to wait for your card to arrive. Initialize your
                profile and start sharing digitally today.
              </p>

              <Link
                href="/onboard"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-xl italic hover:scale-105 transition-all shadow-xl"
              >
                Setup My Profile
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            {/* Background element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
          </motion.div>

          <Link
            href="/"
            className="text-white/40 hover:text-white font-black uppercase tracking-widest text-xs transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
