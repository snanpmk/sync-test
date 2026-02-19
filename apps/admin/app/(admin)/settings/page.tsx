'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Settings as SettingsIcon, Globe, Shield, Palette, Save } from 'lucide-react';

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: 'SynConnect',
        supportEmail: 'support@synconnect.com',
        accentColor: '#CCFF00',
        enableTwoFactor: true,
        maintenanceMode: false
    });

    const handleSave = () => {
        // Mock save action
        alert('Settings saved successfully!');
    };

    return (
        <div className="space-y-6 md:space-y-8 pb-20">
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">Settings</h1>
                <p className="text-neutral-500 mt-1 font-medium text-sm md:text-base">Configure platform branding and security.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Navigation - could be tabs but we'll use a sidebar style for settings */}
                <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                    <SettingsTab icon={<Globe size={18} />} label="General" active />
                    <SettingsTab icon={<Palette size={18} />} label="Branding" />
                    <SettingsTab icon={<Shield size={18} />} label="Security" />
                </div>

                {/* Main Settings Content */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                    {/* General Section */}
                    <section className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-neutral-100 rounded-xl shrink-0">
                                <Globe size={20} className="text-neutral-900" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900">General Configuration</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <Input
                                label="Site Name"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                            />
                            <Input
                                label="Support Email"
                                value={settings.supportEmail}
                                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2 pt-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Maintenance Mode</label>
                            <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-100 rounded-2xl">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-neutral-900">Maintenance Mode</p>
                                    <p className="text-xs text-neutral-400 truncate">Temporarily disable access to the platform.</p>
                                </div>
                                <button
                                    onClick={() => setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}
                                    className={`w-12 h-6 shrink-0 rounded-full transition-colors relative ${settings.maintenanceMode ? 'bg-red-500' : 'bg-neutral-200'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.maintenanceMode ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Branding Section */}
                    <section className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-neutral-100 rounded-xl shrink-0">
                                <Palette size={20} className="text-neutral-900" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900">Branding & Theme</h3>
                        </div>

                        <div className="space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Primary Accent Color</p>
                            <div className="flex flex-wrap gap-4">
                                {['#CCFF00', '#FF3B30', '#007AFF', '#5856D6', '#FF9500'].map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSettings({ ...settings, accentColor: color })}
                                        className={`w-12 h-12 rounded-2xl border-4 transition-all hover:scale-105 active:scale-95 ${settings.accentColor === color ? 'border-neutral-900 scale-110 shadow-lg shadow-black/5' : 'border-transparent'}`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1 mb-3">Platform Logo</p>
                            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 border-2 border-dashed border-neutral-100 rounded-[24px] hover:border-primary/50 transition-colors">
                                <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-200 shrink-0">
                                    <Palette size={24} />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-sm font-bold text-neutral-900">Click to upload new logo</p>
                                    <p className="text-xs text-neutral-400">PNG, SVG or JPG (max. 2MB)</p>
                                </div>
                                <Button variant="outline" className="sm:ml-auto text-[10px] font-bold py-2 px-4 uppercase tracking-widest">Upload</Button>
                            </div>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-neutral-100 rounded-xl shrink-0">
                                <Shield size={20} className="text-neutral-900" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900">Security & Authentication</h3>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-100 rounded-2xl">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-neutral-900">Two-Factor Authentication</p>
                                <p className="text-xs text-neutral-400 truncate">Require a security code for all admin logins.</p>
                            </div>
                            <button
                                onClick={() => setSettings({ ...settings, enableTwoFactor: !settings.enableTwoFactor })}
                                className={`w-12 h-6 shrink-0 rounded-full transition-colors relative ${settings.enableTwoFactor ? 'bg-primary' : 'bg-neutral-200'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.enableTwoFactor ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                    </section>

                    <div className="flex justify-end pt-4">
                        <Button onClick={handleSave} className="gap-2 px-8 py-4 text-base shadow-lg shadow-primary/20">
                            <Save size={20} />
                            <span>Save All Changes</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SettingsTab({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <button className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-white border border-neutral-200 shadow-sm text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50'}`}>
            <span className={active ? 'text-primary' : ''}>{icon}</span>
            <span className="text-sm uppercase tracking-widest font-black">{label}</span>
        </button>
    );
}
