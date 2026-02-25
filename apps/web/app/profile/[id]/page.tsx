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
    Briefcase,
    PlayCircle,
    Link as LinkIcon,
    Image as ImageIcon,
    Compass,
    FileText,
    ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data
const MOCK_PROFILE = {
    id: "1",
    name: "Alex Jonathan",
    designation: "Product Designer & Developer",
    company: "CreativStudio",
    tagline: "Building digital experiences that matter. Turning coffee into code and ideas into reality.",
    coverPic: "https://images.unsplash.com/photo-1771680968896-cfd9b8f7244e?q=80&w=2070&auto=format&fit=crop",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    socials: [
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" },
        { name: "Instagram", icon: Instagram, url: "#" },
        { name: "Email", icon: Mail, url: "mailto:hello@example.com" }
    ],
    services: [
        { title: "UI/UX Design", description: "Crafting beautiful and functional interfaces." },
        { title: "Web Development", description: "Building scalable web applications." },
        { title: "Brand Strategy", description: "Helping brands stand out in the digital space." }
    ],
    products: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661331662916-2fd7f0c1caee?q=80&w=1000&auto=format&fit=crop"
    ],
    resources: [
        { title: "My Resume", type: "pdf", url: "#", size: "2.4 MB" },
        { title: "Design Portfolio 2024", type: "pdf", url: "#", size: "5.1 MB" },
        { title: "Project Case Study", type: "link", url: "#", size: "External" }
    ],
    youtubeVideoId: "dQw4w9WgXcQ"
};

export default function ProfilePage() {
    const profile = MOCK_PROFILE;

    return (
        <div className="min-h-screen bg-[#050505] text-white pb-20 selection:bg-primary selection:text-black font-sans">
            {/* Classy Cover Pic */}
            <div className="relative h-48 sm:h-64 md:h-80 w-full bg-[#050505] overflow-hidden">
                <div className="absolute inset-0 opacity-80 ">
                    <img
                        src={profile.coverPic}
                        alt="Cover"
                        className="w-full h-full object-cover filter"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-10"></div>
            </div>

            {/* Profile Info Container */}
            <div className="max-w-3xl mx-auto px-5 lg:px-8 -mt-20 sm:-mt-24 md:-mt-32 relative z-20 w-full">

                {/* Classy Profile Pic */}
                <div className="flex justify-center sm:justify-start">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative"
                    >
                        {/* Elegant Outer Ring */}
                        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-zinc-600 via-zinc-900 to-[#050505] shadow-2xl relative">
                            <div className="w-full h-full rounded-full border-[4px] border-[#050505] overflow-hidden bg-zinc-800">
                                <img
                                    src={profile.profilePic}
                                    alt={profile.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>
                        {/* Refined Online indicator */}
                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 bg-primary border-[3px] border-[#050505] rounded-full shadow-[0_0_12px_rgba(190,238,2,0.4)]"></div>
                    </motion.div>
                </div>

                {/* Profile Details */}
                <div className="mt-4 sm:mt-8 text-center sm:text-left">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight"
                    >
                        {profile.name}
                    </motion.h1>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-base sm:text-xl flex flex-col sm:flex-row items-center gap-1 sm:gap-3"
                    >
                        <span className="font-medium text-zinc-300 tracking-wide">{profile.designation}</span>
                        <span className="hidden sm:inline text-zinc-700">•</span>
                        <span className="font-bold text-primary">{profile.company}</span>
                    </motion.div>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-zinc-400 leading-relaxed max-w-2xl mx-auto sm:mx-0 text-sm sm:text-lg font-light"
                    >
                        "{profile.tagline}"
                    </motion.p>
                </div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 mb-8 flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-3"
                >
                    {profile.socials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            className="flex items-center justify-center gap-2 bg-zinc-900/60 border border-zinc-800/60 w-11 h-11 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 rounded-full hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300 group backdrop-blur-md shadow-sm"
                        >
                            <social.icon size={18} className="text-zinc-400 group-hover:text-white transition-colors sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{social.name}</span>
                        </a>
                    ))}
                </motion.div>

                {/* Primary Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
                >
                    {/* Main Connect */}
                    <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-black px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-[#a5d002] transition-colors active:scale-95 shadow-[0_0_20px_rgba(190,238,2,0.15)]">
                        <UserPlus size={18} className="sm:w-5 sm:h-5" />
                        Connect
                    </button>

                    <div className="flex gap-2.5 sm:gap-3 sm:flex-1 w-full">
                        {/* Save Contact */}
                        <button className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 text-zinc-200 hover:border-primary hover:text-primary bg-zinc-900/40 px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base transition-all group backdrop-blur-sm active:scale-95">
                            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform sm:w-5 sm:h-5" />
                            <span>Save</span>
                        </button>

                        {/* Share */}
                        <button className="flex-none px-4 sm:px-5 py-3.5 sm:py-4 border border-zinc-700 bg-zinc-900/40 hover:bg-zinc-800 hover:border-zinc-500 rounded-xl sm:rounded-2xl text-zinc-300 transition-all active:scale-95 group flex items-center justify-center">
                            <Share2 size={18} className="group-hover:text-white transition-colors sm:w-[22px] sm:h-[22px]" />
                        </button>
                    </div>
                </motion.div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent my-10 sm:my-14" />

                {/* Expertise / Services */}
                <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                        <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><Compass size={20} className="text-primary" /></span>
                        Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        {profile.services.map((service, idx) => (
                            <div key={idx} className="bg-zinc-900/20 border border-zinc-800/50 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] hover:border-zinc-600 transition-all duration-500 group backdrop-blur-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800/10 rounded-bl-full -z-10 group-hover:bg-zinc-800/30 transition-colors duration-500"></div>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#050505] flex items-center justify-center mb-5 sm:mb-6 border border-zinc-800/80 group-hover:border-zinc-600 transition-all duration-500">
                                    <Briefcase size={20} className="text-zinc-400 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-base sm:text-xl font-semibold text-zinc-100 mb-1 sm:mb-2">{service.title}</h3>
                                <p className="text-xs sm:text-base text-zinc-500 leading-relaxed font-light">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent my-10 sm:my-14" />

                {/* Resources / Brochures */}
                {(profile.resources && profile.resources.length > 0) && (
                    <div className="space-y-6 mb-10 sm:mb-14">
                        <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                            <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><FileText size={20} className="text-primary" /></span>
                            Resources
                        </h2>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {profile.resources.map((resource, idx) => (
                                <a
                                    key={idx}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between p-4 sm:p-5 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 group backdrop-blur-md active:scale-[0.98]"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-950 flex flex-shrink-0 items-center justify-center border border-zinc-800/80 group-hover:border-primary/50 transition-colors">
                                            <FileText size={16} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h3 className="text-sm sm:text-lg font-medium text-zinc-200 group-hover:text-white transition-colors truncate">{resource.title}</h3>
                                            <p className="text-[11px] sm:text-sm text-zinc-500 mt-0.5">{resource.type.toUpperCase()} • {resource.size}</p>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:p-3 rounded-full bg-zinc-950 border border-zinc-800/80 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all flex-shrink-0">
                                        {resource.type === 'pdf' ? (
                                            <Download size={14} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-4 sm:h-4" />
                                        ) : (
                                            <ExternalLink size={14} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-4 sm:h-4" />
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent mt-10 sm:mt-14" />
                    </div>
                )}

                {/* Bento Box Gallery */}
                <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                        <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><ImageIcon size={20} className="text-primary" /></span>
                        Selected Works
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
                        {profile.products.map((img, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl sm:rounded-3xl overflow-hidden bg-[#050505] border border-zinc-800/40 group relative ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={img}
                                    alt={`Portfolio piece ${idx + 1}`}
                                    className={`w-full h-full object-cover transition-all duration-700 ease-out 
                    ${idx !== 0 ? 'grayscale-[60%] group-hover:grayscale-0 group-hover:scale-110' : 'group-hover:scale-105'}
                  `}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent my-10 sm:my-14" />

                {/* YouTube Embed */}
                <div className="space-y-6 mb-16">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                        <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><PlayCircle size={20} className="text-primary" /></span>
                        Featured Story
                    </h2>
                    <div className="aspect-video w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-zinc-800/50 bg-[#050505] group">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${profile.youtubeVideoId}?rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="group-hover:opacity-95 opacity-80 transition-opacity duration-500 saturate-50 group-hover:saturate-100"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}
