'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/SiteFooter';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const CART_ITEMS = [
  {
    id: 'card-pro',
    name: 'SynConnect Pro Card',
    price: 2999,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200',
  },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-black italic mb-4 tracking-tight">
              YOUR CART
            </h1>
            <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
              {CART_ITEMS.length} Items Selected
            </p>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {CART_ITEMS.length > 0 ? (
                CART_ITEMS.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 sm:p-8 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col sm:flex-row gap-8 items-center"
                  >
                    <div className="h-32 w-32 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-xl sm:text-2xl font-black italic mb-2 tracking-tight">
                        {item.name}
                      </h2>
                      <p className="text-primary font-bold text-lg mb-6">
                        ₹{item.price.toLocaleString()}
                      </p>

                      <div className="flex items-center justify-center sm:justify-start gap-6">
                        <div className="flex items-center gap-4 bg-black/40 px-4 py-2 rounded-full border border-white/10">
                          <button className="hover:text-primary transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button className="hover:text-primary transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button className="p-3 rounded-full hover:bg-white/5 text-white/40 hover:text-red-500 transition-all">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right hidden sm:block">
                      <p className="text-2xl font-black italic">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-24 p-8 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                  <ShoppingBag className="w-16 h-16 text-white/10 mx-auto mb-6" />
                  <p className="text-2xl font-bold italic text-white/20 mb-8">
                    Your cart is empty
                  </p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-3 bg-primary text-black px-10 py-5 rounded-full font-black text-xl italic hover:scale-105 transition-all"
                  >
                    Go Shopping <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right: Summary */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="p-8 sm:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl space-y-8 shadow-2xl">
                <h3 className="text-xl font-black italic border-b border-white/10 pb-6 uppercase tracking-wider">
                  Order Total
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-white/40">Subtotal</span>
                    <span className="font-bold">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-white/40">Shipping</span>
                    <span className="text-primary font-black uppercase text-[10px] tracking-widest italic">
                      Calculated at Checkout
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-2xl font-black italic pt-6 border-t border-white/10">
                    <span>Estimate</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="group w-full flex items-center justify-center gap-3 bg-primary text-black py-6 rounded-full font-black text-xl italic hover:scale-105 transition-all shadow-[0_0_40px_rgba(190,238,2,0.3)]"
                >
                  Checkout
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/20 pt-4 italic">
                  Taxes & Shipping calculated next
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
