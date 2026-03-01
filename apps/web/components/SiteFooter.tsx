'use client';

import { Star, ShieldCheck, Truck, Zap, HeadphonesIcon } from 'lucide-react';
import { SynConnectLogo } from '@synconnect/ui';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const SocialProof = () => {
  const testimonials = [
    {
      quote: 'Clients are genuinely impressed when I tap my card. It feels modern and premium. No more carrying paper.',
      author: 'Elena Rodriguez',
      role: 'Freelance Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote: 'We increased our Google reviews by over 300% within weeks. The stand is worth every single rupee.',
      author: 'Mark Stevenson',
      role: 'Salon Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote: "I haven't printed a single business card since I got SynConnect. It's the best networking investment I've made.",
      author: 'Ayush Patel',
      role: 'Real Estate Broker',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote: "Our restaurant's ratings skyrocketed. Customers love the seamless tap-to-review process right at their tables.",
      author: 'Sarah Jenkins',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 italic tracking-tight"
          >
            Loved by Professionals & Businesses
          </motion.h2>
          <div className="flex justify-center gap-1 mb-4 mt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-5 h-5 lg:w-6 lg:h-6 text-primary fill-primary"
              />
            ))}
          </div>
          <p className="text-white/50 text-[10px] lg:text-sm font-black uppercase tracking-[0.2em]">
            4.9/5 Average Rating — Based on 2,500+ Taps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex flex-col justify-between rounded-3xl bg-white/2 border border-white/5 p-8 hover:bg-white/4 hover:border-white/10 transition-all duration-500 relative overflow-hidden group"
            >
              <span className="text-primary text-[100px] leading-none absolute -top-2 -left-2 opacity-5 pointer-events-none italic group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
                “
              </span>
              <p className="relative z-10 mb-10 text-base lg:text-lg text-white/80 leading-relaxed font-medium italic">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="h-12 w-12 rounded-full object-cover border border-white/10 group-hover:border-primary/50 transition-colors duration-500" 
                />
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-widest mb-1">
                    {t.author}
                  </p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em]">
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
      <div className="mx-auto max-w-site px-6 lg:px-8">
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
      <div className="mx-auto max-w-site px-6 lg:px-8">
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
              {['About Us', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.replace('About Us', 'about').replace('Features', 'features').replace('Contact', 'contact').toLowerCase()}`}
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
