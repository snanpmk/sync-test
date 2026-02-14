interface QuickActionBtnProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  colorTheme?: 'orange' | 'blue' | 'emerald' | 'purple' | 'black';
  href?: string;
}


export function QuickActionBtn({
  icon,
  label,
  onClick,
  href,
}: QuickActionBtnProps) {

  const content = (
    <div className="flex flex-col items-center gap-2 min-w-[72px]">
      <div
        className={`px-6 py-3 rounded-full bg-brand-black text-white flex items-center justify-center group-hover:bg-[#222222] transition-colors duration-300 shadow-sm border border-neutral-800`}
      >
        {icon}
      </div>
      <span className="text-[11px] font-semibold text-neutral-600 group-hover:text-black transition-colors text-center leading-tight">
        {label}
      </span>
    </div>
  );

  const containerClasses = "cursor-pointer group select-none";

  if (href) {
    return (
      <a href={href} className={containerClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={containerClasses}>
      {content}
    </button>
  );
}
