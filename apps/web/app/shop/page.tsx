'use client';

import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import { Star, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: 'card-pro',
    name: 'SynConnect Pro Card',
    category: 'Card',
    description: 'High-grade matte black NFC card for professionals.',
    price: '₹2,999',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 124,
    features: ['Matte Finish', 'Unlimited Taps', '24/7 Support'],
  },
  {
    id: 'stand-business',
    name: 'Review Stand Business',
    category: 'Stand',
    description: 'The ultimate Google Review machine for your counter.',
    price: '₹3,999',
    image:
      'https://images.unsplash.com/photo-1556740734-754f1ef9228d?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    reviews: 86,
    features: ['Premium Acrylic', 'Google Maps Sync', 'QR Optimized'],
  },
  {
    id: 'card-metal',
    name: 'Silver Edition Card',
    category: 'Card',
    description: 'Ultra-premium metal NFC card for a lasting impression.',
    price: '₹5,999',
    image:
      'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 42,
    features: ['Stainless Steel', 'Laser Engraved', 'Heavy Duty'],
  },
  {
    id: 'stand-mini',
    name: 'Mini Review Stand',
    category: 'Stand',
    description: 'Compact review stand perfect for small service desks.',
    price: '₹2,499',
    image:
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 58,
    features: ['Compact Build', 'NFC + QR', 'Clear Acrylic'],
  },
];

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

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Header Section */}
        <section className="relative py-16 lg:py-24 px-6 lg:px-8 border-b border-white/5 bg-white/2">
          <div className="mx-auto max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl lg:text-7xl font-black mb-6 italic"
            >
              Explore the <span className="text-primary">Shop</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-2xl text-white/60 max-w-2xl mb-12"
            >
              Select the tools that will redefine your professional presence and
              business growth. Modern networking, built on premium NFC hardware.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-2 overflow-x-auto pb-4 sm:pb-0 w-full lg:w-auto scrollbar-hide">
                {['All Products', 'Cards', 'Stands', 'Bundles'].map((cat) => (
                  <button
                    key={cat}
                    className="shrink-0 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs lg:text-sm font-bold text-white/60 hover:text-primary hover:border-primary transition-all whitespace-nowrap"
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-64 lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </motion.div> */}
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            >
              {PRODUCTS.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col-reverse sm:flex-row bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all shadow-lg ring-1 ring-white/5"
                >
                  {/* Content Part (Left) */}
                  <div className="flex-1 p-6 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 px-2">
                          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                          <span className="text-xs font-bold text-zinc-300">
                            {product.rating}
                          </span>
                          <span className="text-zinc-500 text-[10px] font-medium">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight text-white transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm lg:text-base text-zinc-400 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {product.features.map((f, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 text-xs font-semibold text-zinc-300"
                          >
                            <CheckIcon />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-6 border-t border-white/5">
                      <div>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                          Base Price
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                          {product.price}
                        </p>
                      </div>
                      <Link
                        href={`/shop/${product.id}`}
                        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white text-black transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                      >
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Part (Right) */}
                  <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden border-b sm:border-b-0 sm:border-l border-white/5 bg-zinc-900/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-transparent to-transparent opacity-60 hidden sm:block pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60 sm:hidden pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Trust />
      </main>

      <Footer />
    </div>
  );
}

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
