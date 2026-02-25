'use client';

import { Suspense } from 'react';
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
import { useSearchParams } from 'next/navigation';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'card';

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-primary selection:text-black font-sans">
      <Navbar />

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mx-auto h-24 w-24 sm:h-28 sm:w-28 bg-white/[0.02] rounded-[1.5rem] flex items-center justify-center mb-10 border border-white/[0.05] shadow-2xl relative overflow-hidden ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-primary/10 opacity-50 blur-xl"></div>
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#A3E635] relative z-10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border border-dashed border-white/20 rounded-[1.5rem] scale-[0.85]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
              Order Confirmed
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 font-medium mb-12">
              Your digital upgrade is officially in motion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-3xl border border-white/[0.05] bg-white/[0.02] text-left group hover:bg-white/[0.04] transition-all ring-1 ring-white/5 backdrop-blur-md"
            >
              <Package className="w-6 h-6 text-zinc-400 mb-4 group-hover:text-white transition-colors" />
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                Order ID
              </p>
              <p className="font-mono font-bold text-lg text-zinc-200">
                SYN-8294-XQ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-3xl border border-white/[0.05] bg-white/[0.02] text-left group hover:bg-white/[0.04] transition-all ring-1 ring-white/5 backdrop-blur-md"
            >
              <Sparkles className="w-6 h-6 text-[#A3E635] mb-4" />
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                Delivery Status
              </p>
              <p className="font-bold text-lg text-zinc-200">Processing</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] ring-1 ring-white/5 mb-10 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:bg-white/10 transition-all">
                <Smartphone className="w-8 h-8 text-zinc-300 group-hover:text-white transition-colors" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white tracking-tight">
                Initialize Your Profile
              </h2>
              <p className="text-zinc-400 font-medium mb-8 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
                You don&apos;t need to wait for your physical product to arrive. Configure your digital touchpoint right now.
              </p>

              <Link
                href={`/onboard?type=${type}`}
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] active:scale-95"
              >
                Begin Setup Process
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Background element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all pointer-events-none" />
          </motion.div>

          <Link
            href="/"
            className="text-zinc-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center text-zinc-500 font-bold animate-pulse">
          LOADING SUCCESS PAGE...
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
