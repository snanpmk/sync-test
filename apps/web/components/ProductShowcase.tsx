'use client';

import { CreditCard, Star, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ProductShowcase = () => {
  return (
    <>
      {/* Product 1: SynConnect Card */}
      <section
        id="card"
        className="py-20 lg:py-32 border-t border-white/5 pb-0"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image First on Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-video lg:aspect-4/3 group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop"
                  alt="NFC Card Tap Interaction"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-tr from-black/80 via-transparent to-transparent h-1/2" />
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                  <p className="text-white text-2xl lg:text-3xl font-bold italic">
                    Tap. Share. <br />
                    Impress.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6"
              >
                Personal Branding
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight italic"
              >
                SynConnect Card – <br />
                Your Digital Identity
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-white/60 mb-8 leading-relaxed"
              >
                A smart NFC-enabled digital business card that instantly shares
                your profile, services, and contact details with a simple tap.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'NFC + QR enabled',
                  'Instant contact sharing',
                  'Add social media links',
                  'Showcase services & portfolio',
                  'Real-time analytics',
                  'Edit anytime from dashboard',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/80 font-medium text-sm lg:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  href="/shop/card"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-black text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(190,238,2,0.2)]"
                >
                  <CreditCard className="w-5 h-5" />
                  Get My Card — ₹2,999
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product 2: SynConnect Stand */}
      <section id="stand" className="py-24 lg:py-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image First on Mobile, Second on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-video lg:aspect-4/3 group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556741533-974f8e62a92d?q=80&w=1200&auto=format&fit=crop"
                    alt="Business Review Stand"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-transparent to-transparent h-1/2" />
                  <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                    <p className="text-white text-2xl lg:text-3xl font-bold italic">
                      More Reviews. <br />
                      More Trust.
                    </p>
                  </div>
                </div>

                {/* Floating Achievement Badge */}
                <motion.div
                  initial={{ rotate: -10, scale: 0 }}
                  whileInView={{ rotate: 5, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-black border border-primary/30 p-4 rounded-2xl shadow-xl z-10"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-3 h-3 lg:w-4 lg:h-4 text-primary fill-primary"
                        />
                      ))}
                    </div>
                    <span className="text-white font-black text-xs lg:text-sm">
                      +42 Reviews
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6"
              >
                Business Growth
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight italic"
              >
                Turn Every Customer
                <br className="hidden sm:block" /> Into a 5-Star Review{' '}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-white/60 mb-8 leading-relaxed"
              >
                Place the SynConnect Stand at your counter and let customers tap
                to instantly leave a Google review. Simple for them. Powerful
                for you.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'NFC + QR tap',
                  'Direct Google review link',
                  'Custom branding',
                  'Thank you messaging',
                  'Tap tracking analytics',
                  'Built for retail/service',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-white/80 font-medium text-sm lg:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/shop/stand"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-black text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  Get Review Stand — ₹3,999
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
