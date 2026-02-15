import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { CountUp } from '../ui/CountUp';

export interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  link: string;
  isGrowth?: boolean;
  onAction?: () => void;
  colorTheme?: 'blue' | 'indigo' | 'purple' | 'emerald' | 'orange';
  variant?: 'light' | 'dark';
}

const THEME_STYLES = {
  blue: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-900',
    ring: 'ring-neutral-100',
    border: 'border-neutral-100',
    badge: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    iconBg: 'bg-neutral-100 text-neutral-900',
  },
  indigo: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-900',
    ring: 'ring-neutral-100',
    border: 'border-neutral-100',
    badge: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    iconBg: 'bg-neutral-100 text-neutral-900',
  },
  purple: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-900',
    ring: 'ring-neutral-100',
    border: 'border-neutral-100',
    badge: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    iconBg: 'bg-neutral-100 text-neutral-900',
  },
  emerald: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-900',
    ring: 'ring-neutral-100',
    border: 'border-neutral-100',
    badge: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    iconBg: 'bg-neutral-100 text-neutral-900',
  },
  orange: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-900',
    ring: 'ring-neutral-100',
    border: 'border-neutral-100',
    badge: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    iconBg: 'bg-neutral-100 text-neutral-900',
  },
};

export function MetricCard({
  icon,
  label,
  value,
  trend,
  link,
  isGrowth,
  onAction,
  colorTheme = 'blue',
  variant = 'light',
}: MetricCardProps) {
  // Parse numeric value for animation if possible
  const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
  const isNumeric = !isNaN(numericValue);
  const suffix = value.includes('%') ? '%' : '';
  const decimals = value.includes('.') ? value.split('.')[1].replace(/[^0-9]/g, '').length : 0;

  const theme = THEME_STYLES[colorTheme];

  if (variant === 'dark') {
    return (
      <div className="bg-[#222222]  rounded-[24px] p-6 flex flex-col justify-between shadow-xl border border-white/5 transition-all duration-300 group cursor-pointer h-full">
        <div className="flex justify-between items-start mb-2">
          <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider">{label}</p>
          <div className="flex items-center gap-1 text-primary text-xs font-bold">
            <ArrowUpRight size={14} strokeWidth={3} /> {trend}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-4xl font-extrabold text-white tracking-tight">
            {isNumeric ? (
              <CountUp end={numericValue} suffix={suffix} decimals={decimals} />
            ) : (
              value
            )}
          </h3>
        </div>

        <div className="mt-auto border-t border-white/10 pt-4">
          <button
            onClick={onAction}
            className="text-[13px] font-bold text-primary flex items-center gap-1.5 transition-all hover:gap-2 uppercase tracking-wide"
          >
            {link}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[28px] p-6 flex flex-col justify-center h-full shadow-sm border border-neutral-100/50 hover:shadow-md transition-all duration-300 group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center text-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">
            {label}
          </p>
          <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
            {isNumeric ? (
              <CountUp end={numericValue} suffix={suffix} decimals={decimals} />
            ) : (
              value
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}
