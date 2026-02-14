'use client';

import { PenSquare, Share2, Copy, Download } from 'lucide-react';
import { QuickActionBtn } from './QuickActionBtn';

export function QuickActions() {
    const handleShare = () => {
        // Basic clipboard sharing logic
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.origin + '/profile/alex');
            alert('Profile link copied to clipboard!');
        }
    };

    return (
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <QuickActionBtn
                icon={<PenSquare size={20} />}
                label="Edit Profile"
                href="/account"
                colorTheme="orange"
            />
            <QuickActionBtn
                icon={<Share2 size={20} />}
                label="Share Profile"
                onClick={handleShare}
                colorTheme="blue"
            />
            <QuickActionBtn
                icon={<Copy size={20} />}
                label="Copy Link"
                onClick={() => {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(
                            window.location.origin + '/profile/alex'
                        );
                        alert('Link copied!');
                    }
                }}
                colorTheme="emerald"
            />
            <QuickActionBtn
                icon={<Download size={20} />}
                label="Download QR"
                onClick={() => alert('Downloading QR Code...')}
                colorTheme="purple"
            />
        </section>
    );
}
