'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import { Analytics } from '@/components/Analytics';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import { 
  CardProfileMock, 
  ConnectDialogMock, 
  ProfileStudioMock, 
  ProductServiceMock 
} from '@/components/mocks/CardMocks';

import {
  ReviewFilterMock,
  StandProfileMock,
  StandDashboardMock,
  RestaurantMenuMock
} from '@/components/mocks/StandMocks';

type Tab = 'card' | 'stand';

/* ─────────────────────────────────────────────────────────────────────
   SPOTLIGHT DATA
───────────────────────────────────────────────────────────────────── */

const cardSpotlights = [
  {
    tag: 'Digital Identity',
    headline: 'Your profile, always live.',
    subline:
      'A dynamic mini‑portfolio that updates instantly — contact info, social media, visual gallery, custom buttons, and services. The person you tap never needs an app',
    visual: <CardProfileMock />,
    reverse: false,
  },
  {
    tag: 'Lead Capture',
    headline: 'Turn every tap into a conversation.',
    subline:
      'The built‑in "Connect With Us" dialog captures names, emails, and notes automatically. Every tap on your card is a potential client — neatly stored in your Connections dashboard.',
    visual: <ConnectDialogMock />,
    reverse: true,
  },
  {
    tag: 'Profile Studio',
    headline: 'Customise everything, anytime.',
    subline:
      'Edit your name, tagline, accent colour, section visibility, and more — all from your dashboard. Changes go live instantly. No re-ordering or waiting. Your profile always reflects who you are right now.',
    visual: <ProfileStudioMock />,
    reverse: false,
  },
  {
    tag: 'Product Showcase',
    headline: 'Showcase what you do best.',
    subline:
      'List your services, products, or portfolio items directly on your card. Add pricing, images, and descriptions to let people know exactly what you offer the second they tap.',
    visual: <ProductServiceMock />,
    reverse: true,
  },
];

const standSpotlights = [
  {
    tag: 'Smart Routing',
    headline: 'Protect your reputation automatically.',
    subline:
      'Customers who rate 4+ stars are sent straight to your Google Review page. Those who rate 3 or below land on a private feedback form — letting you resolve issues before they ever go public.',
    visual: <ReviewFilterMock />,
    reverse: false,
  },
  {
    tag: 'Business Profile',
    headline: 'Everything your customer needs in one tap.',
    subline:
      'Working hours, social media, document uploads, and CTA buttons — all customisable to your sector. Coffee shop? "View Menu". Clinic? "Book Appointment". Upload changes on the fly, live instantly.',
    visual: <StandProfileMock />,
    reverse: true,
  },
  {
    tag: 'Business Dashboard',
    headline: 'Manage feedback. Track growth.',
    subline:
      'A private feedback inbox keeps negative reviews off the internet. View analytics show counter traffic trends. Social click data reveals exactly what drives your audience to act.',
    visual: <StandDashboardMock />,
    reverse: false,
  },
  {
    tag: 'Digital Documents',
    headline: 'Menus, Brochures, Forms. All Digital.',
    subline:
      'Replace physical flyers and messy menus with a digital document hub. Upload PDFs or create dynamic lists (like restaurant menus) that customers can browse with a tap. Update instantly — no reprinting required.',
    visual: <RestaurantMenuMock />,
    reverse: true,
  },
];

/* ─────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────── */

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<Tab>('card');
  const router = useRouter();
  const goToShop = (category: string) => {
    router.push(`/shop?category=${encodeURIComponent(category)}`);
  };

  const spotlights = activeTab === 'card' ? cardSpotlights : standSpotlights;

  const tabs: { id: Tab; label: string; desc: string }[] = [
    { id: 'card', label: 'The Card', desc: 'For Professionals' },
    { id: 'stand', label: 'The Stand', desc: 'For Businesses' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-sans overflow-x-hidden">
      {/* Background dot grid */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Navbar />

      <main className="relative z-10 pt-24">

        {/* ─── HERO ─── */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 text-center bg-linear-to-b from-primary/5 via-transparent to-transparent">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest mb-6"
          >
            Platform Features
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black italic mb-5 tracking-tighter leading-[0.9]"
          >
            Two Products. <br className="hidden sm:block" />
            Infinite Possibilities.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-base lg:text-xl text-white/50 font-medium leading-relaxed"
          >
            Every feature built to convert taps into relationships and customers into advocates.
          </motion.p>
        </section>

        {/* ─── STICKY TAB BAR ─── */}
        <div className="sticky top-[80px] z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 py-4">
          <div className="flex justify-center px-6">
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative z-10 flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2 px-6 py-2.5 rounded-full transition-colors duration-200 min-w-[130px] sm:min-w-0 text-center sm:text-left"
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 font-black text-sm lg:text-base transition-colors duration-200 leading-tight ${
                      activeTab === tab.id ? 'text-black' : 'text-white/50'
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`relative z-10 text-[10px] font-bold transition-colors duration-200 ${
                      activeTab === tab.id ? 'text-black/60' : 'text-white/25'
                    }`}
                  >
                    {tab.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* ─── FEATURE SPOTLIGHTS ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {spotlights.map((s, i) => (
              <section
                key={i}
                className={`py-20 lg:py-32 px-6 lg:px-8 border-b border-white/5 ${
                  i % 2 === 1 ? 'bg-white/[0.018]' : ''
                }`}
              >
                <div className="mx-auto max-w-site">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                      s.reverse ? 'lg:flex lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text */}
                    <motion.div
                      initial={{ opacity: 0, x: s.reverse ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest mb-6">
                        {s.tag}
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter leading-[0.95] mb-6">
                        {s.headline}
                      </h2>
                      <p className="text-base lg:text-xl text-white/50 leading-relaxed">
                        {s.subline}
                      </p>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="flex justify-center"
                    >
                      {s.visual}
                    </motion.div>
                  </div>
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── ANALYTICS (shared platform) ─── */}
        <Analytics />

        {/* ─── CTA ─── */}
        <section className="py-24 lg:py-40 px-6 lg:px-8 border-t border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black italic mb-6 tracking-tighter leading-[0.9]"
            >
              Pick Your Weapon.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base lg:text-lg text-white/50 mb-14 max-w-xl mx-auto"
            >
              Both built for impact. Choose the one that fits your game — or get both.
            </motion.p>

            {/* Two product CTA cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto"
            >
              <button
                onClick={() => goToShop('Cards')}
                className="flex flex-col items-start gap-3 p-6 rounded-3xl bg-primary text-black hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(190,238,2,0.2)] text-left"
              >
                <CheckCircle2 className="w-7 h-7" />
                <div className="text-left">
                  <p className="font-black text-lg">The Card</p>
                  <p className="text-black/60 text-sm font-bold">For professionals & freelancers</p>
                </div>
                <ArrowRight className="w-5 h-5 self-end" />
              </button>
              <button
                onClick={() => goToShop('Stands')}
                className="flex flex-col items-start gap-3 p-6 rounded-3xl bg-white text-black hover:scale-[1.02] active:scale-95 transition-all shadow-lg text-left"
              >
                <CheckCircle2 className="w-7 h-7 text-black" />
                <div className="text-left">
                  <p className="font-black text-lg">The Stand</p>
                  <p className="text-black/50 text-sm font-bold">For businesses & shops</p>
                </div>
                <ArrowRight className="w-5 h-5 self-end text-black" />
              </button>
            </motion.div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-bold transition-colors"
            >
              Browse all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Trust />
      </main>

      <Footer />
    </div>
  );
}
