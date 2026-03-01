import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Analytics } from '@/components/Analytics';
import { HowItWorks } from '@/components/HowItWorks';
import { SocialProof, Trust, Footer } from '@/components/SiteFooter';
import { FAQ } from '@/components/FAQ';
import { OnePlatformSection, FinalCTA } from '@/components/CTASections';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Problem />
        
        <OnePlatformSection />

        <ProductShowcase />
        <HowItWorks />
        
        <Analytics />
        <SocialProof />
        <FAQ />
        <Trust />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

