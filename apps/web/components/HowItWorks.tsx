'use client';

import { Smartphone, TrendingUp, ShoppingBag, Settings, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFESSIONAL_STEPS, BUSINESS_STEPS } from '@/lib/constants';

export const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-48">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-white mb-6 italic"
          >
            Simple 3-Step Setup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-white/60 mx-auto max-w-2xl"
          >
            Get up and running in minutes, not hours. Optimized for modern
            entrepreneurs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Card Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-white mb-10 pb-6 border-b border-primary/20 italic">
              <Smartphone className="w-8 h-8 text-primary" />
              For Professionals
            </h3>
            {PROFESSIONAL_STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="shrink-0 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-primary text-black font-black text-xl lg:text-3xl italic">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-lg">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stand Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-white mb-10 pb-6 border-b border-white/20 italic">
              <TrendingUp className="w-8 h-8 text-primary" />
              For Businesses
            </h3>
            {BUSINESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="shrink-0 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl border-2 border-white/20 text-white font-black text-xl lg:text-3xl italic">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-lg">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
