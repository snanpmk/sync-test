import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Analytics, HowItWorks } from '@/components/InfoSections';
import { SocialProof, Trust, Footer } from '@/components/SiteFooter';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <Problem />

        {/* Solutions Intro */}
        <section className="py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              One Platform. <br className="lg:hidden" />
              Two Powerful Products.
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/60 mb-12">
              Whether you're a professional looking to stand out or a business
              owner aiming to grow reviews, SynConnect gives you the tools to
              win.
            </p>
          </div>
        </section>

        <ProductShowcase />
        <Analytics />
        <HowItWorks />
        <SocialProof />
        <Trust />

        {/* Final CTA */}
        <section className="py-24 lg:py-48 relative overflow-hidden bg-black">
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 h-1/2" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary rounded-full blur-[150px] opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-8">
              Ready to Upgrade Your <br />
              Networking?
            </h2>
            <p className="mx-auto max-w-xl text-xl text-white/60 mb-12">
              Stop printing paper cards. Start building your digital presence
              with SynConnect today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/shop/card"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-bold text-black transition-all hover:scale-105"
              >
                Get My Digital Card
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/shop/stand"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-xl font-bold text-white transition-all hover:bg-white/10"
              >
                Boost My Reviews
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
