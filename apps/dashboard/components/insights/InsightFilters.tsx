'use client';

import { motion } from 'framer-motion';

type Period = 'daily' | 'weekly' | 'monthly' | 'six_months';

interface InsightFiltersProps {
  activePeriod: Period;
  onChange: (period: Period) => void;
}

const periods: { value: Period; label: string }[] = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'six_months', label: '6 Months' },
];

export function InsightFilters({
  activePeriod,
  onChange,
}: InsightFiltersProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-[#222222] rounded-full w-full sm:w-fit overflow-hidden">
      {periods.map((period) => {
        const isActive = activePeriod === period.value;
        return (
          <button
            key={period.value}
            onClick={() => onChange(period.value)}
            className={`
              relative flex-1 sm:flex-none px-2 sm:px-6 py-2.5 text-[9px] sm:text-[11px] font-black uppercase tracking-tight sm:tracking-widest rounded-full transition-all duration-300 z-10 whitespace-nowrap
              ${isActive ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="insightFilterBg"
                className="absolute inset-0 bg-[#beee02] rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {period.label}
          </button>
        );
      })}
    </div>
  );
}
