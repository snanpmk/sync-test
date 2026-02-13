'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SynConnectLogo } from '@synconnect/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'How it Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <SynConnectLogo className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-white/70'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/cart"
            className="relative p-2 text-white/70 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 bg-primary text-black text-[8px] sm:text-[10px] font-black rounded-full flex items-center justify-center">
              1
            </span>
          </Link>

          <Link
            href="/shop"
            className="hidden sm:block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/95 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold transition-colors ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setIsOpen(false)}
                className="w-full text-center rounded-2xl bg-primary py-4 text-black font-black"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
