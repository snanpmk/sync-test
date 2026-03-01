'use client';

import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import {
  Star,
  CheckCircle2,
  ChevronRight,
  Smartphone,
  Zap,
  Shield,
  Globe,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { products } from '@synconnect/schema';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { motion } from 'framer-motion';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  // Find product from shared schema products
  const product = products.find((p) => p.id === id) || products[0];

  const handleBuyNow = () => {
    router.push(`/checkout?productId=${product.id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mx-auto max-w-site px-6 lg:px-8 py-8 flex items-center gap-2 text-sm text-white/40"
        >
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/80 font-medium">{product.name}</span>
        </motion.div>

        <section className="mx-auto max-w-site px-6 lg:px-8">
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
            <div className="flex flex-col relative h-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-10 flex-1"
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
                          className={`w-4 h-4 ${s <= Math.round(product.rating || 5) ? 'text-primary fill-primary' : 'text-white/20'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white/60">
                      {product.rating || 5} ({product.reviews || 0} reviews)
                    </span>
                  </motion.div>

                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight italic">
                    {product.name}
                  </h1>

                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
                    ₹{product.price.toLocaleString()}
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
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 mt-8">
                    ₹{product.price.toLocaleString()}
                  </p>
                </motion.div>

              </motion.div>

              {/* CTA Area (Sticky) */}
              <div className="fixed sm:sticky bottom-0 sm:bottom-6 left-0 right-0 z-50 flex flex-row gap-3 sm:gap-4 p-4 sm:p-5 bg-black/90 sm:bg-[#09090B]/80 backdrop-blur-xl border-t sm:border border-white/10 sm:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.5)] mt-8 w-full lg:max-w-3xl mx-auto">
                {/* Shipping trust pill — replaces the old Add to Cart slot */}
             

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-2 sm:flex-2"
                >
                  <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl flex-col bg-primary px-6 py-3 text-base sm:text-lg font-bold text-black hover:brightness-110 transition-all w-full h-full shadow-[0_4px_20px_rgba(190,238,2,0.15)] leading-tight"
                  >
                    <span className="flex items-center gap-2">
                      Buy Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </motion.div>
              </div>

              {/* Shipping Note */}
              <p className="text-center text-[10px] sm:text-xs text-zinc-500 font-medium pt-6 pb-2 sm:pb-0">
                Free express shipping on all orders over ₹1,999. • Ships within
                24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-32 border-t border-white/5 px-6 lg:px-8">
          <div className="mx-auto max-w-site pt-24">
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
