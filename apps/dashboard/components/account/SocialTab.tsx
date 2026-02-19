'use client';

import { useState } from 'react';
import { Instagram, Linkedin, Twitter, Trash2, Plus, Link as LinkIcon, Globe, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface SocialLink {
    id: string;
    platform: string;
    handle: string;
    enabled: boolean;
    icon: any;
}

const PLATFORMS = [
    { name: 'Instagram', icon: Instagram },
    { name: 'Linkedin', icon: Linkedin },
    { name: 'Twitter', icon: Twitter },
    { name: 'Website', icon: Globe },
];

export function SocialTab() {
    const [socials, setSocials] = useState<SocialLink[]>([
        {
            id: '1',
            platform: 'Instagram',
            handle: '@alex_designs',
            enabled: true,
            icon: <Instagram size={20} className="text-black" />,
        },
        {
            id: '2',
            platform: 'Linkedin',
            handle: '@alex-rodriquez',
            enabled: true,
            icon: <Linkedin size={20} className="text-black" />,
        },
        {
            id: '3',
            platform: 'Twitter',
            handle: '@alex_designs',
            enabled: false,
            icon: <Twitter size={20} className="text-black" />,
        },
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [newHandle, setNewHandle] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState(PLATFORMS[0]);

    const toggleSocial = (id: string) => {
        setSocials(
            socials.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
        );
    };

    const deleteSocial = (id: string) => {
        setSocials(socials.filter((s) => s.id !== id));
    };

    const addSocial = () => {
        if (!newHandle) return;

        const newLink: SocialLink = {
            id: Math.random().toString(36).substr(2, 9),
            platform: selectedPlatform.name,
            handle: newHandle.startsWith('@') || newHandle.startsWith('http') ? newHandle : `@${newHandle}`,
            enabled: true,
            icon: <selectedPlatform.icon size={20} className="text-black" />,
        };

        setSocials([...socials, newLink]);
        setNewHandle('');
        setIsAdding(false);
    };

    return (
        <div className="space-y-8">
            {/* Tab Header Section */}
            <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#222222] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <LinkIcon size={24} className="text-white" />
                </div>
                <div className="pt-1">
                    <h2 className="text-lg font-black text-neutral-900 tracking-tight">
                        Social Media Links
                    </h2>
                    <p className="text-sm font-bold text-neutral-400 mt-0.5">
                        Manage which social platforms are visible on your profile.
                    </p>
                </div>
            </div>

            {/* Social Cards */}
            <div className="space-y-3">
                {socials.map((social) => (
                    <div
                        key={social.id}
                        className="bg-[#1A1A1A] rounded-[24px] p-5 flex items-center justify-between gap-4 group transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                                {social.icon}
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-white tracking-tight">
                                    {social.platform}
                                </h4>
                                <p className="text-[11px] font-bold text-neutral-500">
                                    {social.handle}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => deleteSocial(social.id)}
                                className="text-[#EB5757] hover:scale-110 active:scale-95 transition-all"
                            >
                                <Trash2 size={18} />
                            </button>
                            <button
                                onClick={() => toggleSocial(social.id)}
                                className={`relative w-11 h-6 rounded-full transition-colors duration-200 outline-none ${social.enabled ? 'bg-primary' : 'bg-[#333333]'}`}
                            >
                                <div
                                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm ${social.enabled ? 'left-6' : 'left-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add New Logic */}
            {isAdding ? (
                <div className="bg-[#F9F9F9] rounded-[32px] p-6 border-2 border-dashed border-neutral-200 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-black uppercase tracking-widest text-neutral-900">Add New Link</h3>
                        <button onClick={() => setIsAdding(false)} className="text-neutral-400 hover:text-black">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {PLATFORMS.map((p) => (
                            <button
                                key={p.name}
                                onClick={() => setSelectedPlatform(p)}
                                className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all border-2 ${selectedPlatform.name === p.name ? 'border-primary bg-primary/5 text-neutral-900' : 'border-transparent bg-neutral-100 text-neutral-400'}`}
                            >
                                <p.icon size={20} />
                                <span className="text-[10px] font-black uppercase tracking-tight">{p.name}</span>
                            </button>
                        ))}
                    </div>

                    <Input
                        placeholder={selectedPlatform.name === 'Website' ? 'https://example.com' : 'Username / ID'}
                        value={newHandle}
                        onChange={(e) => setNewHandle(e.target.value)}
                        label={`Your ${selectedPlatform.name} ${selectedPlatform.name === 'Website' ? 'URL' : 'Handle'}`}
                    />

                    <div className="flex gap-3">
                        <Button variant="dark" className="flex-1" onClick={addSocial}>
                            Confirm & Add
                        </Button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsAdding(true)}
                    className="w-full py-6 border-2 border-dashed border-neutral-200 rounded-full flex items-center justify-center gap-2 hover:border-neutral-400 bg-white active:scale-[0.98] transition-all"
                >
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                        ADD NEW SOCIAL PLATFORM
                    </span>
                </button>
            )}
        </div>
    );
}
