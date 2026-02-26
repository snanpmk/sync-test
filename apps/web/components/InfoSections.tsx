'use client';

import {
  BarChart3,
  MousePointer2,
  PhoneCall,
  TrendingUp,
  ShoppingBag,
  Settings,
  Smartphone,
  Star,
  MessageSquare,
  Scan,
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { SynConnectIconDark, SynConnectIconLight, SynConnectLogo, SynConnectLogoDark, SynConnectLogoLight } from '@synconnect/ui';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const mockChartData = [
  { name: 'Mon', views: 85, clicks: 35 },
  { name: 'Tue', views: 110, clicks: 45 },
  { name: 'Wed', views: 160, clicks: 75 },
  { name: 'Thu', views: 220, clicks: 90 },
  { name: 'Fri', views: 190, clicks: 80 },
  { name: 'Sat', views: 260, clicks: 120 },
  { name: 'Sun', views: 240, clicks: 105 },
];

const mockStandChartData = [
  { name: 'Mon', taps: 120, reviews: 40 },
  { name: 'Tue', taps: 150, reviews: 55 },
  { name: 'Wed', taps: 130, reviews: 45 },
  { name: 'Thu', taps: 180, reviews: 70 },
  { name: 'Fri', taps: 210, reviews: 90 },
  { name: 'Sat', taps: 290, reviews: 140 },
  { name: 'Sun', taps: 250, reviews: 110 },
];

const mockCardPieData = [
  { name: 'Mobile', value: 75 },
  { name: 'Desktop', value: 20 },
  { name: 'Tablet', value: 5 },
];

const mockStandPieData = [
  { name: '5 Star', value: 65 },
  { name: '4 Star', value: 25 },
  { name: '3 Star', value: 10 },
];

const COLORS_PIE = ['#beee02', '#4c4c4c', '#a0a0a0'];

// Animated Number Component
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract numbers and non-numbers so we can animate just the numeric part
  const numericMatch = value.match(/[\d,.]+/);
  const numericPart = numericMatch ? numericMatch[0] : '';
  const prefix = value.substring(0, value.indexOf(numericPart));
  const suffix = value.substring(value.indexOf(numericPart) + numericPart.length);
  
  const targetNumber = parseFloat(numericPart.replace(/,/g, ''));
  const isFloat = numericPart.includes('.');

  useEffect(() => {
    if (!isInView || isNaN(targetNumber)) {
      if (isNaN(targetNumber)) setDisplayValue(value as any);
      return;
    }

    let startTimestamp: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth slowdown at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = targetNumber * easeOutQuart;

      setDisplayValue(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, targetNumber, value]);

  if (isNaN(targetNumber)) return <span>{value}</span>;

  // Format back with commas if necessary
  const formattedNumber = isFloat 
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

        {/* Unified Dashboard Mockup Wrapper */}
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
            {/* Dashboard Main Content Area */}
            <div className="flex-1 pt-6 lg:pt-8 relative h-min md:h-full flex flex-col">
              
              {/* Fake Top Nav Area in Dashboard */}
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

              {/* Dashboard Content Split Layout */}
              <div className="flex gap-6 w-full h-full px-6 lg:px-10 pb-6 lg:pb-10 overflow-hidden">
                 
                 {/* Left Column: Slider Content & Filters */}
                 <div className="flex-1 flex flex-col min-w-0">
                    {/* Responsive Filters */}
                    <div className="mb-4 md:mb-6 shrink-0">
                       {/* Mobile Native Select */}
                       <select 
                         className="sm:hidden w-full bg-[#222222] border border-white/10 text-white text-[10px] font-bold rounded-xl px-4 py-2 outline-none focus:border-primary appearance-none uppercase tracking-widest"
                         defaultValue="WEEKLY"
                       >
                         {['DAILY', 'WEEKLY', 'MONTHLY', '6 MONTHS'].map(period => (
                            <option key={period} value={period}>{period}</option>
                         ))}
                       </select>
                       
                       {/* Desktop Pill Tabs */}
                       <div className="hidden sm:flex items-center bg-[#222222] rounded-full p-1 w-max border border-white/5 shadow-md">
                         {['DAILY', 'WEEKLY', 'MONTHLY', '6 MONTHS'].map((period, idx) => (
                           <button key={period} className={`px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${period === 'WEEKLY' ? 'bg-primary text-black' : 'text-white/50 hover:text-white'}`}>
                              {period}
                           </button>
                         ))}
                       </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative w-full flex-1">
                        <div className="absolute inset-0 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 xl:gap-4">
                        {[
                          { label: 'Profile Views', value: '1,280', trend: '+124%' },
                          { label: 'Social Clicks', value: '450', trend: '+45%' },
                          { label: 'Contact', value: '85', trend: '+8%' },
                          { label: 'Conversion', value: '18.5%', trend: '+2.4%' },
                        ].map((stat, i) => (
                           <div key={i} className="bg-[#222222] rounded-2xl md:rounded-[24px] p-3 md:p-4 lg:p-5 flex flex-col justify-between shadow-xl border border-white/5 h-[110px] md:h-[140px] lg:h-[160px]">
                              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1 xl:gap-2 mb-1 md:mb-2">
                                <p className="text-neutral-400 text-[8px] md:text-[9px] lg:text-[10px] font-bold uppercase tracking-wider leading-tight truncate">{stat.label}</p>
                                <div className="flex items-center gap-0.5 lg:gap-1 text-primary text-[8px] md:text-[9px] lg:text-[10px] font-bold shrink-0">
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
                       {/* Mock Graph Area */}
                       <div className="w-full grow mt-4 relative font-sans" style={{ minHeight: "100px" }}>
                           <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={mockChartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
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

export const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-48">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-white mb-6 italic"
          >
            Simple 3-Step Setup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-white/60 mx-auto max-w-2xl"
          >
            Get up and running in minutes, not hours. Optimized for modern
            entrepreneurs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Card Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-white mb-10 pb-6 border-b border-primary/20 italic">
              <Smartphone className="w-8 h-8 text-primary" />
              For Professionals
            </h3>
            {[
              {
                title: 'Purchase your card',
                text: 'Select your preferred design and finish from our shop.',
                icon: ShoppingBag,
              },
              {
                title: 'Setup your profile',
                text: 'Add your contact info, social links, and showcase services.',
                icon: Settings,
              },
              {
                title: 'Tap to share instantly',
                text: 'Touch your card to any smartphone to share your profile.',
                icon: Smartphone,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="shrink-0 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-primary text-black font-black text-xl lg:text-3xl italic">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-lg">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stand Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-white mb-10 pb-6 border-b border-white/20 italic">
              <TrendingUp className="w-8 h-8 text-primary" />
              For Businesses
            </h3>
            {[
              {
                title: 'Purchase your stand',
                text: 'Premium acrylic stands built for high-traffic service counters.',
                icon: ShoppingBag,
              },
              {
                title: 'Add Google review link',
                text: 'Configure your destination in seconds on our dashboard.',
                icon: Settings,
              },
              {
                title: 'Collect reviews instantly',
                text: 'Drive massive customer action with a simple counter-top tap.',
                icon: Star,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="shrink-0 flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-2xl border-2 border-white/20 text-white font-black text-xl lg:text-3xl italic">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-lg">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};




