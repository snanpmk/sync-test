'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/SiteFooter';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-24 pt-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 italic"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto italic"
            >
              Our team is here to help you revolutionize your professional
              networking or business growth. Optimized for instant response.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8"
            >
              {[
                { title: 'Email Us', info: 'hello@synconnect.com', icon: Mail },
                { title: 'Call Support', info: '+91 98765 43210', icon: Phone },
                {
                  title: 'Visit HQ',
                  info: 'Cyber Hub, Gurugram, India',
                  icon: MapPin,
                },
                {
                  title: 'Bulk Inquiry',
                  info: 'sales@synconnect.com',
                  icon: MessageSquare,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-6 p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all group shadow-xl"
                >
                  <div className="shrink-0 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-primary text-black transition-transform group-hover:scale-110">
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-white/40 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-lg lg:text-xl font-black italic">
                      {item.info}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 shadow-2xl"
            >
              <h3 className="text-2xl lg:text-3xl font-black mb-10 italic">
                Send a Message
              </h3>
              <div className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all placeholder:text-white/20 font-medium"
                />
                <textarea
                  placeholder="How can we help?"
                  rows={5}
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none resize-none transition-all placeholder:text-white/20 font-medium"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-black py-6 rounded-2xl lg:rounded-3xl font-black text-xl lg:text-2xl italic shadow-[0_0_30px_rgba(190,238,2,0.3)]"
                >
                  Send Inquiry
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
