'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { CountUp } from '../ui/CountUp';
import { MetricCardProps } from './MetricCard';

interface HomeInsightsCarouselProps {
    metrics: MetricCardProps[];
}

export function HomeInsightsCarousel({ metrics }: HomeInsightsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % metrics.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [metrics.length, isPaused]);

    const currentMetric = metrics[currentIndex];
    // Helper to parse numeric value for animation if possible
    const numericValue = parseFloat(currentMetric.value.replace(/[^0-9.-]/g, ''));
    const isNumeric = !isNaN(numericValue);
    const suffix = currentMetric.value.includes('%') ? '%' : '';
    const decimals = currentMetric.value.includes('.') ? currentMetric.value.split('.')[1].replace(/[^0-9]/g, '').length : 0;

    return (
        <div
            className="w-full bg-[#1c1c1c] rounded-[32px] p-6 relative overflow-hidden shadow-xl border border-neutral-800"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Top Tab Navigation */}
            <div className="flex items-center gap-3 mb-4 relative z-10 px-1">
                {metrics.map((metric, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`
                h-8 px-5 rounded-2xl flex items-center justify-center transition-all duration-300
                ${isActive
                                    ? 'bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                                    : 'bg-white text-black hover:bg-neutral-200'}
              `}
                            aria-label={`Show ${metric.label}`}
                        >
                            {metric.icon}
                        </button>
                    );
                })}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-800 mb-4 relative z-10" />

            {/* Content Area */}
            <div className="relative z-10 min-h-[100px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider">
                                {currentMetric.label}
                            </p>
                            {/* Trend Badge */}
                            {currentMetric.isGrowth ? (
                                <span className="text-xs font-bold text-[#ccff00]">
                                    {currentMetric.trend}
                                </span>
                            ) : (
                                <span className="text-xs font-bold text-neutral-400 flex items-center gap-1">
                                    <ArrowUpRight size={12} strokeWidth={3} /> {currentMetric.trend}
                                </span>
                            )}
                        </div>

                        <h3 className="text-5xl font-black w-full text-center text-white tracking-tight mt-1">
                            {currentMetric.isGrowth ? (
                                currentMetric.value
                            ) : isNumeric ? (
                                <CountUp end={numericValue} suffix={suffix} decimals={decimals} />
                            ) : (
                                currentMetric.value
                            )}
                        </h3>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Link */}
            <div className="mt-6 pt-4 border-t border-neutral-800 relative z-10">
                <button
                    onClick={currentMetric.onAction}
                    className="text-sm font-bold text-[#ccff00] flex items-center gap-1 hover:gap-2 transition-all group"
                >
                    {currentMetric.link}
                    <ChevronRight size={14} strokeWidth={3} className="text-[#ccff00]" />
                </button>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ccff00] opacity-5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}
