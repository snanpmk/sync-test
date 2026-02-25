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
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center text-zinc-500 font-bold animate-pulse">
          INITIALIZING SECURE PORTAL...
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
  const totalSteps = type === 'card' ? 3 : 4;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-primary selection:text-black font-sans scroll-smooth">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8 lg:mb-12 relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#A3E635]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>

          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className={`p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all backdrop-blur-md ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <ArrowLeft className="w-5 h-5 text-zinc-400" />
            </motion.button>
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">
              Step {step} of {totalSteps}
            </span>
            <div className="w-10 h-10" />
          </div>

          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${type}-${step}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
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
        <div className="text-center py-10 lg:py-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mx-auto h-24 w-24 bg-white/[0.02] border border-white/[0.05] rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-primary/10 opacity-50 blur-xl"></div>
            <CreditCard className="w-10 h-10 text-primary relative z-10" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Activate Your Network
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-10 text-base leading-relaxed">
            Let&apos;s build your unified digital identity. This process takes less than two minutes.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={nextStep}
            className="group inline-flex items-center gap-2.5 bg-primary text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-[0_4px_20px_rgba(190,238,2,0.2)] hover:shadow-[0_4px_25px_rgba(190,238,2,0.3)]"
          >
            Start Setup
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Identity & Contact
          </h2>
          <p className="text-zinc-400 mb-8 text-sm">
            Core details to ensure your connections know exactly who you are.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 mb-8 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] ring-1 ring-white/5 backdrop-blur-md">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-20 w-20 shrink-0 rounded-[1.2rem] bg-zinc-900 border border-white/10 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all text-zinc-500 hover:text-white cursor-pointer shadow-lg"
              >
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  Photo
                </span>
              </motion.div>
              <div>
                <p className="font-semibold text-zinc-200 mb-1">
                  Profile Picture
                </p>
                <p className="text-xs text-zinc-500 max-w-[200px] leading-relaxed">
                  High quality, square aspect ratio works best.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-1.5 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Alex Rodriguez"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-1.5 ml-1">Job Title</label>
                <input
                  type="text"
                  placeholder="Creative Director"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-1.5 ml-1">Company Name</label>
                <input
                  type="text"
                  placeholder="SynConnect Studios"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-1.5 ml-1">Short Bio</label>
                <textarea
                  placeholder="Helping brands scale their digital products with high-end design systems..."
                  rows={3}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-400 mb-1.5 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-400 mb-1.5 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="alex@synconnect.me"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              className="w-full mt-4 bg-primary text-black py-4 rounded-2xl font-semibold text-lg transition-all shadow-[0_4px_20px_rgba(190,238,2,0.15)] hover:shadow-[0_4px_25px_rgba(190,238,2,0.25)]"
            >
              Continue
            </motion.button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Aesthetics
          </h2>
          <p className="text-zinc-400 mb-10 text-sm">
            Select the baseline vibe that fits your brand. You can fully customize later.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[3/4] sm:aspect-square rounded-3xl border-2 border-primary bg-[#09090B] overflow-hidden flex flex-col items-center justify-center group cursor-pointer shadow-2xl p-4"
            >
              <div className="absolute top-4 right-4 h-5 w-5 rounded-full bg-primary flex items-center justify-center shadow-lg z-10">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
              </div>

              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[1rem] bg-zinc-800 ring-1 ring-white/10 mb-3" />
              <div className="h-2 w-16 bg-white/20 rounded-full mb-1.5" />
              <div className="h-1.5 w-10 bg-zinc-600 rounded-full mb-4" />

              <div className="w-full h-8 rounded-xl bg-primary/20 border border-primary/30 mt-auto" />

              <span className="absolute bottom-4 font-bold text-[10px] sm:text-xs text-white uppercase tracking-widest drop-shadow-md">
                Dark & Lime
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[3/4] sm:aspect-square rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden flex flex-col items-center justify-center group cursor-pointer opacity-50 shadow-sm p-4 hover:opacity-80 transition-opacity"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-[1rem] bg-zinc-200 border border-zinc-300 mb-3" />
              <div className="h-2 w-16 bg-zinc-300 rounded-full mb-1.5" />
              <div className="h-1.5 w-10 bg-zinc-200 rounded-full mb-4" />

              <div className="w-full h-8 rounded-xl bg-zinc-200 border border-zinc-300 mt-auto" />

              <span className="absolute bottom-4 font-bold text-[10px] sm:text-xs text-black uppercase tracking-widest drop-shadow-md">
                Minimal Light
              </span>
            </motion.div>
          </div>

          <Link
            href="/profile/1"
            className="group w-full flex items-center justify-center gap-3 bg-primary text-black py-4 rounded-2xl font-semibold text-lg hover:bg-[#a5d002] transition-colors shadow-[0_4px_20px_rgba(190,238,2,0.2)]"
          >
            Launch Profile
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        <div className="text-center py-10 lg:py-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mx-auto h-24 w-24 bg-white/[0.02] border border-white/[0.05] rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-primary/10 opacity-50 blur-xl"></div>
            <Store className="w-10 h-10 text-primary relative z-10" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Initialize Stand
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-10 text-base leading-relaxed">
            Configure your physical touchpoint to capture leads or drive 5-star reviews seamlessly.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={nextStep}
            className="group inline-flex items-center gap-2.5 bg-primary text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-[0_4px_20px_rgba(190,238,2,0.2)] hover:shadow-[0_4px_25px_rgba(190,238,2,0.3)]"
          >
            Setup Device
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Business Registry
          </h2>
          <p className="text-zinc-400 mb-8 text-sm">
            Provide the basic metadata tied to this physical stand.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 mb-8 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] ring-1 ring-white/5 backdrop-blur-md">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-20 w-20 shrink-0 rounded-[1.2rem] bg-zinc-900 border border-white/10 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all text-zinc-500 hover:text-white cursor-pointer shadow-lg"
              >
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  Logo
                </span>
              </motion.div>
              <div>
                <p className="font-semibold text-zinc-200 mb-1">
                  Brand Logo
                </p>
                <p className="text-xs text-zinc-500 max-w-[200px] leading-relaxed uppercase tracking-wider font-medium">
                  SVG OR HIGH-RES PNG
                </p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Business Legal Name"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative border border-white/[0.08] rounded-2xl bg-white/[0.03] overflow-hidden focus-within:border-white/20 transition-colors">
                <select className="w-full bg-transparent p-4 outline-none appearance-none cursor-pointer font-medium text-zinc-300 relative z-10">
                  <option className="bg-zinc-900 text-white">Select Industry</option>
                  <option className="bg-zinc-900 text-white">Salon & Spa</option>
                  <option className="bg-zinc-900 text-white">Restaurant & Cafe</option>
                  <option className="bg-zinc-900 text-white">Retail Store</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                  <Palette className="w-4 h-4" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Support/Contact Number"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 focus:bg-white/[0.05] focus:border-white/20 outline-none transition-all placeholder:text-zinc-600 font-medium text-white"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={nextStep}
              className="w-full mt-4 bg-primary text-black py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg"
            >
              Continue
            </motion.button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Link Destination
          </h2>
          <p className="text-zinc-400 mb-8 text-sm">
            Where should customers land when they tap this stand?
          </p>

          <div className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] space-y-6 shadow-sm ring-1 ring-white/5 relative overflow-hidden">
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Google Reviews Link</p>
                <p className="text-xs text-zinc-500">Most popular for physical stands</p>
              </div>
            </div>

            <input
              type="text"
              placeholder="https://g.page/r/your-id/review"
              className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-primary outline-none transition-all shadow-inner text-white placeholder:text-zinc-600"
            />

            <div className="p-4 rounded-xl border border-white/5 bg-black/40 text-xs flex items-center gap-3">
              <Eye className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-400 font-semibold">
                This link will bypass browser prompts directly to the review pop-up.
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={nextStep}
            className="w-full mt-8 bg-white text-black py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg"
          >
            Review Simulation
          </motion.button>
        </div>
      );
    case 4:
      return (
        <div className="w-full text-center pb-4">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Experience Preview
          </h2>
          <p className="text-zinc-400 mb-10 text-sm">
            This is precisely what your customers will see upon tapping via smartphone.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative mx-auto w-64 aspect-[9/18] bg-[#09090B] border-[6px] border-zinc-800 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden mb-12 ring-1 ring-white/10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-zinc-800 rounded-b-xl z-20" />

            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />

            <div className="mt-20 flex flex-col items-center">
              <div
                className="h-16 w-16 bg-white/[0.05] border border-white/10 rounded-[1rem] flex items-center justify-center mb-6 shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
                <Star className="w-8 h-8 text-primary relative z-10" />
              </div>
              <p className="font-bold text-base text-white mb-2 tracking-tight">
                Rate Our Service
              </p>
              <div className="flex gap-1.5 mb-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-6" />

              <div className="w-full space-y-3">
                <div className="w-full h-8 bg-white/[0.05] rounded-xl border border-white/[0.05]"></div>
                <div className="w-full h-8 bg-white/[0.05] rounded-xl border border-white/[0.05]"></div>
              </div>
            </div>
          </motion.div>

          <Link
            href="/business/1"
            className="group w-full flex items-center justify-center gap-3 bg-primary text-black py-4 rounded-2xl font-semibold text-lg hover:bg-[#a5d002] transition-colors shadow-[0_4px_20px_rgba(190,238,2,0.2)]"
          >
            Finish Setup
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      );
    default:
      return null;
  }
};
