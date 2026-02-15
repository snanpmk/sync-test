'use client';

import { PenSquare, Share2, Copy, Download } from 'lucide-react';
import { QuickActionBtn } from './QuickActionBtn';

export function QuickActions() {
    const handleShare = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.origin + '/profile/alex');
            alert('Profile link copied to clipboard!');
        }
    };

    return (
        <div className="w-full">
            {/* Desktop View: Single Pill Container */}
            <div className="hidden lg:inline-flex justify-between items-center bg-[#111111] p-2 rounded-full gap-2 shadow-xl w-full">
                <QuickActionBtn
                    icon={<PenSquare size={18} strokeWidth={2.5} />}
                    label="Edit Profile"
                    href="/account"
                    variant="primary"
                />
                <div className="flex justify-between items-center gap-1 px-4 border-l border-white/10 ml-2">
                    <QuickActionBtn
                        icon={<Share2 size={18} strokeWidth={2.5} />}
                        label="Share"
                        onClick={handleShare}
                    />
                    <QuickActionBtn
                        icon={<Copy size={18} strokeWidth={2.5} />}
                        label="Copy"
                        onClick={() => {
                            if (navigator.clipboard) {
                                navigator.clipboard.writeText(window.location.origin + '/profile/alex');
                                alert('Link copied!');
                            }
                        }}
                    />
                    <QuickActionBtn
                        icon={<Download size={18} strokeWidth={2.5} />}
                        label="QR"
                        onClick={() => alert('Downloading QR Code...')}
                    />
                </div>
            </div>

            {/* Mobile View: Circular Icon Grid */}
            <div className="lg:hidden flex items-center justify-between w-full max-w-sm mx-auto">
                <QuickActionBtn
                    variant="mobile"
                    icon={<PenSquare size={20} />}
                    label="Edit Profile"
                    href="/account"
                />
                <QuickActionBtn
                    variant="mobile"
                    icon={<Share2 size={20} />}
                    label="Share Profile"
                    onClick={handleShare}
                />
                <QuickActionBtn
                    variant="mobile"
                    icon={<Copy size={20} />}
                    label="Copy Link"
                    onClick={() => {
                        if (navigator.clipboard) {
                            navigator.clipboard.writeText(window.location.origin + '/profile/alex');
                            alert('Link copied!');
                        }
                    }}
                />
                <QuickActionBtn
                    variant="mobile"
                    icon={<Download size={20} />}
                    label="Download QR"
                    onClick={() => alert('Downloading QR Code...')}
                />
            </div>
        </div>
    );
}
