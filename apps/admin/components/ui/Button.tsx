'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-black shadow-xl shadow-primary/10 hover:shadow-primary/20',
            secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
            outline: 'bg-transparent border border-white/10 text-neutral-400 hover:text-white hover:border-white/20',
            ghost: 'bg-transparent text-neutral-400 hover:text-white hover:bg-white/5',
            danger: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
        };

        const sizes = {
            sm: 'px-4 py-2 text-xs',
            md: 'px-6 py-3 text-sm',
            lg: 'px-8 py-4 text-base',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-2xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
