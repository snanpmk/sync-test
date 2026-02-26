'use client';

import { CreditCard, Star, ArrowRight, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#09090B]">
      {/* Premium Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-primary/10 rounded-full blur-[100px] lg:blur-[150px]" />
      </motion.div>

      <div className="relative mx-auto  px-6 lg:px-38 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 mb-8 ring-1 ring-white/5 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest pl-1">
                SMART DIGITAL NETWORKING PLATFORM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]"
            >
              Connect Smarter, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-primary to-zinc-400">
                Grow Faster in the Digital Era.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-zinc-400 mb-12 leading-relaxed font-medium max-w-xl"
            >

              Smart digital business cards with real-time analytics.

              Google Review stands that turn happy customers into 5-star ratings. </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <Link
                href="/shop"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                <CreditCard className="w-5 h-5 text-zinc-800" />
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-zinc-600" />
              </Link>
              <Link
                href="/how-it-works"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold text-zinc-300 transition-all hover:bg-white/[0.08] hover:text-white active:scale-95 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                See It in Action
              </Link>
            </motion.div>
          </div>

          {/* Right Image/Mockup Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full lg:h-[600px] relative rounded-[2rem] lg:rounded-[3rem] border border-white/[0.05] bg-white/[0.02] p-2 lg:p-4 overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-xl flex flex-col"
          >
            <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="relative flex-1 rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-zinc-900/50 aspect-[4/3] lg:aspect-auto flex items-center justify-center group">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Dashboard App Preview"
                className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent h-1/2 pointer-events-none z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
