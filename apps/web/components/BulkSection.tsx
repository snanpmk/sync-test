'use client';

import { motion } from 'framer-motion';
import { Building2, Users2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ENTERPRISE_EMPLOYEES } from '@/lib/constants';

export const BulkSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-black relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="relative mx-auto max-w-site px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              For Enterprises
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 italic tracking-tight">
              Scale Your <span className="text-primary">Team</span> <br />
              Effortlessly.
            </h2>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed font-medium mb-12">
              Managing hundreds of employees? Our enterprise dashboard allows you to provision, update, and monitor cards for your entire organization in seconds. Bulk pricing and custom corporate branding available.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12 text-left">
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-4 group-hover:bg-primary group-hover:text-black transition-all">
                  <Users2 className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-2">Centralized Sync</h4>
                <p className="text-white/40 text-sm italic">Update 100+ profiles with one click from our central admin panel.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-4 group-hover:bg-primary group-hover:text-black transition-all">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-2">Corporate Branding</h4>
                <p className="text-white/40 text-sm italic">Custom logo engraving and UV printing to match your brand identity.</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white text-black px-10 py-5 text-xl font-black transition-all hover:scale-105"
            >
              Request Bulk Quote <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group lg:mt-0 mt-12"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative rounded-[40px] border border-white/10 bg-[#111111] p-8 lg:p-12 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-12">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-black tracking-widest text-white/20 uppercase italic">Organization Panel</div>
              </div>

              <div className="space-y-6">
                {ENTERPRISE_EMPLOYEES.map((emp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10" />
                      <div>
                        <div className="text-white font-bold text-sm">{emp.name}</div>
                        <div className="text-white/30 text-[10px] font-medium uppercase tracking-wider">{emp.role}</div>
                      </div>
                    </div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${emp.color}`}>{emp.status}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                 <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Showing 4 of 248 Employees</div>
                 <div className="w-6 h-6 rounded-full bg-white group-hover:scale-125 transition-transform flex items-center justify-center">
                    <Zap className="w-3 h-3 text-black fill-black" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

