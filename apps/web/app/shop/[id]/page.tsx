'use client';

import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import {
  ShoppingCart,
  Star,
  CheckCircle2,
  ChevronRight,
  Smartphone,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';
import { motion } from 'framer-motion';

const PRODUCT_DATA: Record<string, any> = {
  'card-pro': {
    name: 'SynConnect Pro Card',
    price: '₹2,999',
    description:
      'The professional standard for digital networking. Designed for those who demand excellence in every interaction. Our Pro Card features a dual-layer matte finish that feels as premium as it looks.',
    images: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200',
    ],
    features: [
      'Instant Contact Sharing',
      'Dynamic Profile Link',
      'Matte Premium Finish',
      'NTAG213 High-Speed Chip',
      'No App Required',
    ],
    specs: [
      { label: 'Compatibility', value: 'iPhone & Android' },
      { label: 'NFC Range', value: 'Up to 4cm' },
      { label: 'Security', value: 'NFC Encryption Ready' },
      { label: 'Material', value: 'Premium Recycled PVC' },
    ],
  },
  'stand-business': {
    name: 'Review Stand Business',
    price: '₹3,999',
    description:
      'Automate your customer feedback loop. The SynConnect Stand is engineered to bridge the gap between physical experience and digital reputation. Place it at your point of sale and watch your Google ratings skyrocket.',
    images: [
      'https://images.unsplash.com/photo-1556740734-754f1ef9228d?q=80&w=1200',
    ],
    features: [
      'Google Review Optimized',
      'Custom Branding Area',
      'Anti-Scratch Acrylic',
      'Non-Slip Base',
      'Real-time Analytics',
    ],
    specs: [
      { label: 'Base', value: 'Brushed Aluminum' },
      { label: 'Height', value: '15cm / 6 inches' },
      { label: 'Sync', value: 'Direct URL / QR' },
      { label: 'Weather', value: 'UV Resistant' },
    ],
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = PRODUCT_DATA[id] || PRODUCT_DATA['card-pro'];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex items-center gap-2 text-sm text-white/40"
        >
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/80 font-medium">{product.name}</span>
        </motion.div>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* Left: Sticky Image Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <motion.img
                  layoutId={`product-image-${id}`}
                  src={product.images[0]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-xl border border-white/5 bg-white/5 overflow-hidden opacity-50 hover:opacity-100 transition-all cursor-pointer"
                  >
                    <img
                      src={product.images[0]}
                      alt=""
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white/60">
                    4.9 (124 reviews)
                  </span>
                </motion.div>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight italic">
                  {product.name}
                </h1>

                <p className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
                  {product.price}
                </p>

                <p className="text-base sm:text-xl text-white/60 leading-relaxed max-w-xl">
                  {product.description}
                </p>
              </div>

              {/* Core Feature Badges */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {[
                  { label: 'Instant Connect', icon: Smartphone },
                  { label: 'Modern NFC', icon: Zap },
                  { label: 'Secure Data', icon: Shield },
                  { label: 'Works Globally', icon: Globe },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    }}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs sm:text-sm font-bold text-white/80">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Specs Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/2"
              >
                <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white uppercase tracking-widest border-b border-white/10 pb-4">
                  Standard Specs
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {product.specs.map((spec: any, i: number) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-xs sm:text-sm"
                    >
                      <span className="text-white/40">{spec.label}</span>
                      <span className="text-white font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Area */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 sm:pt-10 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:flex-1 group flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-black text-black transition-all shadow-[0_0_20px_rgba(190,238,2,0.2)]"
                >
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  Add to Cart
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:flex-1"
                >
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-black text-white hover:bg-white/10 transition-all w-full h-full"
                  >
                    Buy Now
                  </Link>
                </motion.div>
              </div>

              {/* Shipping Note */}
              <p className="text-center text-[10px] sm:text-xs text-white/40 font-medium sm:whitespace-nowrap">
                Free express shipping on all orders over ₹1,999. • Ships within
                24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mt-32 border-t border-white/5 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl pt-24">
            <h2 className="text-3xl font-bold mb-12 italic">
              Related Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((f: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/1 flex items-start gap-4 transition-colors hover:bg-white/3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg text-white/80">{f}</span>
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
