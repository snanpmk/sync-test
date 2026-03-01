
'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/SiteFooter';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[100px] rounded-full translate-y-1/2 pointer-events-none" />

        <div className="relative mx-auto max-w-site">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Heading & Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest">
                  Connect With Us
                </div>
                <h2 className="text-5xl lg:text-7xl font-black italic leading-[0.9] tracking-tighter">
                  Let's <br />
                  <span className="text-primary italic">Sync</span> Up.
                </h2>
                <p className="text-lg lg:text-xl text-white/40 font-medium leading-relaxed max-w-md italic">
                  Have a question or want to scale your team? Our experts are ready to assist you.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
              >
                {[
                  { title: 'Email Us', info: 'hello@synconnect.com', icon: Mail, subtitle: '24/7 Response' },
                  { title: 'Call Support', info: '+91 98765 43210', icon: Phone, subtitle: 'Mon - Fri, 9am - 6pm' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-6 p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/40 transition-all group"
                  >
                    <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-black transition-transform group-hover:rotate-12">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-lg font-black italic text-white group-hover:text-primary transition-colors">
                        {item.info}
                      </p>
                      <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-1 italic">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-brand-dark border border-white/10 rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
              
              <h3 className="text-3xl font-black mb-10 italic uppercase tracking-tight">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                    <input
                      type="text"
                      placeholder="Alex Rodriguez"
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:border-primary/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10 font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:border-primary/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10 font-bold"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:border-primary/50 focus:bg-white/[0.03] outline-none transition-all placeholder:text-white/10 font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Your Message</label>
                  <textarea
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:border-primary/50 focus:bg-white/[0.03] outline-none resize-none transition-all placeholder:text-white/10 font-bold"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-black py-6 rounded-2xl lg:rounded-[2rem] font-black text-xl italic shadow-[0_20px_40px_rgba(190,238,2,0.15)] flex items-center justify-center gap-3 group"
                >
                  Send Inquiry 
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
}
