'use client';

import { SynConnectLogoDark } from '@synconnect/ui';
import { motion } from 'framer-motion';
import { Home, Users, ShoppingBag, Package, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Sidebar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path || (path !== '/' && pathname?.startsWith(path));

    return (
        <aside className="hidden lg:flex w-72 bg-white flex-col h-screen border-r border-neutral-200">
            {/* Logo Section */}
            <div className="p-10">
                <SynConnectLogoDark className="h-8 w-auto text-black" />
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.2em] mt-2">Admin Portal</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2">
                <NavItem
                    icon={<Home size={20} />}
                    label="Overview"
                    isActive={isActive('/')}
                    href="/"
                />
                <div className="pt-4 pb-2 px-6">
                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Management</p>
                </div>
                <NavItem
                    icon={<Users size={20} />}
                    label="User Management"
                    isActive={isActive('/users')}
                    href="/users"
                />
                <NavItem
                    icon={<ShoppingBag size={20} />}
                    label="Order Management"
                    isActive={isActive('/orders')}
                    href="/orders"
                />
                <NavItem
                    icon={<Package size={20} />}
                    label="Inventory"
                    isActive={isActive('/inventory')}
                    href="/inventory"
                />
            </nav>

            {/* Footer Actions */}
            <div className="p-4 mt-auto border-t border-neutral-200 space-y-1">
                <NavItem
                    icon={<Settings size={20} />}
                    label="Settings"
                    isActive={isActive('/settings')}
                    href="/settings"
                />
                <button className="w-full flex items-center gap-4 px-6 py-3 rounded-xl text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300 group">
                    <LogOut size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold">Logout</span>
                </button>
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
            className={cn(
                "w-full flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 relative group",
                isActive
                    ? "bg-primary text-black font-bold shadow-[0_4px_20px_rgba(204,255,0,0.4)]"
                    : "text-neutral-500 hover:text-black hover:bg-neutral-100"
            )}
        >
            <span className={cn("transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")}>
                {icon}
            </span>
            <span className="text-sm font-bold tracking-tight">{label}</span>
            {isActive && (
                <motion.div
                    layoutId="active-nav-indicator"
                    className="ml-auto w-1.5 h-1.5 bg-black rounded-full"
                />
            )}
        </Link>
    );
}
