'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/SiteFooter';
import { Lock, ArrowRight, ShieldCheck, CreditCard, Truck } from 'lucide-react';
import Link from 'next/link';

const PRODUCT = {
  name: 'SynConnect Pro Card',
  price: 2999,
  image:
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200',
};

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const shipping = 0;
  const total = PRODUCT.price + shipping;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-black italic mb-4 tracking-tight">
              SECURE CHECKOUT
            </h1>
            <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span>SSL Encrypted Connection</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Forms */}
            <div className="lg:col-span-7 space-y-8">
              {/* Shipping Section */}
              <section className="p-8 lg:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black italic">
                    Shipping Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Section (Mock) */}
              <section className="p-8 lg:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl opacity-50 grayscale pointer-events-none">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white/40">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black italic">
                    Payment Method
                  </h2>
                </div>
                <p className="text-sm font-medium italic text-white/40">
                  Enter shipping info to unlock payment.
                </p>
              </section>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="p-8 lg:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl space-y-8 shadow-2xl">
                <h3 className="text-xl font-black italic border-b border-white/10 pb-6">
                  Order Summary
                </h3>

                <div className="flex gap-6">
                  <div className="h-24 w-24 rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src={PRODUCT.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black italic text-lg">{PRODUCT.name}</p>
                    <p className="text-primary font-bold">
                      ₹{PRODUCT.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-white/40 font-medium mt-1 italic">
                      Qty: 1
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-white/40">Subtotal</span>
                    <span>₹{PRODUCT.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-white/40">Shipping</span>
                    <span className="text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-black italic pt-4">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/order-success"
                  className="group w-full flex items-center justify-center gap-3 bg-primary text-black py-6 rounded-full font-black text-xl italic hover:scale-105 transition-all shadow-[0_0_40px_rgba(190,238,2,0.3)]"
                >
                  Complete Order
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center justify-center gap-3 pt-4">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Satisfaction Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
