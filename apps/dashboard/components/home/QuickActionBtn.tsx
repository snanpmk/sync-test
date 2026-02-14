interface QuickActionBtnProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  colorTheme?: 'orange' | 'blue' | 'emerald' | 'purple' | 'black';
}

const THEME_STYLES = {
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-100',
    hover: 'hover:bg-orange-100',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-100',
    hover: 'hover:bg-blue-100',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-100',
    hover: 'hover:bg-indigo-100',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-100',
    hover: 'hover:bg-purple-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
    hover: 'hover:bg-emerald-100',
  },
  black: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-600',
    border: 'border-neutral-100',
    hover: 'hover:bg-neutral-100',
  },
};

export function QuickActionBtn({
  icon,
  label,
  onClick,
  colorTheme = 'blue',
  href,
}: QuickActionBtnProps) {
  const theme = THEME_STYLES[colorTheme] || THEME_STYLES.blue;

  const content = (
    <>
      <div
        className={`w-10 h-10 rounded-full ${theme.bg} ${theme.text} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
      >
        {icon}
      </div>
      <span className="text-xs font-semibold text-neutral-600 group-hover:text-black transition-colors">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`flex flex-col items-center justify-center p-3 rounded-2xl border ${theme.border} bg-white hover:shadow-md transition-all duration-300 cursor-pointer group h-full ${theme.hover}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-2xl border ${theme.border} bg-white hover:shadow-md transition-all duration-300 cursor-pointer group h-full ${theme.hover}`}
    >
      {content}
    </button>
  );
}
