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
          icon={<Home size={24} className='' />}
          label="Home"
          isActive={isActive('/home')}
          href="/home"
          shape="pill"
        />
        <MobileNavItem
          icon={<BarChart3 size={24} />}
          label="Insights"
          isActive={isActive('/insights')}
          href="/insights"
          shape="pill"
        />
        <MobileNavItem
          icon={<Users size={24} />}
          label="Network"
          isActive={isActive('/connections')}
          href="/connections"
          shape="pill"
        />
        <MobileNavItem
          icon={<UserCircle size={24} />}
          label="Profile"
          isActive={isActive('/account')}
          href="/account"
          shape="circle"
          inactiveColor="white"
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
  shape = 'circle',
  inactiveColor = 'dark',
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  href: string;
  shape?: 'circle' | 'pill';
  inactiveColor?: 'white' | 'dark';
}) {
  // Profile button has a special "White" state when inactive
  const inactiveClass = inactiveColor === 'white'
    ? 'bg-white text-black hover:bg-neutral-100' // White theme
    : 'bg-[#4c4c4c] text-neutral-300 hover:bg-neutral-600 hover:text-white'; // Dark theme

  // Dimensions & Rounding based on shape prop
  const shapeClasses = shape === 'circle'
    ? 'w-14 h-14 rounded-full'
    : 'h-14 px-6 rounded-full';

  return (
    <Link
      href={href}
      className={`relative flex items-center justify-center transition-all duration-300 ${shapeClasses} ${isActive
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

