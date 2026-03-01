"use client";

import { useState } from 'react';
import {
    Share2,
    Download,
    UserPlus,
    Linkedin,
    Twitter,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Briefcase,
    FileText,
    ExternalLink,
    X,
    MessageCircle,
    Plus
} from 'lucide-react';
import { SiLinkedin, SiX, SiInstagram, SiGmail } from 'react-icons/si';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Mock Data
const MOCK_PROFILE = {
    id: "1",
    name: "Alex Jonathan",
    designation: "Brand Architect & Designer",
    company: "CreativStudio",
    tagline: "I build digital identities that help brands scale. Let's create something memorable together.",
    coverPic: "https://images.unsplash.com/photo-1772306105684-4ec41e099a47?q=80&w=2000&auto=format&fit=crop",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    socials: [
        { name: "LinkedIn", icon: SiLinkedin, url: "#", color: "#0A66C2" },
        { name: "X", icon: SiX, url: "#", color: "#FFFFFF" },
        { name: "Instagram", icon: SiInstagram, url: "#", color: "#E4405F" },
        { name: "Email", icon: SiGmail, url: "mailto:hello@example.com", color: "#EA4335" }
    ],
    services: [
        { title: "Brand Identity", description: "Crafting visual systems that communicate your core values." },
        { title: "Digital Product Design", description: "Intuitive user experiences for web and mobile applications." }
    ],
    products: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    ],
    resources: [
        { title: "Download Resume", type: "pdf", url: "#", size: "2.4 MB" },
        { title: "Project Case Study", type: "link", url: "#", size: "External" }
    ],
    youtubeVideoId: "dQw4w9WgXcQ",
    contact: {
        phone: "+91 98765 43210",
        email: "alex@creativstudio.com",
        location: "Mumbai, Maharashtra, India",
        website: "www.creativstudio.com"
    }
};

export default function ProfilePage() {
    const profile = MOCK_PROFILE;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <div className="min-h-screen bg-[#080809] text-zinc-100 pb-24 font-sans selection:bg-primary/30 relative overflow-hidden">
            
            {/* AMBIENT PRIMARY GLOW BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
                {/* Top Left - Primary Glow */}
                <div className="absolute top-[-15%] left-[-15%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[160px]"></div>
                
                {/* Center Right - Primary Glow */}
                <div className="absolute top-[20%] right-[-20%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[180px]"></div>
                
                {/* Bottom Left - Primary Glow */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[140px]"></div>
            </div>

            {/* HERO COVER BANNER - SLIMMED */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                <img 
                    src={profile.coverPic} 
                    alt="Cover" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#080809]/40 to-[#080809]"></div>
            </div>

            {/* TOP BAR - REMOVED SHARE */}
            <div className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
                <div className="pointer-events-auto"></div>
                {/* Space reserved for any future top bar items */}
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl mx-auto px-6 -mt-12 sm:-mt-20 flex flex-col items-center relative z-20"
            >
                
                {/* COMPACT PROFILE PIC */}
                <motion.div variants={itemVariants} className="relative mb-6 group">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-zinc-900 transition-transform hover:scale-105 duration-500">
                        <img src={profile.profilePic} alt={profile.name} className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* CENTRIC INFO */}
                <motion.div variants={itemVariants} className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3 leading-tight">
                        {profile.name}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-zinc-500 font-semibold text-sm sm:text-base mb-6">
                        <span>{profile.designation}</span>
                        <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                        <span className="text-primary tracking-wide uppercase text-xs">{profile.company}</span>
                    </div>
                    <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-sm mx-auto font-medium opacity-80 italic">
                        "{profile.tagline}"
                    </p>
                </motion.div>

                {/* SOCIALS - PREMIUM GLASS TRAY */}
                <motion.div variants={itemVariants} className="flex justify-center gap-2.5 mb-10 p-1.5 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-2xl">
                    {profile.socials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group relative overflow-hidden"
                            style={{ 
                                color: social.color,
                                backgroundColor: `${social.color}10` 
                            }}
                            aria-label={social.name}
                        >
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-current opacity-0 group-hover:opacity-40 transition-opacity"></div>
                            <social.icon size={19} />
                        </a>
                    ))}
                </motion.div>

                {/* PRIMARY ACTIONS - HIGH-END UI */}
                <motion.div variants={itemVariants} className="w-full mb-10 flex flex-col gap-3.5">
                    {/* ROW 1: CONNECT ( PREMIUM GLOW ) */}
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="w-full h-16 rounded-3xl bg-linear-to-tr from-primary via-primary to-[#DFFF40] text-black font-black text-lg shadow-[0_20px_50px_-12px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_25px_60px_-10px_rgba(var(--primary-rgb),0.6)] transition-all hover:translate-y-[-2px] active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <UserPlus size={22} strokeWidth={2.5} className="relative z-10" />
                        <span className="relative z-10">Get in Touch</span>
                    </button>

                    {/* ROW 2: GLASS ACTIONS - ASYMMETRIC UI */}
                    <div className="flex gap-3.5 h-16">
                        <button className="flex-1 rounded-3xl bg-white/4 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-[0.98] backdrop-blur-xl">
                            <Download size={18} className="-translate-y-px" />
                            Save to Contacts
                        </button>
                        <button className="w-16 h-16 shrink-0 rounded-3xl bg-white/4 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-all active:scale-[0.98] backdrop-blur-xl" aria-label="Share Profile">
                            <Share2 size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* UNIFIED CONTACT SURFACE - LESS BOXY */}
                <motion.div variants={itemVariants} className="w-full mb-16 px-2">
                    <div className="bg-white/2 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl divide-y divide-white/4">
                        {/* Email Row */}
                        <a href={`mailto:${profile.contact.email}`} className="flex items-center justify-between p-6 hover:bg-white/3 transition-all group">
                            <div className="flex items-center gap-5">
                                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[2.5px] mb-1">Email Address</p>
                                    <p className="text-white font-bold text-base tracking-tight">{profile.contact.email}</p>
                                </div>
                            </div>
                            <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {/* Phone Row */}
                        <a href={`tel:${profile.contact.phone}`} className="flex items-center justify-between p-6 hover:bg-white/3 transition-all group">
                            <div className="flex items-center gap-5">
                                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[2.5px] mb-1">Phone Number</p>
                                    <p className="text-white font-bold text-base tracking-tight">{profile.contact.phone}</p>
                                </div>
                            </div>
                            <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {/* Website Row */}
                        <a href={`https://${profile.contact.website}`} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 hover:bg-white/3 transition-all group">
                            <div className="flex items-center gap-5">
                                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <ExternalLink size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[2.5px] mb-1">Official Website</p>
                                    <p className="text-white font-bold text-base tracking-tight">{profile.contact.website}</p>
                                </div>
                            </div>
                            <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {/* Location Row */}
                        <div className="flex items-center justify-between p-6 hover:bg-white/3 transition-all group">
                            <div className="flex items-center gap-5">
                                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[2.5px] mb-1">Location</p>
                                    <p className="text-white font-bold text-base tracking-tight">{profile.contact.location}</p>
                                </div>
                            </div>
                            <MapPin size={18} className="text-zinc-700 opacity-20" />
                        </div>
                    </div>
                </motion.div>

                {/* CONTENT LAYERS */}
                <div className="w-full space-y-16">

                    {/* SERVICES - STAGGERED GLASS GRID */}
                    <motion.section variants={itemVariants} className="space-y-8">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-[10px] font-black tracking-[4px] uppercase text-zinc-700">Expertise & Services</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profile.services.map((service, idx) => (
                                <div key={idx} className="relative group overflow-hidden p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/20 hover:bg-white/5 transition-all duration-500">
                                    {/* Corner Glow Overlay */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[50px] rounded-full translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    
                                    <div className="relative z-10 flex flex-col h-full gap-6">
                                        <div className="flex items-start justify-between">
                                            <span className="text-[10px] font-black text-primary/40 group-hover:text-primary transition-colors tracking-widest">
                                                0{idx + 1}
                                            </span>
                                            <div className="p-3 rounded-2xl bg-white/5 text-zinc-500 group-hover:text-primary transition-all group-hover:scale-110">
                                                <Briefcase size={20} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* WORK - GRID LAYOUT */}
                    <motion.section variants={itemVariants} className="space-y-6">
                        <div className="flex items-center justify-between px-2">
                             <h2 className="text-[10px] font-black tracking-[4px] uppercase text-zinc-600">Work Gallery</h2>
                            <button className="text-[9px] font-black tracking-[1px] text-zinc-500 hover:text-primary transition-colors flex items-center gap-1 uppercase">
                                Full Portfolio <ArrowUpRight size={14} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {profile.products.map((img, idx) => (
                                <div key={idx} className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group aspect-video">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img src={img} alt="Work" className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" />
                                </div>
                            ))}
                        </div>
                    </motion.section>



                    {/* FOOTER */}
                    <motion.div variants={itemVariants} className="pt-16 pb-12 text-center opacity-30">
                        <span className="text-[10px] font-black tracking-[6px] uppercase text-white">SynConnect</span>
                        <p className="mt-3 text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Designed for professionals</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* SEND MESSAGE MODAL - ULTRA GLOSSY DARK */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-6"
                    >
                        <div className="absolute inset-0 bg-[#080809]/90 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)}></div>
                        
                        <motion.div 
                            initial={{ scale: 0.9, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 30, opacity: 0 }}
                            className="relative w-full max-w-md bg-[#121214] rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 p-10 py-12 text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-inner shadow-primary/20">
                                <MessageCircle size={36} strokeWidth={2} />
                            </div>

                            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Say Hello</h2>
                            <p className="text-zinc-500 font-medium mb-10 leading-relaxed">Let's create something together</p>

                            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
                                <input type="text" placeholder="Full Name" required className="w-full bg-[#1A1A1C] border-none rounded-2xl px-6 py-4.5 text-white focus:ring-2 focus:ring-primary/40 transition-all font-semibold placeholder:text-zinc-700" />
                                <input type="text" placeholder="Company" className="w-full bg-[#1A1A1C] border-none rounded-2xl px-6 py-4.5 text-white focus:ring-2 focus:ring-primary/40 transition-all font-semibold placeholder:text-zinc-700" />
                                <textarea placeholder="Message" required rows={4} className="w-full bg-[#1A1A1C] border-none rounded-2xl px-6 py-4.5 text-white focus:ring-2 focus:ring-primary/40 transition-all font-semibold resize-none placeholder:text-zinc-700"></textarea>
                                <button type="submit" className="w-full mt-6 bg-primary text-black py-5 rounded-full font-black text-lg shadow-xl shadow-primary/10 active:scale-[0.98] transition-all">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
