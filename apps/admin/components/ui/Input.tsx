'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="space-y-2 w-full">
                {label && (
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-600 ml-1">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full px-5 py-3.5 bg-white border border-neutral-300 rounded-2xl text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-primary focus:bg-white transition-all font-inter',
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-[10px] text-red-500 font-bold ml-1">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
