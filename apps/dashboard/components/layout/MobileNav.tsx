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
      <nav className="bg-black rounded-full px-6 py-3 shadow-2xl flex items-center gap-8 border border-white/10">
        <MobileNavItem
          icon={<Home size={22} />}
          label="Home"
          isActive={isActive('/home')}
          href="/home"
        />
        <MobileNavItem
          icon={<BarChart3 size={22} />}
          label="Insights"
          isActive={isActive('/insights')}
          href="/insights"
        />
        <MobileNavItem
          icon={<Users size={22} />}
          label="Network"
          isActive={isActive('/connections')}
          href="/connections"
        />
        <MobileNavItem
          icon={<UserCircle size={22} />}
          label="Profile"
          isActive={isActive('/account')}
          href="/account"
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
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="relative flex flex-col items-center justify-center group"
    >
      <div
        className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'text-white/70 hover:text-white'
          }`}
      >
        {icon}
      </div>
      {isActive && (
        <motion.div
          layoutId="nav-glow"
          className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(103,216,97,0.6)]"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}

