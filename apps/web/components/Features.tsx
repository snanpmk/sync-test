'use client';

import { Settings2, BarChart3, FileText, Users, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  { title: 'Limitless Customization', desc: 'Edit your data any time, as many times as you want. Full control over your design.', icon: <Settings2 className="w-6 h-6" /> },
  { title: 'Powerful Insights', desc: 'Track profile views, link taps, and engagement with real-time analytics.', icon: <BarChart3 className="w-6 h-6" /> },
  { title: 'Custom Documents', desc: 'Upload portfolios, menus, or PDFs. Display them using your own custom labels.', icon: <FileText className="w-6 h-6" /> },
  { title: 'Lead Connections', desc: 'Capture contact info seamlessly and get leads directly from people you meet.', icon: <Users className="w-6 h-6" /> },
  { title: 'Filtered Reviews', desc: 'Smart filtering routes 4-5 stars to Google, keeping 1-3 star feedback private.', icon: <Filter className="w-6 h-6" /> }
];

export const Features = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-site px-6 lg:px-8 z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Settings2 className="w-3.5 h-3.5 text-primary" />
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 italic tracking-tighter">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg lg:text-xl text-white/50 leading-relaxed font-medium mb-12">
            The all-in-one ecosystem for modern professionals and growing
            businesses. Tap into the future.
          </p>
        </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
              className="group p-8 lg:p-10 rounded-[32px] bg-white/2 border border-white/10 hover:border-white/20 hover:bg-white/4 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 mb-8 group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">{feature.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
