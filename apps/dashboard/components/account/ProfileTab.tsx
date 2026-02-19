'use client';

import { User, Camera, Image as ImageIcon } from 'lucide-react';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';

export function ProfileTab() {
    return (
        <div className="space-y-6">
            <h2 className="text-base font-black text-neutral-900 mb-4">
                Update Your Profile
            </h2>

            {/* Photos Section */}
            <div className="bg-[#F2F2F2] rounded-[32px] p-6 space-y-8">
                <div className="space-y-3">
                    <label className="text-xs font-bold text-neutral-500 ml-1">
                        Profile Photo
                    </label>
                    <div className="relative w-24 h-24">
                        <div className="w-full h-full rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden">
                            <User size={40} className="text-neutral-400" />
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-xs font-bold text-neutral-500 ml-1">
                        Cover Banner
                    </label>
                    <div className="relative h-20 w-full rounded-[24px] bg-[#D9D9D9] flex items-center justify-center overflow-hidden">
                        <ImageIcon size={24} className="text-neutral-400" />
                    </div>
                </div>
            </div>

            {/* Main Fields Section */}
            <div className="bg-[#F2F2F2] rounded-[32px] p-6 space-y-6">
                <Input label="Full Name" placeholder="Alex Rodriguez" />
                <Input label="Job Title" placeholder="Creative Director" />
                <Input label="Company Name" placeholder="SynConnect Studios" />
                <Textarea
                    label="Short Bio"
                    placeholder="Helping brands scale their digital products with high-end design systems and smart insights."
                />
            </div>

            {/* Contact Section */}
            <div className="bg-[#F2F2F2] rounded-[32px] p-6 space-y-6">
                <Input label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
                <Input label="Email Address" placeholder="alex@synconnect.me" type="email" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
                <Button variant="dark" className="flex-1">
                    Discard
                </Button>
                <Button variant="primary" className="flex-1">
                    Save Profile
                </Button>
            </div>
        </div>
    );
}
