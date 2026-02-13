'use client';

import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import {
  Tablet,
  Smartphone,
  Search,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-sans">
      <Navbar />

      <main className="pt-24 pb-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-8 text-center bg-linear-to-b from-white/5 to-transparent">
          <div className="mx-auto max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight italic"
            >
              One Tap to <span className="text-primary">Connect.</span> <br />
              One Tap to <span className="text-primary">Grow.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-16"
            >
              SynConnect uses high-frequency NFC (Near Field Communication) to
              bridge the gap between a physical presence and your digital world.
              No apps, no friction.
            </motion.p>

            {/* Product Introduction Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mx-auto max-w-4xl aspect-video rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="SynConnect Product Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* Fulfillment Flow */}
        <section className="py-20 lg:py-32 px-6 lg:px-8 border-b border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl lg:text-5xl font-black mb-16 lg:mb-24 italic uppercase tracking-widest">
              Order to Onboard Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01. Select & Order',
                  text: 'Pick your premium NFC card or review stand and complete the lightning-fast checkout.',
                },
                {
                  step: '02. Setup Instantly',
                  text: 'Immediately after payment, access our onboarding portal to build your profile or sync your review link.',
                },
                {
                  step: '03. Tap & Network',
                  text: 'Receive your premium hardware in days. Your profile is already live and ready for the first tap.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 lg:p-12 rounded-3xl bg-black border border-white/10 group hover:border-primary transition-all text-center lg:text-left shadow-lg"
                >
                  <h4 className="text-xl lg:text-2xl font-black italic mb-4 text-primary">
                    {item.step}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Card Mechanic */}
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest mb-8"
                >
                  The Professional Identity
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-5xl font-black mb-10 italic"
                >
                  The SynConnect Card
                </motion.h2>

                <div className="space-y-12">
                  {[
                    {
                      title: 'The Tap Interaction',
                      text: 'When you touch your card to a smartphone, it triggers a secure NFC handshake.',
                      icon: Smartphone,
                    },
                    {
                      title: 'Instant Profile Load',
                      text: 'The phone immediately loads your customized profile page in its native browser.',
                      icon: Zap,
                    },
                    {
                      title: 'Seamless Integration',
                      text: 'Your contact is saved directly to their phonebook with a single click.',
                      icon: CheckCircle2,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="shrink-0 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <item.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl lg:text-2xl font-black mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/60 leading-relaxed text-sm lg:text-lg italic">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200"
                  alt="NFC Card Interaction"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Stand Mechanic */}
        <section className="py-20 lg:py-32 px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1556740734-754f1ef9228d?q=80&w=1200"
                  alt="NFC Stand Interaction"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-tl from-black/60 via-transparent to-transparent" />
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest mb-8"
                >
                  The Google Review Machine
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-5xl font-black mb-10 italic"
                >
                  The SynConnect Stand
                </motion.h2>

                <div className="space-y-12">
                  {[
                    {
                      title: 'Counter-Top Access',
                      text: 'Customers tap their phone to the stand while paying or waiting for their order.',
                      icon: Tablet,
                    },
                    {
                      title: 'Direct Review Link',
                      text: 'Instead of searching for your business, the Google Review page opens instantly.',
                      icon: Search,
                    },
                    {
                      title: 'Reputation Growth',
                      text: 'By removing friction, you see a 400% increase in customer review volume.',
                      icon: Zap,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="shrink-0 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <item.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl lg:text-2xl font-black mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/60 leading-relaxed text-sm lg:text-lg italic">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-48 px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black mb-12 italic"
            >
              Ready to Experience Magic?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                href="/shop"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-primary px-10 py-6 text-2xl font-black text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(190,238,2,0.3)]"
              >
                Go to Shop
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Trust />
      </main>

      <Footer />
    </div>
  );
}
