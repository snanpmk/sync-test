'use client';

import { BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { AnimatedNumber } from './common/AnimatedNumber';
import { MOCK_ANALYTICS_STATS, MOCK_CHART_DATA } from '@/lib/constants';

export const Analytics = () => {
  return (
    <section className="relative py-24 lg:py-40 bg-black border-y border-white/5 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-site px-6 lg:px-8 text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            Live Dashboard Preview
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 italic tracking-tight">
            Track Every <span className="text-primary">Tap</span>. <br />
            Measure Every <span className="text-primary">Action</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-lg lg:text-xl text-white/60">
            See exactly how your digital identity performs with our intuitive analytics suite. Monitor views, link conversions, and interactions in real-time. View your insights easily anywhere on our mobile or desktop web app.
          </p>
        </motion.div>

        <div className="relative rounded-[40px] md:rounded-4xl border-12 md:border border-[#1f1f1f] md:border-white/10 bg-[#161616] shadow-[0_0_50px_rgba(190,238,2,0.15)] md:shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden text-left mx-auto max-w-[340px] sm:max-w-[400px] md:max-w-5xl h-[700px] md:h-auto z-20">
          {/* Mobile Top Notch Area */}
          <div className="md:hidden absolute top-0 inset-x-0 h-6 bg-[#1f1f1f] rounded-b-xl w-32 mx-auto z-30 flex items-center justify-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-black/50"></div>
             <div className="w-8 h-1.5 rounded-full bg-black/50"></div>
          </div>
          {/* Mobile Bottom Home Button */}
          <div className="md:hidden absolute bottom-2 inset-x-0 h-10 flex items-center justify-center z-30 pointer-events-none">
             <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-3 h-3 rounded-[4px] border border-white/10"></div>
             </div>
          </div>

          {/* OS Window Header */}
          <div className="hidden md:flex h-12 border-b border-white/5 bg-[#1f1f1f] items-center px-6 gap-2 w-full shadow-sm z-20 relative justify-between">
            <div className="flex-[0.5]" />
            <div className="flex-1 flex justify-center text-xs text-neutral-400 font-medium tracking-wide">
              synconnect.app/insights
            </div>
            <div className="flex-[0.5] flex justify-end gap-2">
               <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
               <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
               <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            </div>
          </div>
          
          <div className="flex flex-col h-full md:h-[550px] lg:h-[650px] w-full bg-[#161616] pt-8 pb-14 md:pt-0 md:pb-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex-1 pt-6 lg:pt-8 relative h-min md:h-full flex flex-col">
              <div className="flex items-center mb-6 lg:mb-10 px-6 lg:px-10 shrink-0">
                 <div className="flex items-center gap-3 lg:gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
                      alt="User Avatar" 
                      className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover shadow border border-white/10"
                    />
                    <div>
                       <h3 className="text-lg lg:text-2xl font-bold text-white mb-0.5 leading-tight">Good Morning, Alex</h3>
                       <p className="text-white/60 text-[10px] lg:text-sm leading-tight">Here's your card's performance.</p>
                    </div>
                 </div>
              </div>

              <div className="flex gap-6 w-full h-full px-6 lg:px-10 pb-6 lg:pb-10 overflow-hidden">
                 <div className="flex-1 flex flex-col min-w-0">
                    <div className="mb-4 md:mb-6 shrink-0">
                       <select 
                         className="sm:hidden w-full bg-[#222222] border border-white/10 text-white text-[10px] font-bold rounded-xl px-4 py-2 outline-none focus:border-primary appearance-none uppercase tracking-widest"
                         defaultValue="WEEKLY"
                       >
                         {['DAILY', 'WEEKLY', 'MONTHLY', '6 MONTHS'].map(period => (
                            <option key={period} value={period}>{period}</option>
                         ))}
                       </select>
                       
                       <div className="hidden sm:flex items-center bg-[#222222] rounded-full p-1 w-max border border-white/5 shadow-md">
                         {['DAILY', 'WEEKLY', 'MONTHLY', '6 MONTHS'].map((period) => (
                           <button key={period} className={`px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${period === 'WEEKLY' ? 'bg-primary text-black' : 'text-white/50 hover:text-white'}`}>
                              {period}
                           </button>
                         ))}
                       </div>
                    </div>

                    <div className="relative w-full flex-1">
                        <div className="absolute inset-0 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 xl:gap-4">
                        {MOCK_ANALYTICS_STATS.map((stat, i) => (
                           <div key={i} className="bg-[#222222] rounded-2xl md:rounded-[24px] p-3 md:p-4 lg:p-5 flex flex-col justify-between shadow-xl border border-white/5 h-[110px] md:h-[140px] lg:h-[160px]">
                              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1 xl:gap-2 mb-1 md:mb-2">
                                <p className="text-neutral-400 text-[8px] md:text-[9px] lg:text-[10px] font-bold uppercase tracking-wider leading-tight truncate">{stat.label}</p>
                                <div className="flex items-center gap-0.5 lg:gap-1 text-primary text-[8px] md:text-[99] lg:text-[10px] font-bold shrink-0">
                                  ↗ {stat.trend}
                                </div>
                              </div>
                              <div className="mb-1 md:mb-2">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                                   <AnimatedNumber value={stat.value} />
                                </h3>
                              </div>
                              <div className="mt-auto border-t border-white/10 pt-1.5 md:pt-2 lg:pt-3">
                                <span className="text-[8px] md:text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-wide">View Data</span>
                              </div>
                           </div>
                        ))}
                    </div>

                    <div className="mt-4 md:mt-6 bg-[#222222] rounded-2xl md:rounded-[24px] p-4 md:p-6 border border-white/5 h-[180px] md:h-[200px] flex flex-col justify-between w-full relative z-0">
                       <div>
                         <h4 className="text-white font-bold mb-1">Performance Over Time</h4>
                         <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Metrics Compared to Previous Period</p>
                       </div>
                       <div className="w-full grow mt-4 relative font-sans" style={{ minHeight: "100px" }}>
                           <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={MOCK_CHART_DATA} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                               <defs>
                                 <linearGradient id="colorViewsMock" x1="0" y1="0" x2="0" y2="1">
                                   <stop offset="5%" stopColor="#4c4c4c" stopOpacity={0.3} />
                                   <stop offset="95%" stopColor="#4c4c4c" stopOpacity={0} />
                                 </linearGradient>
                                 <linearGradient id="colorClicksMock" x1="0" y1="0" x2="0" y2="1">
                                   <stop offset="5%" stopColor="#beee02" stopOpacity={0.4} />
                                   <stop offset="95%" stopColor="#beee02" stopOpacity={0} />
                                 </linearGradient>
                               </defs>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                               <XAxis 
                                  dataKey="name" 
                                  axisLine={false} 
                                  tickLine={false} 
                                  tick={{ fill: '#ffffff40', fontSize: 10 }} 
                                  dy={5}
                                  minTickGap={10}
                               />
                               <YAxis 
                                  axisLine={false} 
                                  tickLine={false} 
                                  tick={{ fill: '#ffffff40', fontSize: 10 }} 
                                  dx={-5}
                                  width={25}
                               />
                               <Tooltip 
                                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff10', borderRadius: '12px', color: '#fff', fontSize: '10px' }}
                                  itemStyle={{ color: '#fff' }}
                               />
                               <Area type="monotone" dataKey="views" stroke="#4c4c4c" strokeWidth={2} fillOpacity={1} fill="url(#colorViewsMock)" />
                               <Area type="monotone" dataKey="clicks" stroke="#beee02" strokeWidth={2} fillOpacity={1} fill="url(#colorClicksMock)" />
                             </AreaChart>
                           </ResponsiveContainer>
                       </div>
                    </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
