interface SmartSuggestionProps {
  text: string;
  type: 'warning' | 'tip';
}

export function SmartSuggestion({ text, type }: SmartSuggestionProps) {
  return (
    <div
      className="p-4 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-800 border border-neutral-700 flex items-start gap-3"
    >
      <div className="text-neutral-400">
        {/* Placeholder icon or bullet */}
        {type === 'warning' ? '⚠️' : '💡'}
      </div>
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}
