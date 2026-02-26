'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Do I need an app to use SynConnect?",
    answer: "No. SynConnect works natively with NFC-enabled smartphones. When someone taps your card or stand, your profile or review link opens directly in their default web browser (Safari, Chrome, etc.)."
  },
  {
    question: "Which phones are compatible?",
    answer: "Most iPhones (iPhone 7 and newer) and almost all Android devices released in the last 8-10 years have NFC capabilities. For older devices, you can always use the QR code printed on your card or stand."
  },
  {
    question: "Can I change my info after buying?",
    answer: "Absolutely. You can update your contact details, social links, and documents as many times as you want through your SynConnect dashboard. The changes are instant and reflected on your card immediately."
  },
  {
    question: "Is there a monthly subscription?",
    answer: "We offer a one-time purchase for the hardware. Basic profile hosting and analytics are included for free. Advanced professional features and team management tools are available through an optional premium subscription."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. Your data is encrypted and hosted on secure servers. You have complete control over what information you choose to share publicly on your profile."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-40 bg-black relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-site px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              Support
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 italic tracking-tight">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed font-medium mb-12">
              Everything you need to know about the future of networking and reputation management. Can't find an answer? Contact our 24/7 support.
            </p>
            <div className="p-8 rounded-[32px] bg-white/2 border border-white/10 mb-12 lg:mb-0">
              <p className="text-white font-bold mb-4">Still have questions?</p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:gap-3 transition-all"
              >
                Chat with our team ↗
              </a>
            </div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-[24px] border transition-all duration-300 ${
                  openIndex === i 
                    ? 'bg-white/4 border-primary/30 shadow-[0_0_30px_rgba(190,238,2,0.05)]' 
                    : 'bg-white/2 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left outline-none"
                >
                  <span className="text-lg lg:text-xl font-bold text-white tracking-tight">{faq.question}</span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === i ? 'bg-primary text-black scale-110' : 'bg-white/5 text-white/50'
                  }`}>
                    {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 lg:p-8 pt-0 text-white/60 leading-relaxed text-base lg:text-lg italic">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
