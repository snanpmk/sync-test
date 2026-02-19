'use client';

import { useState } from 'react';
import { SynConnectLogoDark } from '@synconnect/ui';
import { Menu, X, Home, Users, ShoppingBag, Package, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { icon: <Home size={20} />, label: 'Overview', href: '/' },
        { icon: <Users size={20} />, label: 'Users', href: '/users' },
        { icon: <ShoppingBag size={20} />, label: 'Orders', href: '/orders' },
        { icon: <Package size={20} />, label: 'Inventory', href: '/inventory' },
        { icon: <Settings size={20} />, label: 'Settings', href: '/settings' },
    ];

    return (
        <div className="lg:hidden">
            <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-50 flex items-center justify-between px-4">
                <SynConnectLogoDark className="h-6 w-auto" />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Menu</span>
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-neutral-50 rounded-lg">
                                    <X size={20} />
                                </button>
                            </div>

                            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                                {menuItems.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${isActive
                                                ? 'bg-primary text-black font-bold shadow-lg shadow-primary/20'
                                                : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                                                }`}
                                        >
                                            {item.icon}
                                            <span className="text-sm font-bold">{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="p-6 border-t border-neutral-100">
                                <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all">
                                    <LogOut size={20} />
                                    <span className="text-sm font-bold">Logout</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            {/* Spacer for fixed header */}
            <div className="h-16" />
        </div>
    );
}
