'use client';

import { Star, ShieldCheck, Truck, Zap, HeadphonesIcon } from 'lucide-react';
import { SynConnectLogo } from '@synconnect/ui';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const SocialProof = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-black text-white mb-6 italic"
          >
            Loved by Professionals & Businesses
          </motion.h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-5 h-5 lg:w-6 lg:h-6 text-primary fill-primary"
              />
            ))}
          </div>
          <p className="text-white/40 text-[10px] lg:text-sm font-black uppercase tracking-widest">
            4.9/5 Average Rating — Based on 2,500+ Taps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {[
            {
              quote:
                'Clients are genuinely impressed when I tap my card. It feels modern and premium. No more carrying paper.',
              author: 'Elena Rodriguez',
              role: 'Freelance Designer',
            },
            {
              quote:
                'We increased our Google reviews by over 300% within weeks. The stand is worth every rupee.',
              author: 'Mark Stevenson',
              role: 'Salon Owner',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-white/[0.02] border border-white/5 p-8 lg:p-12 italic text-lg lg:text-2xl text-white/80 relative overflow-hidden"
            >
              <span className="text-primary text-[120px] absolute -top-4 -left-4 opacity-5 pointer-events-none italic">
                “
              </span>
              <p className="relative z-10 mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white/10" />
                <div>
                  <p className="text-white font-black text-sm lg:text-lg not-italic italic uppercase tracking-wider">
                    {t.author}
                  </p>
                  <p className="text-white/40 text-[10px] lg:text-xs not-italic font-medium uppercase tracking-[0.2em]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Trust = () => {
  return (
    <section className="py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {[
            {
              title: 'Secure Data',
              icon: ShieldCheck,
              text: 'Encrypted dashboard access',
            },
            {
              title: 'Fast Delivery',
              icon: Truck,
              text: 'Free shipping across India',
            },
            {
              title: 'Premium NFC',
              icon: Zap,
              text: 'High-grade NTAG213 chips',
            },
            {
              title: 'Easy Setup',
              icon: HeadphonesIcon,
              text: '24/7 dedicated support',
            },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto flex h-14 w-14 lg:h-20 lg:w-20 items-center justify-center rounded-2xl lg:rounded-3xl bg-white/5 mb-6 group-hover:bg-primary/20 transition-all">
                <item.icon className="w-6 h-6 lg:w-10 lg:h-10 text-white group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-white font-black text-sm lg:text-lg italic uppercase tracking-widest mb-2">
                {item.title}
              </h4>
              <p className="text-white/40 text-[10px] lg:text-xs font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-16 mb-20 text-center lg:text-left">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <SynConnectLogo className="h-8 w-auto mb-8" />
            <p className="text-white/60 max-w-md text-lg leading-relaxed">
              SynConnect is redefining how professionals and businesses connect
              in the digital era. Modern networking. Real results. Optimized for
              the next generation.
            </p>
          </div>
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">
              Products
            </h5>
            <ul className="space-y-4">
              {['Digital Cards', 'Review Stands', 'Bulk Orders'].map((item) => (
                <li key={item}>
                  <Link
                    href="/shop"
                    className="text-white/40 hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">
              Company
            </h5>
            <ul className="space-y-4">
              {['About Us', 'How it Works', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-white/40 hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[10px] lg:text-xs font-bold uppercase tracking-widest">
            © 2026 SynConnect — Bridging Physical & Digital.
          </p>
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="text-white/20 text-[10px] lg:text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-white/20 text-[10px] lg:text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
