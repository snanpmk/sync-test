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
      <div className="bg-[#222222] rounded-[24px] p-6 flex flex-col justify-between shadow-xl border border-white/5 transition-all duration-300 group cursor-pointer h-full">
        <div className="flex justify-between items-start mb-2">
          <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider">{label}</p>
          <div className="flex items-center gap-1 text-[#beee02] text-xs font-bold">
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
            className="text-[13px] font-bold text-[#beee02] flex items-center gap-1.5 transition-all hover:gap-2 uppercase tracking-wide"
          >
            {link}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-5 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full relative overflow-hidden">
      {/* Soft gradient background blob for emotion */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${theme.bg} opacity-50 blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity`}
      />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-3 rounded-2xl transition-colors ${theme.iconBg}`}>
          {icon}
        </div>
        {isGrowth ? (
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full border ${theme.badge} shadow-sm`}
          >
            {value}
          </span>
        ) : (
          <span
            className={`flex items-center text-xs font-bold px-2 py-1 rounded-full border gap-1 ${theme.badge} shadow-sm`}
          >
            <ArrowUpRight size={12} strokeWidth={3} /> {trend}
          </span>
        )}
      </div>
      <div className="relative z-10">
        <p className="text-[11px] font-bold uppercase tracking-wider mb-1">
          {label}
        </p>
        <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
          {isGrowth ? (
            trend
          ) : isNumeric ? (
            <CountUp end={numericValue} suffix={suffix} decimals={decimals} />
          ) : (
            value
          )}
        </h3>
        <button
          onClick={onAction}
          className={`text-xs font-semibold ${theme.text} mt-3 flex items-center gap-1.5 transition-colors group/btn opacity-80 group-hover:opacity-100`}
        >
          {link}{' '}
          <span className="bg-white rounded-full p-0.5 shadow-sm">
            <ChevronRight
              size={10}
              strokeWidth={3}
              className="group-hover/btn:translate-x-0.5 transition-transform"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
