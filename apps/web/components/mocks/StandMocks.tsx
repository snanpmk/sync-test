'use client';

import { Star, MapPin, Instagram, MessageCircle, Facebook, Phone, Share2, MessageSquare, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReviewFilterMock = () => (
  <div className="mx-auto w-full max-w-[300px]">
    {/* Top: customer rates */}
    <div className="rounded-2xl bg-[#111] border border-white/10 p-4 text-center mb-4">
      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2">Customer taps the stand</p>
      <div className="flex justify-center gap-1.5 mb-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-7 h-7 text-white/20" />
        ))}
      </div>
      <p className="text-xs text-white/40">How was your experience?</p>
    </div>
    {/* Arrow */}
    <div className="flex justify-center mb-4">
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-5 bg-white/20" />
        <div className="w-2 h-2 border-r-2 border-b-2 border-white/20 rotate-45 -mt-1.5" />
      </div>
    </div>
    {/* Fork */}
    <div className="flex gap-3">
      <div className="flex-1 rounded-2xl bg-primary/10 border border-primary/40 p-3.5 text-center">
        <div className="flex justify-center gap-0.5 mb-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-3.5 h-3.5 ${s >= 4 ? 'text-primary fill-primary' : 'text-white/20'}`} />
          ))}
        </div>
        <p className="text-primary font-black text-[11px] mb-1">4 – 5 Stars</p>
        <p className="text-white/50 text-[10px] leading-tight">Sent to Google Review page</p>
        <div className="mt-2 text-[9px] font-black text-primary uppercase tracking-wider">↗ Google</div>
      </div>
      <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-3.5 text-center">
        <div className="flex justify-center gap-0.5 mb-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className={`w-3.5 h-3.5 ${s <= 3 ? 'text-white/40 fill-white/20' : 'text-white/10'}`} />
          ))}
        </div>
        <p className="text-white/60 font-black text-[11px] mb-1">1 – 3 Stars</p>
        <p className="text-white/40 text-[10px] leading-tight">Private feedback form</p>
        <div className="mt-2 text-[9px] font-black text-white/30 uppercase tracking-wider">→ Your Inbox</div>
      </div>
    </div>
  </div>
);

export const StandProfileMock = () => (
  <div className="relative mx-auto w-[240px] sm:w-[260px] rounded-[2.5rem] border border-white/10 bg-brand-dark overflow-hidden shadow-2xl shadow-primary/5">
    {/* Cover with overlay text */}
    <div className="relative h-40 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400"
        alt="business cover"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      <div className="absolute bottom-3 left-4">
        <h3 className="font-black text-sm text-white leading-tight">Urban Cuts Barbershop</h3>
        <p className="text-primary text-[10px] font-bold">Premium Grooming</p>
        <div className="flex items-center gap-1 mt-0.5">
          <MapPin className="w-2.5 h-2.5 text-white/50" />
          <p className="text-white/50 text-[9px]">45 Style Ave, Downtown</p>
        </div>
      </div>
    </div>
    <div className="px-4 pt-3 pb-5">
      {/* Social icons */}
      <div className="flex gap-2 mb-3">
        {[Instagram, MessageCircle, Facebook].map((Icon, i) => (
          <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Icon className="w-3.5 h-3.5 text-white/60" />
          </div>
        ))}
      </div>
      {/* Rating widget */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-3 mb-3">
        <p className="text-white text-[11px] font-black text-center mb-0.5">How was your experience?</p>
        <p className="text-white/40 text-[9px] text-center mb-2">Tap a star to rate us. Your feedback helps us improve!</p>
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-5 h-5 text-white/20" />
          ))}
        </div>
      </div>
      {/* CTA buttons */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { Icon: Phone, label: 'Call Us' },
          { Icon: MapPin, label: 'Directions' },
          { Icon: Share2, label: 'Share' },
        ].map(({ Icon, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-1 rounded-xl bg-white/5 border border-white/10 py-2.5">
            <Icon className="w-4 h-4 text-white/60" />
            <p className="text-[9px] text-white/50 font-bold">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const StandDashboardMock = () => (
  <div className="mx-auto w-full max-w-[320px] space-y-3">
    <div className="grid grid-cols-2 gap-2">
      {[
        { label: 'Profile Views', value: '3,840', trend: '+67%' },
        { label: 'Total Reviews', value: '128', trend: '+400%' },
      ].map((s, i) => (
        <div key={i} className="rounded-2xl bg-[#111] border border-white/10 p-3">
          <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-1">{s.label}</p>
          <p className="text-xl font-extrabold text-white">{s.value}</p>
          <p className="text-[9px] text-primary font-bold">↗ {s.trend}</p>
        </div>
      ))}
    </div>
    <div className="rounded-2xl bg-[#111] border border-white/10 p-4">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="w-4 h-4 text-primary" />
        <p className="text-xs font-black text-white">Private Feedback</p>
        <span className="ml-auto text-[9px] bg-primary text-black font-black px-1.5 py-0.5 rounded-full">3 new</span>
      </div>
      <div className="space-y-2">
        {[
          { msg: 'Waiting time was a bit long...', time: '2h ago', stars: 2 },
          { msg: 'Great service but pricing...', time: '5h ago', stars: 3 },
        ].map((fb, i) => (
          <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
            <div className="flex gap-0.5 mb-0.5 items-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-2.5 h-2.5 ${s <= fb.stars ? 'text-primary fill-primary' : 'text-white/20'}`}
                />
              ))}
              <p className="text-white/30 text-[9px] ml-auto">{fb.time}</p>
            </div>
            <p className="text-white/60 text-[10px]">{fb.msg}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Instagram', value: '241' },
        { label: 'WhatsApp', value: '89' },
        { label: 'Facebook', value: '56' },
      ].map((s, i) => (
        <div key={i} className="rounded-2xl bg-[#111] border border-white/10 p-3 text-center">
          <p className="text-[8px] font-bold text-white/30 uppercase tracking-wider mb-1">{s.label}</p>
          <p className="text-base font-extrabold text-white">{s.value}</p>
          <p className="text-[8px] text-primary font-bold">clicks</p>
        </div>
      ))}
    </div>
  </div>
);

export const RestaurantMenuMock = () => (
  <div className="relative mx-auto w-full min-w-80 max-w-[320px] rounded-[2.5rem] border border-white/10 bg-brand-dark overflow-hidden shadow-2xl group/menu">
    {/* Top Header with Image */}
    <div className="relative h-32 overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400"
        alt="restaurant"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/20 to-transparent" />
    </div>
    
    <div className="p-5 space-y-6">
      {/* Category Header */}
      <div className="flex items-center justify-between">
        <h5 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] italic">Artisan Selection</h5>
        <div className="h-px flex-1 mx-4 bg-white/5" />
      </div>
      
      {/* Menu List */}
      <div className="space-y-1">
        {[
          { item: 'Truffle Tagliatelle', price: '₹850', desc: 'Hand-made pasta, black winter truffle', hot: true },
          { item: 'Glazed Salmon', price: '₹1,200', desc: 'Miso glaze, charred asparagus' },
          { item: 'Duck Confit', price: '₹950', desc: 'Slow-cooked duck, berry reduction', pro: true }
        ].map((m, i) => (
          <motion.div 
            key={i} 
            whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
            className="flex justify-between items-start gap-4 p-2.5 rounded-2xl transition-all cursor-pointer group/item"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <h5 className="text-[11px] font-black text-white group-hover/item:text-primary transition-colors">{m.item}</h5>
                {m.hot && <span className="w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_5px_orange]" />}
              </div>
              <p className="text-[9px] text-white/30 leading-tight italic line-clamp-1">{m.desc}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[11px] font-black text-primary">{m.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Smart CTA */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group/btn cursor-pointer"
      >
        <div className="absolute inset-0 bg-primary blur-lg opacity-20 group-hover/btn:opacity-40 transition-opacity" />
        <div className="relative w-full rounded-2xl bg-primary py-3.5 flex items-center justify-center gap-2 shadow-xl shadow-primary/10">
          <Download className="w-4 h-4 text-black" />
          <span className="text-black font-black text-xs italic">Open Full Menu</span>
        </div>
      </motion.div>
    </div>

    {/* Decorative Bottom Corner Glow */}
    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />
  </div>
);
