'use client';

import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import { Target, Users, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 pb-24">
        <section className="py-20 lg:py-32 px-6 lg:px-8 bg-linear-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 italic"
            >
              The SynConnect Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            >
              We started with a simple observation:{' '}
              <span className="text-white font-bold italic">
                networking is broken.
              </span>{' '}
              Paper cards are wasteful, information gets lost, and businesses
              struggle to capture customer sentiment in the real world.
              SynConnect exists to sync your physical interactions with your
              digital growth.
            </motion.p>
          </div>
        </section>

        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl lg:text-5xl font-black italic mb-6">
                  Empowering Professionals & Businesses
                </h2>
                <p className="text-base lg:text-xl text-white/60 leading-relaxed">
                  SynConnect isn't just about NFC cards. It's about data-driven
                  networking. We believe every handshake should lead to a
                  measurable connection, and every customer visit should
                  contribute to a business's digital reputation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 text-black">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-[2rem] bg-primary"
                  >
                    <Target className="w-8 h-8 mb-4" />
                    <h4 className="font-black text-xl mb-1 italic">Vision</h4>
                    <p className="text-sm font-bold opacity-80 leading-relaxed">
                      To be the global identity layer for physical interactions.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-[2rem] bg-white"
                  >
                    <Users className="w-8 h-8 mb-4 text-black" />
                    <h4 className="font-black text-xl mb-1 italic">
                      Community
                    </h4>
                    <p className="text-sm font-bold opacity-60 leading-relaxed">
                      Built for over 50,000+ professionals worldwide.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video lg:aspect-square rounded-3xl lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
                  alt="Our Team Workspace"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-48 px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-2xl lg:text-4xl font-black mb-16 lg:mb-32 text-white/40 italic uppercase tracking-[0.3em]"
            >
              Our Core Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
              {[
                {
                  title: 'Simplicity First',
                  text: 'One tap. No apps. No login friction for the receiver.',
                  icon: Zap,
                },
                {
                  title: 'Privacy Optimized',
                  text: 'You control exactly what you share, and when you share it.',
                  icon: Shield,
                },
                {
                  title: 'Impact Driven',
                  text: 'Measurable analytics for every card tap and stand review.',
                  icon: Target,
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto h-20 w-20 lg:h-24 lg:w-24 flex items-center justify-center rounded-3xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-black transition-all mb-8 shadow-xl"
                  >
                    <v.icon className="w-8 h-8 lg:w-10 lg:h-10" />
                  </motion.div>
                  <h4 className="text-xl lg:text-2xl font-black mb-4 italic">
                    {v.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-lg">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Trust />
      </main>

      <Footer />
    </div>
  );
}
