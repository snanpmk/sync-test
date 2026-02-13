'use client';

import {
  BarChart3,
  MousePointer2,
  PhoneCall,
  TrendingUp,
  ShoppingBag,
  Settings,
  Smartphone,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Analytics = () => {
  return (
    <section className="py-20 lg:py-32 bg-white/5 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 italic"
        >
          Track Every Tap. <br />
          Measure Every Interaction.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg lg:text-xl text-white/60 mb-12 sm:mb-20"
        >
          Know exactly how your digital identity performs. See profile views,
          link clicks, and review taps — all in one dashboard.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {[
            { label: 'Profile Views', icon: BarChart3, value: '1,280' },
            { label: 'Social Clicks', icon: MousePointer2, value: '450' },
            { label: 'Contact Saves', icon: PhoneCall, value: '85' },
            { label: 'Growth Trend', icon: TrendingUp, value: '+24%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl lg:rounded-3xl border border-white/10 bg-black p-6 lg:p-10 shadow-lg text-left lg:text-center"
            >
              <div className="mx-0 lg:mx-auto flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 lg:mb-6 border border-primary/20">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <p className="text-white/40 text-[10px] lg:text-sm font-black uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-2xl lg:text-4xl font-black text-white">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            {[
              {
                title: 'Purchase your card',
                text: 'Select your preferred design and finish from our shop.',
                icon: ShoppingBag,
              },
              {
                title: 'Setup your profile',
                text: 'Add your contact info, social links, and showcase services.',
                icon: Settings,
              },
              {
                title: 'Tap to share instantly',
                text: 'Touch your card to any smartphone to share your profile.',
                icon: Smartphone,
              },
            ].map((step, i) => (
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
            {[
              {
                title: 'Purchase your stand',
                text: 'Premium acrylic stands built for high-traffic service counters.',
                icon: ShoppingBag,
              },
              {
                title: 'Add Google review link',
                text: 'Configure your destination in seconds on our dashboard.',
                icon: Settings,
              },
              {
                title: 'Collect reviews instantly',
                text: 'Drive massive customer action with a simple counter-top tap.',
                icon: Star,
              },
            ].map((step, i) => (
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
