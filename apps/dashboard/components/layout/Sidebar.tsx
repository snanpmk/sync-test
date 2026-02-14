'use client';

import { SynConnectLogo } from '@synconnect/ui';
import { motion } from 'framer-motion';
import { Home, BarChart3, Users, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <aside className="hidden lg:flex w-72 border-r border-white/5 bg-[#0a0a0a] flex-col h-full">
      <div className="p-8">
        <SynConnectLogo className="h-8 w-auto text-white" />
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          isActive={isActive('/home')}
          href="/home"
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Insights"
          isActive={isActive('/insights')}
          href="/insights"
        />
        <NavItem
          icon={<Users size={20} />}
          label="Connections"
          isActive={isActive('/connections')}
          href="/connections"
        />
        <NavItem
          icon={<UserCircle size={20} />}
          label="Account"
          isActive={isActive('/account')}
          href="/account"
        />
      </nav>

      <motion.div
        layoutId="nav-glow"
        className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(190,238,2,0.6)]"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <div className="p-4 border-t border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
            <span className="font-bold text-primary">SC</span>
          </div>
          <div>
            <p className="text-sm font-medium">SynConnect User</p>
            <p className="text-xs text-neutral-400">Pro Plan</p>
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
      className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-[20px] transition-all duration-300 group ${isActive
        ? 'bg-primary text-black font-black shadow-lg shadow-primary/15 translate-x-1'
        : 'text-neutral-400 hover:text-white hover:bg-white/5'
        }`}
    >
      <span
        className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
      >
        {icon}
      </span>
      <span className="text-sm font-bold tracking-tight">{label}</span>
    </Link>
  );
}

