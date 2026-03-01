import { ArrowRight, CreditCard } from 'lucide-react';
import Link from 'next/link';

export const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-48 relative overflow-hidden bg-black border-t border-white/5">
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 h-1/2" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary rounded-full blur-[150px] opacity-10" />
      
      <div className="relative mx-auto max-w-site px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 italic tracking-tighter leading-[0.9]">
          Start Networking <br className="hidden md:block" />
          Smarter Today.
        </h2>
        <p className="mx-auto max-w-2xl text-xl lg:text-2xl text-white/50 mb-16 font-medium">
          One tap to share your profile. One tap to collect a 5-star Google review.
          Stop printing paper cards — start building a digital presence that works for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link
            href="/shop"
            aria-label="Shop digital cards and review stands"
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-primary px-12 py-6 text-2xl font-black text-black transition-all hover:scale-105 shadow-[0_0_50px_rgba(190,238,2,0.2)]"
          >
            <CreditCard className="w-7 h-7" />
            Shop Cards & Stands
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/features"
            aria-label="See all features of SynConnect"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-12 py-6 text-2xl font-black text-white transition-all hover:bg-white/10"
          >
            See All Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export const OnePlatformSection = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-site px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-5 italic tracking-tighter">
          One Platform. <br className="lg:hidden" />
          Two Powerful Products.
        </h2>
        <p className="mx-auto max-w-2xl text-xl lg:text-2xl text-white/50 font-medium leading-relaxed">
          Whether you're a professional looking to stand out or a business
          owner aiming to grow reviews, SynConnect gives you the tools to
          win.
        </p>
      </div>
    </section>
  );
};
