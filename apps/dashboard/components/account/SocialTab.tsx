'use client';

import { useState } from 'react';
import { Link as LinkIcon, Trash2, Plus, Instagram, Linkedin, Twitter } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';

interface SocialLink {
    id: string;
    platform: string;
    icon: any;
    handle: string;
    enabled: boolean;
}

export function SocialTab() {
    const [socials, setSocials] = useState<SocialLink[]>([
        {
            id: '1',
            platform: 'Instagram',
            handle: '@alex_designs',
            enabled: true,
            icon: <Instagram size={18} />,
        },
        {
            id: '2',
            platform: 'LinkedIn',
            handle: 'alex-rodriguez',
            enabled: true,
            icon: <Linkedin size={18} />,
        },
        {
            id: '3',
            platform: 'Twitter',
            handle: '@alex_rod',
            enabled: false,
            icon: <Twitter size={18} />,
        },
    ]);

    const toggleSocial = (id: string) => {
        setSocials(
            socials.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
        );
    };

    return (
        <div className="space-y-8">
            <SectionHeader
                title="Social Media Links"
                description="Manage which social platforms are visible on your profile."
                icon={<LinkIcon size={22} />}
            />

            <div className="grid grid-cols-1 gap-4">
                {socials.map((social) => (
                    <Card key={social.id} className="py-4 px-5 lg:px-6">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 lg:gap-4 flex-1">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${social.enabled ? 'bg-neutral-900 text-white shadow-lg' : 'bg-neutral-100 text-neutral-400'}`}
                                >
                                    {social.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-neutral-900 truncate">
                                        {social.platform}
                                    </p>
                                    <p className="text-[10px] lg:text-xs text-neutral-400 font-medium truncate">
                                        {social.handle}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 lg:gap-4">
                                <button className="p-2 text-neutral-300 hover:text-red-500 active:scale-90 transition-all">
                                    <Trash2 size={16} />
                                </button>
                                <button
                                    onClick={() => toggleSocial(social.id)}
                                    className={`relative w-11 h-6 lg:w-12 lg:h-6 rounded-full transition-colors duration-200 outline-none shrink-0 ${social.enabled ? 'bg-[#CCFF00]' : 'bg-neutral-200'}`}
                                >
                                    <div
                                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm ${social.enabled ? 'left-6 lg:left-7' : 'left-1'}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}

                <button className="w-full py-6 border-2 border-dashed border-neutral-200 rounded-[32px] text-neutral-400 font-black text-xs uppercase tracking-widest hover:border-neutral-900 hover:text-neutral-900 transition-all flex items-center justify-center gap-2 mt-4 bg-white">
                    <Plus size={16} /> Add New Social Platform
                </button>
            </div>
        </div>
    );
}
