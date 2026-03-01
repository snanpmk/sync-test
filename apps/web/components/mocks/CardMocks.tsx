'use client';

import { Linkedin, Twitter, Instagram, Mail, UserPlus, Download, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const CardProfileMock = () => (
  <div className="relative mx-auto w-[240px] sm:w-[260px] rounded-[2.5rem] border border-white/10 bg-brand-dark overflow-hidden shadow-2xl shadow-primary/10">
    {/* Cover */}
    <div className="relative h-28 bg-neutral-900 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=400"
        alt="cover"
        className="w-full h-full object-cover opacity-60"
      />
    </div>
    {/* Avatar */}
    <div className="flex justify-center -mt-10 mb-3 relative z-10">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
          alt="avatar"
          className="w-20 h-20 rounded-full border-4 border-brand-dark object-cover"
        />
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-primary rounded-full border-2 border-brand-dark" />
      </div>
    </div>
    {/* Info */}
    <div className="px-5 pb-5 text-center">
      <h3 className="font-black text-sm text-white">Alex Jonathan</h3>
      <p className="text-white/50 text-[11px] mb-0.5">Product Designer & Developer</p>
      <p className="text-primary text-[11px] font-bold mb-3">CreativStudio</p>
      {/* Socials */}
      <div className="flex justify-center gap-2 mb-4">
        {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
          <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Icon className="w-3.5 h-3.5 text-white/60" />
          </div>
        ))}
      </div>
      {/* Connect */}
      <div className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-2.5 mb-2">
        <UserPlus className="w-4 h-4 text-black" />
        <span className="text-black font-black text-sm">Connect</span>
      </div>
      {/* Save + Share */}
      <div className="flex gap-2">
        <div className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 py-2">
          <Download className="w-3.5 h-3.5 text-white/60" />
          <span className="text-white/60 text-xs font-bold">Save</span>
        </div>
        <div className="w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
          <Share2 className="w-3.5 h-3.5 text-white/60" />
        </div>
      </div>
    </div>
  </div>
);

export const ConnectDialogMock = () => (
  <div className="relative mx-auto w-[260px] sm:w-[300px] rounded-3xl border border-white/10 bg-[#111] p-6 shadow-2xl shadow-primary/10">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
        <UserPlus className="w-5 h-5 text-black" />
      </div>
      <div>
        <p className="font-black text-sm text-white">Connect With Us</p>
        <p className="text-white/40 text-[10px]">We'll be in touch shortly</p>
      </div>
    </div>
    {[
      { label: 'Your Name', val: 'Sarah Mitchell' },
      { label: 'Email Address', val: 'sarah@example.com' },
    ].map((f, i) => (
      <div key={i} className="mb-3">
        <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1">{f.label}</p>
        <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white font-medium">
          {f.val}
        </div>
      </div>
    ))}
    <div className="mb-4">
      <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1">Note (optional)</p>
      <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white/30 h-14">
        Loved your portfolio, would love to collaborate...
      </div>
    </div>
    <div className="w-full rounded-xl bg-primary py-2.5 text-center">
      <span className="text-black font-black text-sm">Send Message</span>
    </div>
  </div>
);

export const ProfileStudioMock = () => (
  <div className="mx-auto w-full max-w-[340px] space-y-3">
    {/* Header */}
    <div className="flex items-center justify-between px-1">
      <p className="text-xs font-black text-white">Edit Profile</p>
      <span className="text-[9px] font-black text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
        Live Preview
      </span>
    </div>

    {/* Profile Photo + Cover Banner card */}
    <div className="rounded-2xl bg-[#111] border border-white/10 p-4 space-y-3">
      {/* Profile Photo */}
      <div>
        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2">Profile Photo</p>
        <div className="w-14 h-14 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80"
            alt="avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      {/* Cover Banner */}
      <div>
        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2">Cover Banner</p>
        <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
            <path d="M21 15l-5-5L5 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    {/* Text fields card */}
    <div className="rounded-2xl bg-[#111] border border-white/10 p-4 space-y-3">
      {/* Full Name — active/focused */}
      <div>
        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">Full Name</p>
        <div className="flex items-center rounded-xl bg-black border border-primary/50 px-3 py-2">
          <p className="text-xs text-white font-medium flex-1">Alex Rodriguez</p>
          <div className="w-1.5 h-3.5 bg-primary animate-pulse rounded-full" />
        </div>
      </div>
      {/* Job Title */}
      <div>
        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">Job Title</p>
        <div className="rounded-xl bg-black border border-white/10 px-3 py-2">
          <p className="text-xs text-white/60">Creative Director</p>
        </div>
      </div>
      {/* Company Name */}
      <div>
        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">Company Name</p>
        <div className="rounded-xl bg-black border border-white/10 px-3 py-2">
          <p className="text-xs text-white/60">SynConnect Studios</p>
        </div>
      </div>
      {/* Short Bio */}
      <div>
        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">Short Bio</p>
        <div className="rounded-xl bg-black border border-white/10 px-3 py-2 h-12">
          <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
            Helping brands scale their digital products with high-end design systems.
          </p>
        </div>
      </div>
    </div>

    {/* Save button */}
    <div className="w-full rounded-xl bg-primary py-2.5 text-center">
      <span className="text-black font-black text-xs">Save Changes</span>
    </div>
  </div>
);

export const ProductServiceMock = () => (
  <div className="relative mx-auto w-full max-w-[320px] space-y-4 py-4">
    {/* Floating Decorative Glows */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-[60px] rounded-full pointer-events-none" />
    
    <div className="flex items-center justify-between px-1 relative z-10">
      <div>
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70">Shopify Sync</h4>
        </div>
        <p className="text-sm font-black text-white italic tracking-tight">Products & Services</p>
      </div>
      <motion.div 
        whileHover={{ rotate: 90 }}
        className="w-9 h-9 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:border-primary/40 transition-colors"
      >
        <ArrowRight className="w-4 h-4 text-white/40" />
      </motion.div>
    </div>

    <div className="grid grid-cols-2 gap-3 relative z-10">
      {[
        { name: 'UI/UX Design', price: '₹15,000', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200', tag: 'Hot' },
        { name: 'Web Dev', price: '₹45,000', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200', tag: 'PRO' },
        { name: 'Branding', price: '₹12,000', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=200' },
        { name: 'Consulting', price: '₹5,000', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200' },
      ].map((s, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -5 }}
          className="group/item rounded-2xl bg-brand-dark border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-primary/40"
        >
          <div className="relative h-24 overflow-hidden">
            <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-60 group-hover/item:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/20 to-transparent" />
            {s.tag && (
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-primary text-[8px] font-black text-black uppercase tracking-tighter">
                {s.tag}
              </div>
            )}
            <div className="absolute bottom-2 left-3">
              <p className="text-[10px] font-black text-white leading-tight uppercase tracking-tight">{s.name}</p>
            </div>
          </div>
          <div className="p-2.5 flex items-center justify-between bg-white/2">
            <span className="text-[10px] font-black text-primary italic">{s.price}</span>
            <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-2.5 h-2.5 text-primary" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
