'use client';

import { Youtube, Image as ImageIcon, Trash2, Plus, MousePointer2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function MediaTab() {
    return (
        <div className="space-y-8">
            <SectionHeader
                title="Featured Media"
                description="Showcase high-value content like YouTube videos and galleries."
                icon={<Youtube size={22} />}
            />

            <Card>
                <h3 className="font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Youtube size={18} className="text-primary" />
                    YouTube Video Feature
                </h3>
                <div className="space-y-4">
                    <Input label="Video URL" placeholder="https://youtube.com/watch?v=..." />
                    <div className="aspect-video rounded-3xl bg-neutral-100 flex items-center justify-center border-2 border-dashed border-neutral-200">
                        <p className="text-xs font-bold text-neutral-400">
                            Video Preview Placeholder
                        </p>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                        <ImageIcon size={18} className="text-neutral-900" />
                        Visual Showcase Gallery
                    </h3>
                    <Button variant="ghost" size="sm">
                        Clear All
                    </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[1, 2, 3].map((n) => (
                        <div
                            key={n}
                            className="aspect-square rounded-2xl bg-neutral-100 relative group overflow-hidden"
                        >
                            <img
                                src={`https://images.unsplash.com/photo-1${n === 1 ? '58655146-d09347e92766' : n === 2 ? '5550663301-3e0472bea23d' : '551733694318-ad057fbb8972'}?q=80&w=200&auto=format&fit=crop`}
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                    <button className="aspect-square rounded-2xl border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-all gap-1">
                        <Plus size={20} />
                        <span className="text-[9px] font-black uppercase tracking-wide">
                            Upload
                        </span>
                    </button>
                </div>
            </Card>

            <Card>
                <h3 className="font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <MousePointer2 size={18} className="text-primary" />
                    Custom Buttons (CTA)
                </h3>
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 border border-neutral-100 rounded-2xl bg-neutral-50 items-center">
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-bold text-neutral-900">
                                Book a meeting
                            </p>
                            <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
                                calendly.com/alex
                            </p>
                        </div>
                        <button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors">
                            <Trash2 size={16} />
                        </button>
                    </div>
                    <Button
                        variant="secondary"
                        className="w-full py-4 border-2 border-dashed border-neutral-200 bg-white hover:border-neutral-900 text-neutral-400"
                    >
                        + Add Custom Button
                    </Button>
                </div>
            </Card>
        </div>
    );
}
