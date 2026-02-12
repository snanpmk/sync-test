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
    <div className="flex items-center gap-1 p-1 bg-white border border-neutral-200 rounded-xl shadow-sm w-fit mx-auto sm:mx-0">
      {periods.map((period) => {
        const isActive = activePeriod === period.value;
        return (
          <button
            key={period.value}
            onClick={() => onChange(period.value)}
            className={`
              relative px-4 py-2 text-sm font-medium rounded-lg transition-colors z-10
              ${isActive ? 'text-black' : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="insightFilterBg"
                className="absolute inset-0 bg-primary rounded-lg -z-10"
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
