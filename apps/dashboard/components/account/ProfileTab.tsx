'use client';

import { User, Camera, Image as ImageIcon, Phone } from 'lucide-react';
import { SectionHeader } from './SectionHeader'; // Extracted Helper
import { Card } from './Card'; // Extracted Helper

export function ProfileTab() {
    return (
        <div className="space-y-8">
            <SectionHeader
                title="Profile Information"
                description="Update your personal details and how you appear on your card."
                icon={<User size={22} />}
            />

            <Card className="px-5 py-6 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-10">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Profile Photo
                        </label>
                        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
                            <img
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                                alt="Profile"
                                className="w-full h-full rounded-[32px] object-cover ring-4 ring-neutral-50 shadow-inner"
                            />
                            <button className="absolute -bottom-2 -right-2 p-2.5 lg:p-3 bg-white rounded-2xl shadow-xl border border-neutral-100 text-neutral-900 hover:scale-110 active:scale-95 transition-all">
                                <Camera size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Cover Banner
                        </label>
                        <div className="relative aspect-video lg:aspect-3/1 rounded-[32px] overflow-hidden bg-neutral-100 group border border-neutral-50">
                            <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                                <ImageIcon size={24} />
                            </div>
                            <button className="absolute right-3 bottom-3 lg:right-4 lg:bottom-4 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/95 backdrop-blur-md rounded-xl text-[10px] lg:text-xs font-black shadow-lg hover:bg-white active:scale-95 transition-all">
                                Change Cover
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            defaultValue="Alex Rodriguez"
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-neutral-100 transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Job Title
                        </label>
                        <input
                            type="text"
                            defaultValue="Creative Director"
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-neutral-100 transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            defaultValue="SynConnect Studios"
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-neutral-100 transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Short Bio
                        </label>
                        <textarea
                            rows={3}
                            defaultValue="Helping brands scale their digital products with high-end design systems and smart insights."
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-neutral-100 transition-all outline-none resize-none"
                        />
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex items-center gap-3 mb-6">
                    <Phone size={18} className="text-neutral-400" />
                    <h3 className="font-bold text-neutral-900">Direct Contact Options</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            defaultValue="+1 (555) 000-0000"
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-neutral-100 transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue="alex@synconnect.me"
                            className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-neutral-100 transition-all outline-none"
                        />
                    </div>
                </div>
            </Card>

            <div className="flex justify-end gap-4">
                <button className="px-8 py-4 text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
                    Discard
                </button>
                <button className="px-10 py-4 bg-[#CCFF00] text-black rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[#CCFF00]/20 hover:scale-105 active:scale-95 transition-all">
                    Save Profile
                </button>
            </div>
        </div>
    );
}
