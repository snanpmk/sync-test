interface SmartSuggestionProps {
  text: string;
  type: 'warning' | 'tip';
}

export function SmartSuggestion({ text, type }: SmartSuggestionProps) {
  return (
    <div
      className={`p-4 rounded-2xl text-xs font-semibold border flex items-start gap-2 shadow-sm ${
        type === 'warning'
          ? 'bg-orange-50 border-orange-100 text-orange-800'
          : 'bg-blue-50 border-blue-100 text-blue-800'
      }`}
    >
      <span className="text-lg leading-none">
        {type === 'warning' ? '⚠️' : '💡'}
      </span>
      <span className="mt-0.5">{text}</span>
    </div>
  );
}
