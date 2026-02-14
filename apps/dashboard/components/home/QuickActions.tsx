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
        <section className="flex items-center justify-between gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            <QuickActionBtn
                icon={<PenSquare color='#beee02' size={20} />}
                label="Edit Profile"
                href="/account"
            />
            <QuickActionBtn
                icon={<Share2 color='#beee02' size={20} />}
                label="Share Profile"
                onClick={handleShare}
            />
            <QuickActionBtn
                icon={<Copy color='#beee02' size={20} />}
                label="Copy Link"
                onClick={() => {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(
                            window.location.origin + '/profile/alex'
                        );
                        alert('Link copied!');
                    }
                }}
            />
            <QuickActionBtn
                icon={<Download color='#beee02' size={20} />}
                label="Download QR"
                onClick={() => alert('Downloading QR Code...')}
            />
        </section>
    );
}
