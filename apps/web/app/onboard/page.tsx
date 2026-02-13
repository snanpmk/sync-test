'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import {
  CreditCard,
  Store,
  ArrowRight,
  ArrowLeft,
  Camera,
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  CheckCircle2,
  Star,
  Eye,
  Palette,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function OnboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-primary font-black animate-pulse">
          INITIALIZING PORTAL...
        </div>
      }
    >
      <OnboardContent />
    </Suspense>
  );
}

function OnboardContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'card';
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-sans">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8 lg:mb-12 relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>

          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className={`p-2 rounded-full border border-white/10 hover:bg-white/5 transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <span className="text-white/40 font-black uppercase tracking-widest text-[10px] lg:text-xs">
              Step {step} of {totalSteps}
            </span>
            <div className="w-9 h-9" />
          </div>

          <div className="relative min-h-[500px] lg:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${type}-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {type === 'card' ? (
                  <CardOnboarding step={step} nextStep={nextStep} />
                ) : (
                  <StandOnboarding step={step} nextStep={nextStep} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- CARD ONBOARDING STEPS ---

const CardOnboarding = ({
  step,
  nextStep,
}: {
  step: number;
  nextStep: () => void;
}) => {
  switch (step) {
    case 1:
      return (
        <div className="text-center py-10 lg:py-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mx-auto h-20 w-20 lg:h-24 lg:w-24 bg-primary/10 rounded-full flex items-center justify-center mb-10 border border-primary/20 shadow-xl"
          >
            <CreditCard className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black mb-6 italic">
            Your Digital Card <br className="hidden sm:block" /> is Ready
          </h2>
          <p className="text-lg lg:text-2xl text-white/40 max-w-xl mx-auto mb-12 italic">
            "The first step towards your new digital presence."
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStep}
            className="group inline-flex items-center gap-3 bg-primary px-10 py-5 rounded-full text-black font-black text-xl lg:text-2xl transition-all shadow-[0_0_50px_rgba(190,238,2,0.3)]"
          >
            Start Setup
            <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      );
    case 2:
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Basic Identity Setup
          </h2>
          <p className="text-white/40 mb-10 italic">
            "First impressions define your success."
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 p-6 rounded-3xl bg-white/2 border border-white/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-24 w-24 shrink-0 rounded-full border-2 border-dashed border-white/20 flex flex-col items-center justify-center hover:border-primary cursor-pointer hover:bg-white/5 transition-all text-white/40 hover:text-primary shadow-xl"
              >
                <Camera className="w-8 h-8" />
                <span className="text-[10px] uppercase font-black tracking-widest mt-2">
                  Upload
                </span>
              </motion.div>
              <div className="text-center sm:text-left pt-2">
                <p className="font-black text-sm lg:text-lg mb-1 italic">
                  Professional Photo
                </p>
                <p className="text-xs lg:text-sm text-white/40 max-w-xs font-medium italic">
                  Upload a headshot. This is the first thing people see during a
                  tap.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
              />
              <input
                type="text"
                placeholder="Designation"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
            />

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl lg:text-2xl transition-all shadow-xl italic"
            >
              Continue
            </motion.button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Add Social Links
          </h2>
          <p className="text-white/40 mb-10 italic">
            "Connect your entire digital ecosystem."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {[
              {
                icon: Linkedin,
                label: 'LinkedIn',
                placeholder: 'linkedin.com/in/username',
              },
              { icon: Instagram, label: 'Instagram', placeholder: '@username' },
              { icon: Twitter, label: 'Twitter', placeholder: '@username' },
              {
                icon: Globe,
                label: 'Portfolio',
                placeholder: 'yourwebsite.com',
              },
            ].map((social, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(190,238,2,0.4)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 transition-all cursor-pointer group shadow-lg"
              >
                <social.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary mb-4" />
                <p className="font-black text-sm lg:text-lg mb-2 group-hover:text-primary transition-colors italic">
                  {social.label}
                </p>
                <input
                  type="text"
                  placeholder={social.placeholder}
                  className="w-full bg-transparent border-none p-0 text-xs lg:text-sm text-white/40 outline-none font-medium italic"
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={nextStep}
            className="w-full mt-10 bg-primary text-black py-5 rounded-[2rem] font-black text-xl lg:text-2xl transition-all shadow-xl italic"
          >
            Continue
          </motion.button>
        </div>
      );
    case 4:
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Services & Portfolio
          </h2>
          <p className="text-white/40 mb-10 italic">
            "Showcase what makes you unique."
          </p>

          <div className="space-y-6">
            <motion.div
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(190,238,2,0.3)',
              }}
              className="rounded-[2.5rem] border-2 border-dashed border-white/10 p-10 lg:p-16 text-center transition-all cursor-pointer group shadow-xl"
            >
              <div className="mx-auto h-12 w-12 lg:h-16 lg:w-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-primary/20">
                <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-white/60 group-hover:text-primary" />
              </div>
              <p className="font-black text-lg lg:text-2xl mb-2 text-white italic">
                Upload Portfolio or Work
              </p>
              <p className="text-xs lg:text-sm text-white/40 font-bold uppercase tracking-widest">
                PDF, JPG or PNG (Max 10MB)
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-lg">
                <p className="font-black italic text-xs uppercase tracking-widest mb-6 opacity-40">
                  Service Title
                </p>
                <input
                  type="text"
                  placeholder="e.g. Brand Strategy"
                  className="w-full bg-transparent border-b border-white/10 pb-2 text-base lg:text-lg outline-none focus:border-primary font-bold italic transition-colors"
                />
              </div>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-lg">
                <p className="font-black italic text-xs uppercase tracking-widest mb-6 opacity-40">
                  Investment
                </p>
                <input
                  type="text"
                  placeholder="₹ 10,000+"
                  className="w-full bg-transparent border-b border-white/10 pb-2 text-base lg:text-lg outline-none focus:border-primary font-bold italic transition-colors"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              className="w-full bg-white text-black py-5 rounded-[2rem] font-black text-xl lg:text-2xl transition-all italic shadow-xl"
            >
              Continue
            </motion.button>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Theme & Aesthetics
          </h2>
          <p className="text-white/40 mb-12 italic">
            "Express your brand identity through color."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-video sm:aspect-square rounded-[2rem] lg:rounded-[3rem] border-2 border-primary bg-white/5 overflow-hidden flex flex-col items-center justify-center group cursor-pointer shadow-2xl"
            >
              <div className="h-10 w-24 bg-primary rounded-lg mb-2 shadow-lg" />
              <div className="h-2 w-16 bg-white/20 rounded-full mb-1" />
              <div className="h-2 w-12 bg-white/10 rounded-full" />
              <div className="absolute top-6 right-6 h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-black" />
              </div>
              <span className="mt-4 font-black text-[10px] lg:text-xs uppercase tracking-widest italic">
                Essential Dark
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-video sm:aspect-square rounded-[2rem] lg:rounded-[3rem] border-2 border-white/5 bg-white/10 overflow-hidden flex flex-col items-center justify-center group cursor-pointer opacity-30 shadow-2xl"
            >
              <div className="h-10 w-24 bg-white/20 rounded-lg mb-2" />
              <div className="h-2 w-16 bg-white/20 rounded-full mb-1" />
              <div className="h-2 w-12 bg-white/10 rounded-full" />
              <span className="mt-4 font-black text-[10px] lg:text-xs uppercase tracking-widest italic">
                Silver Royale
              </span>
            </motion.div>
          </div>

          <Link
            href="/custdash"
            className="group w-full flex items-center justify-center gap-4 bg-primary text-black py-8 rounded-full font-black text-2xl lg:text-3xl italic hover:scale-105 transition-all shadow-[0_0_60px_rgba(190,238,2,0.4)]"
          >
            Activate My Card
            <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      );
    default:
      return null;
  }
};

// --- STAND ONBOARDING STEPS ---

const StandOnboarding = ({
  step,
  nextStep,
}: {
  step: number;
  nextStep: () => void;
}) => {
  switch (step) {
    case 1:
      return (
        <div className="text-center py-10 lg:py-20">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mx-auto h-20 w-20 lg:h-24 lg:w-24 bg-primary/10 rounded-full flex items-center justify-center mb-10 border border-primary/20 shadow-xl"
          >
            <Store className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black mb-6 italic uppercase leading-tight">
            Let's Collect <br /> 5-Star Reviews ⭐
          </h2>
          <p className="text-lg lg:text-2xl text-white/40 max-w-xl mx-auto mb-12 italic">
            "Dominate your local search results with unstoppable social proof."
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStep}
            className="group inline-flex items-center gap-3 bg-primary px-10 py-5 rounded-full text-black font-black text-xl lg:text-2xl transition-all shadow-[0_0_50px_rgba(190,238,2,0.3)]"
          >
            Setup My Stand
            <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      );
    case 2:
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Business Profile
          </h2>
          <p className="text-white/40 mb-10 italic">
            "First, let's identify your establishment."
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10 border border-white/10 p-8 rounded-[2rem] bg-white/[0.02] shadow-xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-20 w-20 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/10 hover:border-primary transition-all cursor-pointer text-white/40 hover:text-primary shadow-lg"
              >
                <Camera className="w-6 h-6" />
              </motion.div>
              <div className="text-center sm:text-left pt-2">
                <p className="font-black text-sm lg:text-lg mb-1 italic">
                  Brand Logo
                </p>
                <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
                  SVG or High-Res PNG
                </p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Business Legal Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none appearance-none cursor-pointer focus:border-primary transition-all font-medium text-white/60">
                  <option className="bg-black">Industry</option>
                  <option className="bg-black">Salon & Spa</option>
                  <option className="bg-black">Restaurant</option>
                  <option className="bg-black">Medical Clinic</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <Palette className="w-4 h-4" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Support Number"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl lg:text-2xl transition-all italic shadow-xl"
            >
              Continue
            </motion.button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Google Review Synergy
          </h2>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 mb-10"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <p className="text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest">
              Critical Connection Required
            </p>
          </motion.div>

          <div className="p-8 lg:p-12 rounded-[2.5rem] border border-primary/20 bg-primary/[0.03] space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-primary text-black mb-6 shadow-xl"
            >
              <Star className="w-6 h-6 lg:w-8 lg:h-8 fill-black" />
            </motion.div>
            <p className="text-white/80 font-black text-base lg:text-xl lg:leading-relaxed italic">
              Paste your Google Maps Review link below. We'll optimize the tap
              experience to bypass any friction.
            </p>
            <input
              type="text"
              placeholder="https://g.page/r/your-id/review"
              className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 font-mono text-sm focus:border-primary outline-none transition-all shadow-inner"
            />

            <div className="p-4 rounded-xl border border-white/5 bg-black/40 text-[10px] lg:text-xs flex items-center gap-3">
              <Eye className="w-4 h-4 text-white/40" />
              <span className="text-white/40 font-bold uppercase tracking-widest">
                Real-time Preview Enabled
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={nextStep}
            className="w-full mt-10 bg-primary text-black py-5 rounded-[2rem] font-black text-xl lg:text-2xl transition-all shadow-xl italic"
          >
            Sync & Continue
          </motion.button>
        </div>
      );
    case 4:
      return (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Client Incentives
          </h2>
          <p className="text-white/40 mb-10 italic">
            "Increase retention with targeted rewards."
          </p>

          <div className="space-y-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-xl">
              <p className="text-white/40 text-[10px] lg:text-xs font-black uppercase tracking-widest mb-4">
                Post-Review Reward Message
              </p>
              <input
                type="text"
                placeholder="e.g. 10% Discount Code: STARS10"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all placeholder:text-white/10 font-bold italic text-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 border border-primary/40 rounded-[2.5rem] bg-white/[0.03] cursor-pointer shadow-xl"
              >
                <p className="text-[10px] font-black mb-6 uppercase tracking-widest text-white/40">
                  Branding Base
                </p>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary shadow-lg ring-4 ring-primary/20" />
                  <div className="h-8 w-8 rounded-full bg-blue-500 opacity-20" />
                  <div className="h-8 w-8 rounded-full bg-zinc-500 opacity-20" />
                </div>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
                className="p-8 border border-white/10 rounded-[2.5rem] bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer hover:border-white/30 transition-all shadow-xl"
              >
                <Palette className="w-8 h-8 text-white/20 mb-3" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Advanced UI
                </span>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xl lg:text-2xl transition-all shadow-xl italic"
            >
              Proceed to Finalize
            </motion.button>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="max-w-2xl mx-auto text-center pb-12">
          <h2 className="text-2xl lg:text-4xl font-black mb-4 italic">
            Virtual Tap Simulation
          </h2>
          <p className="text-white/40 mb-12 italic">
            "Experience the journey precisely as your clients will."
          </p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative mx-auto w-64 lg:w-72 aspect-[9/19] bg-black border-[8px] border-white/10 rounded-[3rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden mb-16 border-t-white/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-white/10 rounded-b-2xl" />
            <div className="absolute inset-0 bg-linear-to-b from-primary/[0.03] to-transparent pointer-events-none" />

            <div className="mt-24 flex flex-col items-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-20 w-20 lg:h-24 lg:w-24 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-primary/20"
              >
                <Star className="w-10 h-10 lg:w-12 lg:h-12 text-primary fill-primary" />
              </motion.div>
              <p className="font-black text-center lg:text-xl mb-3 text-white italic tracking-tight">
                Leave a Review
              </p>
              <div className="flex gap-1.5 mb-14">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-primary fill-primary shadow-sm"
                  />
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full p-4 lg:p-5 rounded-2xl bg-primary text-black font-black text-xs lg:text-sm cursor-pointer shadow-xl shadow-primary/20 italic"
              >
                SUBMIT REVIEW
              </motion.div>
            </div>

            <div className="absolute top-12 right-6">
              <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin-slow opacity-20" />
            </div>
          </motion.div>

          <Link
            href="/custdash"
            className="group w-full flex items-center justify-center gap-4 bg-primary text-black py-8 rounded-full font-black text-2xl lg:text-3xl italic hover:scale-105 transition-all shadow-[0_0_60px_rgba(190,238,2,0.4)]"
          >
            🚀 Launch Dashboard
            <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      );
    default:
      return null;
  }
};
