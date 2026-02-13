'use client';

import { CreditCard, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-48 lg:pb-32">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-primary rounded-full blur-[80px] lg:blur-[120px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs lg:text-sm font-medium text-white/80 uppercase tracking-widest">
            The Future of Networking
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          The Future of Business <br className="hidden lg:block" />
          Networking Starts With <span className="text-primary">One Tap.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-2xl text-base lg:text-xl text-white/60 mb-10 leading-relaxed"
        >
          Upgrade from paper business cards to smart NFC-powered digital
          profiles and Google review stands. Modern. Measurable. Powerful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/shop"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-5 text-lg font-black text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(190,238,2,0.3)]"
          >
            <CreditCard className="w-5 h-5" />
            Get My Card
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/shop"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-5 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            <Star className="w-5 h-5 text-primary" />
            Review Stands
          </Link>
        </motion.div>

        {/* Hero Image/Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-24 relative mx-auto max-w-5xl rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5 p-1 lg:p-2 overflow-hidden shadow-2xl"
        >
          <img
            src="/assets/marketing/hero/hero-image.png"
            alt="SynConnect Dashboard Preview"
            className="rounded-xl lg:rounded-2xl w-full h-auto object-contain"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 h-1/2" />
        </motion.div>
      </div>
    </section>
  );
};
