'use client';

import { Layers, Wrench, Trash2, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';

export function CRMTab() {
    return (
        <div className="space-y-8">
            <SectionHeader
                title="CRM Flow Settings"
                description="Customize how you categorize and manage your connection pipeline."
                icon={<Layers size={22} />}
            />

            <Card>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-neutral-900">
                            Custom Status Labels
                        </h3>
                        <button className="text-[10px] font-black uppercase bg-neutral-900 text-white px-3 py-1.5 rounded-lg active:scale-95 transition-all">
                            Add New
                        </button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { label: 'New Lead', color: '#3b82f6', count: 12 },
                            { label: 'Followed Up', color: '#10b981', count: 45 },
                            { label: 'Collaborator', color: '#8b5cf6', count: 8 },
                            { label: 'Long-term', color: '#f59e0b', count: 3 },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-all group gap-3"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-4 h-4 rounded-full shadow-sm"
                                        style={{ backgroundColor: s.color }}
                                    />
                                    <span className="text-sm font-bold text-neutral-700">
                                        {s.label}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-neutral-100">
                                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                        {s.count} Contacts
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="p-1.5 text-neutral-300 hover:text-black active:scale-90 transition-all">
                                            <Wrench size={14} />
                                        </button>
                                        <button className="p-1.5 text-neutral-300 hover:text-red-500 active:scale-90 transition-all">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>

            <Card className="bg-neutral-900 text-white border-neutral-800">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#CCFF00] text-black rounded-lg">
                        <CheckCircle2 size={18} strokeWidth={3} />
                    </div>
                    <h3 className="font-bold text-lg">Smart CRM Suggestions</h3>
                </div>
                <p className="text-neutral-400 text-sm mb-6 font-medium">
                    Auto-remind me to follow up if a contact hasn't been active for 30
                    days.
                </p>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-sm font-bold">
                        Auto-Follow Up Notifications
                    </span>
                    <button className="w-12 h-6 bg-[#CCFF00] rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full shadow-lg" />
                    </button>
                </div>
            </Card>
        </div>
    );
}
