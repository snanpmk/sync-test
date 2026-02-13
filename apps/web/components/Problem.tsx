'use client';

import { X, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Problem = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Still Using Paper <br />
              Business Cards in 2026?
            </h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Traditional visiting cards get lost, thrown away, or forgotten.
              You can't update them. You can't track them. And they don't help
              you grow.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-8 transition-all"
            >
              Upgrade to Smart Networking
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            {/* Traditional Card Pitfalls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/5 bg-white/2 p-8 space-y-4"
            >
              <h3 className="text-white/40 font-bold uppercase tracking-wider text-sm mb-4">
                Traditional Cards
              </h3>
              {[
                'Printed once, outdated forever',
                'No analytics',
                'No social media links',
                'No instant contact save',
                'No review generation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-white/50">
                  <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* SynConnect Benefits */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-8 space-y-4 shadow-[0_0_30px_rgba(190,238,2,0.1)]"
            >
              <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
                SynConnect
              </h3>
              {[
                'Tap to share instantly',
                'Update anytime',
                'Track every interaction',
                'Add social links & services',
                'Collect Google reviews',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
