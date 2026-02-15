export interface QuickActionBtnProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'mobile';
  href?: string;
}

export function QuickActionBtn({
  icon,
  label,
  onClick,
  href,
  variant = 'ghost',
}: QuickActionBtnProps) {

  if (variant === 'mobile') {
    const mobileContent = (
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white bg-neutral-900 shadow-sm">
          {icon}
        </div>
        <span className="text-[10px] font-medium text-neutral-500 text-center">
          {label}
        </span>
      </div>
    );
    return href ? <a href={href}>{mobileContent}</a> : <button onClick={onClick}>{mobileContent}</button>;
  }

  const content = (
    <div className={`flex items-center gap-2 transition-all duration-300 ${variant === 'primary'
      ? 'bg-[#CCFF00] text-black px-6 py-2.5 rounded-full shadow-lg shadow-[#CCFF00]/10'
      : 'text-[#CCFF00] p-2 hover:bg-white/5 rounded-xl'
      }`}>
      <span className={variant === 'primary' ? 'scale-100' : 'scale-110'}>
        {icon}
      </span>
      {variant === 'primary' && (
        <span className="text-[13px] font-bold tracking-tight">
          {label}
        </span>
      )}
    </div>
  );

  const containerClasses = "cursor-pointer select-none";

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
