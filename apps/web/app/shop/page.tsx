'use client';

import { Navbar } from '@/components/Navbar';
import { Footer, Trust } from '@/components/SiteFooter';
import { Star, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useShopStore } from '@/store/useShopStore';

const PRODUCTS = [
  // =========================
  // DIGITAL BUSINESS CARDS
  // =========================
  {
    id: 'card-metal',
    name: 'Metal NFC Business Card',
    category: 'Card',
    description: 'Ultra-premium stainless steel NFC card for executives and founders.',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    reviews: 42,
    features: ['Stainless Steel', 'Laser Engraving', 'Unlimited Taps', 'Premium Finish'],
  },
  {
    id: 'card-wooden',
    name: 'Wooden NFC Business Card',
    category: 'Card',
    description: 'Elegant wooden NFC card for a natural and classy impression.',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop',
    rating: 4.8,
    reviews: 36,
    features: ['Natural Wood Finish', 'Custom Engraving', 'Eco-Friendly', 'NFC Enabled'],
  },
  {
    id: 'card-pvc',
    name: 'PVC NFC Business Card',
    category: 'Card',
    description: 'Durable and affordable NFC card for everyday networking.',
    price: '₹1,999',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1000&auto=format&fit=crop',
    rating: 4.7,
    reviews: 68,
    features: ['Lightweight', 'Full Color Print', 'Water Resistant', 'Unlimited Taps'],
  },
  {
    id: 'card-synconnect',
    name: 'SynConnect Branding Card',
    category: 'Card',
    description: 'Budget-friendly NFC card with SynConnect branding.',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1593032465171-8c5f1f1b0c15?q=80&w=1000&auto=format&fit=crop',
    rating: 4.6,
    reviews: 104,
    features: ['Affordable', 'NFC Enabled', 'Quick Setup', 'Best for Teams'],
  },

  // =========================
  // REVIEW STANDS
  // =========================
  {
    id: 'stand-wooden',
    name: 'Wooden NFC Review Stand',
    category: 'Stand',
    description: 'Premium wooden counter stand to collect Google reviews easily.',
    price: '₹2,000',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000&auto=format&fit=crop',
    rating: 4.8,
    reviews: 55,
    features: ['Premium Wood Build', 'QR + NFC', 'Custom Logo', 'Counter Display'],
  },
  {
    id: 'stand-all-in-one',
    name: 'All-in-One Custom Review Stand',
    category: 'Stand',
    description: 'Fully customized stand designed to increase Google reviews.',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop',
    rating: 4.9,
    reviews: 73,
    features: ['Custom Branding', 'QR Optimized', 'NFC Enabled', 'Counter Display'],
  },
  {
    id: 'stand-google',
    name: 'Google Review Stand',
    category: 'Stand',
    description: 'Modern acrylic Google review stand for reception and billing desks.',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1556740734-754f1ef9228d?q=80&w=1000&auto=format&fit=crop',
    rating: 4.7,
    reviews: 64,
    features: ['Premium Acrylic', 'Google Review Direct Link', 'QR + NFC', 'Compact Design'],
  },
  {
    id: 'stand-bundle-card',
    name: 'Direct Review Bundle Card',
    category: 'Stand',
    description: 'Portable review card bundle for easy review collection.',
    price: '₹700',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1000&auto=format&fit=crop',
    rating: 4.6,
    reviews: 88,
    features: ['Pocket Size', 'NFC + QR', 'Affordable', 'Easy Setup'],
  },
  {
    id: 'stand-sticker',
    name: 'Direct Review Stickers (NFC + QR)',
    category: 'Stand',
    description: 'Stick it anywhere and start collecting reviews instantly.',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1587614295999-6c1c3f1a9f96?q=80&w=1000&auto=format&fit=crop',
    rating: 4.5,
    reviews: 97,
    features: ['Peel & Stick', 'NFC + QR', 'Waterproof', 'Budget Friendly'],
  },
];

export default function ShopPage() {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useShopStore();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' ||
      (selectedCategory === 'Cards' && product.category === 'Card') ||
      (selectedCategory === 'Stands' && product.category === 'Stand');
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
console.log(selectedCategory);

  console.log(filteredProducts);
  

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Header Section */}
        <section className="relative py-16 lg:py-24 px-6 lg:px-8 border-b border-white/5 bg-white/2">
          <div className="mx-auto max-w-site">
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-2 overflow-x-auto pb-4 sm:pb-0 w-full lg:w-auto scrollbar-hide">
                {['All Products', 'Cards', 'Stands'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 px-6 py-2.5 rounded-full border ${
                      selectedCategory === cat
                        ? 'bg-primary text-black border-primary'
                        : 'bg-white/5 text-white/60 border-white/10 hover:text-primary hover:border-primary'
                    } text-xs lg:text-sm font-bold transition-all whitespace-nowrap`}
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-site">
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={product.id}
                    whileHover={{ y: -4 }}
                    className="group relative flex flex-col bg-white/2 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden shadow-lg"
                  >
                  {/* Image Part (Top) */}
                  <div className="relative w-full aspect-square sm:aspect-4/3 overflow-hidden bg-black/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-primary">
                          {product.category}
                        </span>
                    </div>
                  </div>

                  {/* Content Part (Bottom) */}
                  <div className="p-3 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                       <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary fill-primary" />
                       <span className="text-[10px] sm:text-xs font-bold text-zinc-300">
                         {product.rating}
                       </span>
                       <span className="text-zinc-500 text-[8px] sm:text-[10px] font-medium hidden sm:inline-block">
                         ({product.reviews})
                       </span>
                    </div>
                    
                    <h3 className="text-[13px] sm:text-lg font-bold mb-1 text-white line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-400 mb-3 sm:mb-4 line-clamp-2 hidden sm:block">
                      {product.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-2.5 sm:pt-4">
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[10px] font-medium text-zinc-500 uppercase tracking-widest hidden sm:block">Base Price</span>
                        <span className="text-sm sm:text-lg font-bold text-white tracking-tight">{product.price}</span>
                      </div>
                      <Link
                        href={`/shop/${product.id}`}
                        className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all group-hover:rotate-0 -rotate-45"
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
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
