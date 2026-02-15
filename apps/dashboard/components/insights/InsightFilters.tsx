'use client';

import { TabNav } from '../ui/TabNav';

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
    <TabNav
      tabs={periods}
      activeTab={activePeriod}
      onChange={onChange}
      layoutId="insightFilterBg"
    />
  );
}
