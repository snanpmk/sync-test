'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrderSchema } from '@synconnect/schema';
import { products } from '@synconnect/schema';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/SiteFooter';
import { Lock, ArrowRight, ShieldCheck, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  // Find the product from the URL param, fallback to first product
  const product = products.find((p) => p.id === productId) || products[0];

  const [otpSent, setOtpSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '']);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      userId: 'mock-user-id',
      items: [
        {
          productId: product.id,
          productName: product.name,
          quantity: 1,
          price: product.price,
        },
      ],
      totalAmount: product.price,
      status: 'pending' as const,
      purchasePath: 'direct' as const,
      shippingAddress: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pinCode: '',
      },
    },
  });

  const emailValue = watch('shippingAddress.email');

  const handleSendOtp = () => {
    if (!emailValue || errors.shippingAddress?.email) return;
    setIsVerifying(true);
    setTimeout(() => {
      setOtpSent(true);
      setIsVerifying(false);
    }, 1500);
  };

  const handleOtpInput = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);

    if (newOtp.join('').length === 4) {
      if (newOtp.join('') === '1234') {
        setIsVerified(true);
      }
    }

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const onSubmit = (data: any) => {
    if (!isVerified) return;
    console.log('Order submitted:', data);
    setTimeout(() => {
      router.push('/order-success');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black italic mb-2 sm:mb-4 tracking-tight">
              SECURE <span className="text-primary">CHECKOUT</span>
            </h1>
            <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span>SSL 256-BIT ENCRYPTED</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Forms */}
            <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-7 space-y-10">
              {/* Identity & Verification Section */}
              <section className="p-6 sm:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black italic">Identity Verification</h2>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Secure Your Order</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      {...register('shippingAddress.email')}
                      type="email"
                      disabled={otpSent}
                      placeholder="Email Address"
                      className={`w-full bg-white/5 border ${errors.shippingAddress?.email ? 'border-red-500' : 'border-white/10'} rounded-2xl py-5 pl-5 sm:py-6 sm:pl-6 pr-[140px] sm:pr-[160px] focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold text-base sm:text-lg disabled:opacity-50`}
                    />
                    {!otpSent && (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={!emailValue || !!errors.shippingAddress?.email || isVerifying}
                        className="absolute right-3 top-3 bottom-3 px-6 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-0 disabled:pointer-events-none"
                      >
                        {isVerifying ? 'Sending...' : 'Verify Email'}
                      </button>
                    )}
                    {isVerified && (
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-primary font-black italic text-xs uppercase">
                        <CheckCircle2 className="w-5 h-5" />
                        Verified
                      </div>
                    )}
                  </div>

                  {otpSent && !isVerified && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-bold text-primary/80 italic">Enter the 4-digit code sent to your email (Mock: 1234)</p>
                        <button onClick={() => setOtpSent(false)} className="text-[10px] font-black uppercase text-white/40 hover:text-white transition-colors">Change Email</button>
                      </div>
                      <div className="flex gap-2 sm:gap-4 justify-center">
                        {otpCode.map((digit, i) => (
                          <input
                            key={i}
                            id={`otp-${i}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpInput(i, e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !digit && i > 0) {
                                document.getElementById(`otp-${i - 1}`)?.focus();
                              }
                            }}
                            className="w-12 h-16 sm:w-16 sm:h-20 bg-white/5 border border-white/10 rounded-2xl text-center text-2xl sm:text-3xl font-black text-primary focus:border-primary focus:bg-primary/5 outline-none transition-all"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </section>

              {/* Shipping Section */}
              <section className={`p-6 sm:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all ${!isVerified ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Truck className="w-6 h-6 text-white/40" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black italic text-white/80">Shipping Destination</h2>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Where should we ship?</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      {...register('shippingAddress.name')}
                      placeholder="Recipient Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold"
                    />
                    <input
                      {...register('shippingAddress.phone')}
                      placeholder="Contact Number"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold"
                    />
                  </div>
                  <input
                    {...register('shippingAddress.address')}
                    placeholder="Residential / Office Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    <input
                      {...register('shippingAddress.city')}
                      placeholder="City"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold"
                    />
                    <input
                      {...register('shippingAddress.state')}
                      placeholder="State"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold"
                    />
                    <input
                      {...register('shippingAddress.pinCode')}
                      placeholder="PIN Code"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-bold col-span-2 sm:col-span-1"
                    />
                  </div>
                </div>
              </section>

              <button
                type="submit"
                disabled={!isVerified}
                className="group w-full flex flex-col items-center justify-center gap-1 bg-primary text-black py-8 rounded-[2rem] font-black text-2xl italic hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(190,238,2,0.2)] disabled:opacity-20 disabled:grayscale disabled:scale-100 disabled:pointer-events-none"
              >
                <span className="flex items-center gap-2 sm:gap-3 px-4 text-center">
                  <span className="text-xl sm:text-2xl">COMPLETE SECURE ORDER</span>
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform duration-500 shrink-0" />
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Instant Confirmation via Email</span>
              </button>
            </form>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="p-8 lg:p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl space-y-8 shadow-2xl">
                <h3 className="text-xl font-black italic border-b border-white/10 pb-6">
                  Order Summary
                </h3>

                {/* Single product summary */}
                <div className="flex gap-4 sm:gap-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border border-white/10 bg-black shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-black italic text-base">{product.name}</p>
                    <p className="text-primary font-bold text-sm mt-1">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-white/40 font-medium mt-1 italic">Qty: 1</p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-white/40">Subtotal</span>
                    <span>₹{product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-white/40">Shipping</span>
                    <span className="text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-black italic pt-4 border-t border-white/10">
                    <span>Total</span>
                    <span>₹{product.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4">
                  <CreditCard className="w-4 h-4 text-primary" />
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

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutForm />
    </Suspense>
  );
}
