'use client';

import { Settings2, BarChart3, FileText, Users, Filter, ArrowRight, Share2, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const sharedFeatures = [
  { title: 'Limitless Customization', desc: 'Edit your data any time, as many times as you want. Full control over your design.', icon: <Settings2 className="w-6 h-6" /> },
  { title: 'Powerful Insights', desc: 'Track profile views, link taps, and engagement with real-time analytics.', icon: <BarChart3 className="w-6 h-6" /> },
  { title: 'Custom Documents', desc: 'Upload portfolios, menus, or PDFs. Display them using your own custom labels.', icon: <FileText className="w-6 h-6" /> },
];

const uniqueFeatures = [
  {
    id: 'card',
    title: 'Digital Business Card',
    description: 'Replace standard printed cards with a comprehensive digital identity.',
    icon: <Share2 className="w-8 h-8" />,
    link: '/shop/card',
    featureTitle: 'Lead Connections',
    featureDesc: 'Capture contact info seamlessly and get leads directly from people you meet.',
    featureIcon: <Users className="w-5 h-5" />
  },
  {
    id: 'stand',
    title: 'Google Review Stand',
    description: 'A physical touchpoint engineered to drive and automate high-quality reviews.',
    icon: <Star className="w-8 h-8" />,
    link: '/shop/stand',
    featureTitle: 'Filtered Reviews',
    featureDesc: 'Smart filtering routes 4-5 stars to Google, keeping 1-3 star feedback private.',
    featureIcon: <Filter className="w-5 h-5" />
  }
];

export const Features = () => {
  return (
    <section className="relative py-24 lg:py-40 bg-black overflow-hidden border-t border-white/5">
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
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 italic tracking-tight">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg lg:text-xl text-white/50 leading-relaxed font-medium">
              Explore the advanced tools shared across both products, designed specifically to help professionals and businesses thrive.
            </p>
          </motion.div>
        </div>

        {/* Shared Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-32">
          {sharedFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-[32px] bg-white/[0.02] border border-white/10 p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(190,238,2,0.05)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 mb-8 group-hover:text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 shadow-inner">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">{f.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>


        {/* Unique Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {uniqueFeatures.map((product, pIndex) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pIndex * 0.1 }}
              className="group relative rounded-[40px] bg-white/[0.02] border border-white/10 p-8 md:p-12 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_80px_rgba(190,238,2,0.07)] overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 shrink-0 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight">{product.title}</h3>
                  </div>
                </div>
                
                <p className="text-white/50 text-lg leading-relaxed mb-10">{product.description}</p>
                
                {/* Highlighted Unique Feature */}
                <div className="flex-1 mb-10">
                  <div className="rounded-3xl bg-primary/[0.03] border border-primary/20 p-6 md:p-8 transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/40">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                      {product.featureIcon}
                    </div>
                    <h4 className="text-white text-xl font-bold mb-3">{product.featureTitle}</h4>
                    <p className="text-white/60 text-base leading-relaxed">{product.featureDesc}</p>
                  </div>
                </div>

                <a
                  href={product.link}
                  className="inline-flex w-full justify-center items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-base font-bold text-white transition-all group-hover:bg-primary group-hover:text-black group-hover:border-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore {product.title} <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
