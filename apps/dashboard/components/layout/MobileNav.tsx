'use client';

import { Home, BarChart3, Users, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <nav className="bg-[#222222] rounded-full p-2 shadow-2xl flex items-center gap-2 border border-white/5">
        <MobileNavItem
          icon={<Home size={24} />}
          label="Home"
          isActive={isActive('/home')}
          href="/home"
          rounded="rounded-2xl"
        />
        <MobileNavItem
          icon={<BarChart3 size={24} />}
          label="Insights"
          isActive={isActive('/insights')}
          href="/insights"
          rounded="rounded-2xl"
        />
        <MobileNavItem
          icon={<Users size={24} />}
          label="Network"
          isActive={isActive('/connections')}
          href="/connections"
          rounded="rounded-2xl"
        />
        <MobileNavItem
          icon={<UserCircle size={24} />}
          label="Profile"
          isActive={isActive('/account')}
          href="/account"
          rounded="rounded-full"
          isProfile={true}
        />
      </nav>
    </div>
  );
}

function MobileNavItem({
  icon,
  label,
  isActive,
  href,
  rounded = 'rounded-full',
  isProfile = false,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  href: string;
  rounded?: string;
  isProfile?: boolean;
}) {
  // Profile button has a special "White" state when inactive, based on the reference image
  // But strict palette request says "use colors in the palette".
  // Palette White is #FFFFFF or #F9F8F6 (Neutral-50).
  // Let's use #F9F8F6 (Neutral-50) for the Profile inactive state to match "Picture" look but stay in palette.
  // Active state remains Lime.

  const inactiveClass = isProfile
    ? 'bg-white text-black hover:bg-neutral-100'
    : 'bg-[#4c4c4c] text-neutral-300 hover:bg-neutral-600 hover:text-white';

  return (
    <Link
      href={href}
      className={`relative w-14 h-14 flex items-center justify-center transition-all duration-300 ${rounded} ${isActive
        ? 'bg-[#beee02] text-black shadow-[0_0_15px_rgba(190,238,2,0.4)] scale-110 z-10'
        : inactiveClass
        }`}
    >
      <div className="relative z-10">
        {icon}
      </div>
    </Link>
  );
}

