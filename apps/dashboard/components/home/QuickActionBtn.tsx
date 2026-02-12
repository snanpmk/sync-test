interface QuickActionBtnProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  colorTheme?: 'orange' | 'blue' | 'emerald' | 'purple' | 'black';
}

const THEMES = {
  orange: {
    container:
      'bg-gradient-to-b from-white to-orange-50 border-orange-100 hover:border-orange-200 hover:shadow-orange-100/50',
    iconBg: 'bg-orange-100 text-orange-600',
    text: 'text-neutral-700 group-hover:text-orange-800',
  },
  blue: {
    container:
      'bg-gradient-to-b from-white to-blue-50 border-blue-100 hover:border-blue-200 hover:shadow-blue-100/50',
    iconBg: 'bg-blue-100 text-blue-600',
    text: 'text-neutral-700 group-hover:text-blue-800',
  },
  emerald: {
    container:
      'bg-gradient-to-b from-white to-emerald-50 border-emerald-100 hover:border-emerald-200 hover:shadow-emerald-100/50',
    iconBg: 'bg-emerald-100 text-emerald-600',
    text: 'text-neutral-700 group-hover:text-emerald-800',
  },
  purple: {
    container:
      'bg-gradient-to-b from-white to-purple-50 border-purple-100 hover:border-purple-200 hover:shadow-purple-100/50',
    iconBg: 'bg-purple-100 text-purple-600',
    text: 'text-neutral-700 group-hover:text-purple-800',
  },
  black: {
    container:
      'bg-gradient-to-b from-white to-neutral-50 border-neutral-100 hover:border-neutral-200 hover:shadow-neutral-100/50',
    iconBg: 'bg-neutral-100 text-neutral-600',
    text: 'text-neutral-700 group-hover:text-black',
  },
};

export function QuickActionBtn({
  icon,
  label,
  onClick,
  colorTheme = 'black',
}: QuickActionBtnProps) {
  const theme = THEMES[colorTheme] || THEMES.black;

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-4 rounded-3xl border transition-all duration-300 group cursor-pointer active:scale-95 shadow-sm hover:shadow-lg h-full relative overflow-hidden ${theme.container}`}
    >
      {/* Glossy shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div
        className={`p-3.5 rounded-2xl shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ${theme.iconBg}`}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-bold tracking-wide transition-colors ${theme.text}`}
      >
        {label}
      </span>
    </button>
  );
}
