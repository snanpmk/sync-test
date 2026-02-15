'use client';

import { SynConnectLogo, SynConnectLogoLight } from '@synconnect/ui';
import { motion } from 'framer-motion';
import { Home, BarChart3, Users, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || (path !== '/' && pathname?.startsWith(path));

  return (
    <aside className="hidden lg:flex w-72 bg-brand-black flex-col h-full rounded-[40px] shadow-2xl overflow-hidden">
      {/* Logo Section */}
      <div className="p-10">
        <SynConnectLogoLight />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-3">
        <NavItem
          icon={<Home size={22} />}
          label="Home"
          isActive={isActive('/home')}
          href="/home"
        />
        <NavItem
          icon={<BarChart3 size={22} />}
          label="Insights"
          isActive={isActive('/insights')}
          href="/insights"
        />
        <NavItem
          icon={<Users size={22} />}
          label="Connections"
          isActive={isActive('/connections')}
          href="/connections"
        />
        <NavItem
          icon={<UserCircle size={22} />}
          label="Account"
          isActive={isActive('/account')}
          href="/account"
        />
      </nav>

      {/* User Profile Hook */}
      <div className="p-6 mt-auto">
        <div className="bg-[#151515] rounded-[32px] p-5 group cursor-pointer hover:bg-[#1c1c1c] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
              <span className="text-neutral-500 font-bold text-xs">SC</span>
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[14px] font-bold text-white truncate">SynConnect User</p>
              <p className="text-[10px] text-[#CCFF00] font-black uppercase tracking-widest mt-0.5">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
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
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-[24px] transition-all duration-300 relative group ${isActive
        ? 'bg-[#CCFF00] text-black font-bold'
        : 'text-neutral-500 hover:text-white hover:bg-white/5'
        }`}
    >
      <span className={`${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
        {icon}
      </span>
      <span className="text-[16px] font-bold tracking-tight">{label}</span>
      {isActive && (
        <motion.div
          layoutId="active-nav-dot"
          className="ml-auto w-1.5 h-1.5 bg-black rounded-full"
        />
      )}
    </Link>
  );
}
