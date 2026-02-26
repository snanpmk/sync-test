'use client';

import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, TrendingUp, HelpCircle } from 'lucide-react';

const rowVariants = {
  hidden: { opacity: 0, scaleY: 0.9 },
  visible: { opacity: 1, scaleY: 1 },
};

export const ComparisonTable = () => {
  const comparisonData = [
    { feature: 'Initial Cost', traditional: 'High (printing/re-printing)', syncconnect: 'Low (one-time purchase)' },
    { feature: 'Updateable Info', traditional: false, syncconnect: true },
    { feature: 'Real-time Analytics', traditional: false, syncconnect: true },
    { feature: 'Lead Generation', traditional: 'Manual entry needed', syncconnect: 'Automatic contact capture' },
    { feature: 'Service Showcase', traditional: 'Limited to paper size', syncconnect: 'Unlimited with docs/media' },
    { feature: 'Environmental Impact', traditional: 'Huge waste from discards', syncconnect: 'Zero waste, forever card' },
    { feature: 'Customer Experience', traditional: 'Forgettable paper', syncconnect: 'Premium digital "Wow" moment' },
  ];

  return (
    <section className="py-24 lg:py-40 bg-black relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-primary/10 rounded-full blur-[200px] opacity-20 pointer-events-none -translate-y-1/2" />
      
      <div className="relative mx-auto max-w-site px-6 lg:px-8 z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <TrendingUp className="w-3.5 h-3.5 text-primary" />
              The Comparison
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 italic tracking-tight">
              Paper is <span className="text-primary">Dead</span>.
            </h2>
            <p className="mx-auto max-w-2xl text-lg lg:text-xl text-white/50 leading-relaxed font-medium">
              See why thousands of professionals are switching from traditional networking to the SynConnect ecosystem.
            </p>
          </motion.div>
        </div>

        <div className="rounded-[40px] bg-white/2 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="p-8 lg:p-12 text-white/50 font-black uppercase tracking-widest text-[10px] lg:text-sm italic">Feature Set</div>
            <div className="p-8 lg:p-12 text-white/30 font-black uppercase tracking-widest text-[10px] lg:text-sm text-center italic">Paper Cards</div>
            <div className="p-8 lg:p-12 text-primary font-black uppercase tracking-widest text-[10px] lg:text-sm text-center italic">SynConnect</div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={rowVariants}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="grid grid-cols-3 group hover:bg-white/1 transition-all"
              >
                <div className="p-8 lg:p-10 text-white/90 font-bold text-base lg:text-xl italic tracking-tight">{row.feature}</div>
                <div className="p-8 lg:p-10 flex items-center justify-center text-white/20 text-center text-sm lg:text-lg italic leading-relaxed">
                  {typeof row.traditional === 'boolean' ? (
                     row.traditional ? <Check className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-red-500/50" />
                  ) : row.traditional}
                </div>
                <div className="p-8 lg:p-10 flex items-center justify-center font-bold text-center text-base lg:text-xl italic leading-relaxed text-white">
                  {typeof row.syncconnect === 'boolean' ? (
                     row.syncconnect ? <Check className="w-6 h-6 lg:w-8 lg:h-8 text-primary shadow-[0_0_20px_rgba(190,238,2,0.4)]" /> : <X className="w-6 h-6 text-red-500/50" />
                  ) : row.syncconnect}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
