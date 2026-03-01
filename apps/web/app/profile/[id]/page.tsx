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
    MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const MOCK_PROFILE = {
    id: "1",
    name: "Alex Jonathan",
    designation: "Brand Architect & Designer",
    company: "CreativStudio",
    tagline: "I build digital identities that help brands scale. Let's create something memorable together.",
    coverPic: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    socials: [
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" },
        { name: "Instagram", icon: Instagram, url: "#" },
        { name: "Email", icon: Mail, url: "mailto:hello@example.com" }
    ],
    services: [
        { title: "Brand Identity", description: "Crafting visual systems that communicate your core values." },
        { title: "Digital Product Design", description: "Intuitive user experiences for web and mobile applications." }
    ],
    products: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661331662916-2fd7f0c1caee?q=80&w=1000&auto=format&fit=crop"
    ],
    resources: [
        { title: "Download Resume", type: "pdf", url: "#", size: "2.4 MB" },
        { title: "View Featured Case Study", type: "link", url: "#", size: "External" }
    ],
    youtubeVideoId: "dQw4w9WgXcQ",
    contact: {
        phone: "+91 98765 43210",
        email: "alex@creativstudio.com",
        location: "Mumbai, Maharashtra, India"
    }
};

export default function ProfilePage() {
    const profile = MOCK_PROFILE;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 pb-24 font-sans selection:bg-primary selection:text-black">
            
            {/* AMBIENT BACKGROUND GLOW */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>

            {/* HERO COVER */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img 
                    src={profile.coverPic} 
                    alt="Cover" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0A0A0B]/60 to-[#0A0A0B]"></div>
                
                {/* Float Actions */}
                <div className="absolute top-6 right-6 z-20">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-5 lg:px-8 relative z-20 -mt-24 sm:-mt-32">
                
                {/* IDENTITY SECTION */}
                <div className="flex flex-col items-center">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] p-1.5 bg-linear-to-br from-zinc-700 to-zinc-900 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-zinc-800">
                                <img
                                    src={profile.profilePic}
                                    alt={profile.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-black shadow-lg shadow-primary/20">
                            <ArrowUpRight size={20} strokeWidth={2.5} />
                        </div>
                    </motion.div>

                    <div className="mt-8 text-center">
                        <motion.h1
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-black tracking-tighter text-white"
                        >
                            {profile.name}
                        </motion.h1>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-3 flex items-center justify-center gap-2 text-zinc-400 font-medium tracking-tight"
                        >
                            <span>{profile.designation}</span>
                            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                            <span className="text-primary">{profile.company}</span>
                        </motion.div>
                        
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-zinc-500 text-lg leading-relaxed max-w-lg font-medium"
                        >
                            {profile.tagline}
                        </motion.p>
                    </div>

                    {/* ACTION BUTTON GRID */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                        <button 
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center justify-center gap-2 bg-primary text-black hover:bg-white transition-all px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/10 active:scale-[0.98]"
                        >
                            <MessageCircle size={20} />
                            Send Message
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="#" className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 py-4 rounded-2xl font-bold text-zinc-200 transition-all">
                                <Download size={18} />
                                Save
                            </a>
                            <a href={`tel:${profile.contact.phone}`} className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 py-4 rounded-2xl font-bold text-zinc-200 transition-all">
                                <Phone size={18} />
                                Call
                            </a>
                        </div>
                    </motion.div>

                    {/* RESTRAINED SOCIAL ROW */}
                    <div className="mt-8 flex gap-4">
                        {profile.socials.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                className="w-12 h-12 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/30 transition-all"
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* BENTO CONTENT GRID */}
                <div className="mt-16 space-y-12">
                    
                    {/* Expertise Section */}
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Services</h2>
                            <div className="h-px flex-1 bg-zinc-900"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profile.services.map((service, idx) => (
                                <div key={idx} className="group p-8 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-primary/20 transition-all relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed font-medium">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Performance / Work Section */}
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Selected Work</h2>
                            <div className="h-px flex-1 bg-zinc-900"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {profile.products.map((img, idx) => (
                                <div key={idx} className={`rounded-3xl overflow-hidden bg-zinc-900 aspect-square ${idx === 0 ? 'col-span-2 aspect-video' : ''}`}>
                                    <img src={img} alt="Work" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-crosshair" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Resources Section */}
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Resources</h2>
                            <div className="h-px flex-1 bg-zinc-900"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profile.resources.map((resource, idx) => (
                                <a
                                    key={idx}
                                    href={resource.url}
                                    className="flex items-center gap-4 p-5 rounded-3xl bg-[#121214] border border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-colors">
                                        <FileText size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-white text-[15px] truncate">{resource.title}</p>
                                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{resource.size}</p>
                                    </div>
                                    <Download size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Contact Info Footer Grid */}
                    <section className="bg-primary/5 rounded-[2.5rem] p-8 border border-primary/10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Email</h3>
                                <a href={`mailto:${profile.contact.email}`} className="text-2xl font-bold hover:text-primary transition-colors block underline decoration-zinc-800 hover:decoration-primary underline-offset-8 decoration-2">{profile.contact.email}</a>
                            </div>
                            <div>
                                <h3 className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Location</h3>
                                <p className="text-2xl font-bold text-zinc-200">{profile.contact.location}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer simple mark */}
                <div className="pt-24 pb-12 flex justify-center">
                    <div className="h-0.5 w-12 bg-zinc-900"></div>
                </div>
            </div>

            {/* SEND MESSAGE DIALOG */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="absolute inset-0 bg-[#0A0A0B]/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
                        <motion.div 
                            initial={{ y: 20, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-lg bg-[#121214] border border-zinc-800 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl"
                        >
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            
                            <h2 className="text-3xl font-black tracking-tighter text-white mb-2">Say Hello</h2>
                            <p className="text-zinc-500 font-medium mb-8">Fill the form below to send a direct message.</p>

                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
                                <div>
                                    <input type="text" placeholder="Name" required className="w-full bg-[#1A1A1C] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium placeholder:text-zinc-600" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Company Name" className="w-full bg-[#1A1A1C] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium placeholder:text-zinc-600" />
                                </div>
                                <div>
                                    <textarea placeholder="Your Message" required rows={4} className="w-full bg-[#1A1A1C] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium resize-none placeholder:text-zinc-600"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-white text-black py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/10 active:scale-[0.98]">
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
