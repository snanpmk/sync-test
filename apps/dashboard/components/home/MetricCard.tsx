import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { CountUp } from '../ui/CountUp';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  link: string;
  isGrowth?: boolean;
  onAction?: () => void;
  colorTheme?: 'blue' | 'indigo' | 'purple' | 'emerald' | 'orange';
}

const THEME_STYLES = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    ring: 'ring-blue-100',
    border: 'border-blue-100',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    iconBg: 'bg-blue-100/50 text-blue-600',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    ring: 'ring-indigo-100',
    border: 'border-indigo-100',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    iconBg: 'bg-indigo-100/50 text-indigo-600',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    ring: 'ring-purple-100',
    border: 'border-purple-100',
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
    iconBg: 'bg-purple-100/50 text-purple-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    ring: 'ring-emerald-100',
    border: 'border-emerald-100',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    iconBg: 'bg-emerald-100/50 text-emerald-600',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    ring: 'ring-orange-100',
    border: 'border-orange-100',
    badge: 'bg-orange-50 text-orange-700 border-orange-100',
    iconBg: 'bg-orange-100/50 text-orange-600',
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
}: MetricCardProps) {
  // Parse numeric value for animation if possible
  const numericValue = parseInt(value.replace(/,/g, ''), 10);
  const isNumeric = !isNaN(numericValue);

  const theme = THEME_STYLES[colorTheme];

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
        <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-wider mb-1">
          {label}
        </p>
        <h3 className="text-3xl font-extrabold text-neutral-900 tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
          {isGrowth ? (
            trend
          ) : isNumeric ? (
            <CountUp end={numericValue} />
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
