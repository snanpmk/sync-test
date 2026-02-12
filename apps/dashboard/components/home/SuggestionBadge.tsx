interface SuggestionBadgeProps {
  text: string;
  reward: string;
}

export function SuggestionBadge({ text, reward }: SuggestionBadgeProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
      <span className="text-xs font-semibold text-neutral-700">{text}</span>
      <span className="text-[10px] font-bold text-black bg-white border border-neutral-200 px-2 py-1 rounded shadow-sm">
        {reward}
      </span>
    </div>
  );
}
