'use client';

import { InputHTMLAttributes, forwardRef, TextareaHTMLAttributes } from 'react';
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
                    <label className="text-xs font-bold text-neutral-500 ml-1">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full px-5 py-3.5 bg-[#D9D9D9] border-none rounded-full text-sm font-bold text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/20 transition-all',
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

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="space-y-2 w-full">
                {label && (
                    <label className="text-xs font-bold text-neutral-500 ml-1">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={cn(
                        'w-full px-5 py-4 bg-[#D9D9D9] border-none rounded-[24px] text-sm font-bold text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/20 transition-all resize-none',
                        className
                    )}
                    {...props}
                />
                {error && <p className="text-[10px] text-red-500 font-bold ml-1">{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
