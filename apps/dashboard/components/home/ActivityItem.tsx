import { Eye, Link as LinkIcon, Users } from 'lucide-react';

interface ActivityItemProps {
  text: string;
  time: string;
  type: 'connection' | 'view' | 'click';
}

export function ActivityItem({ text, time, type }: ActivityItemProps) {
  const getIcon = () => {
    switch (type) {
      case 'connection':
        return <Users size={14} className="text-primary" />;
      case 'view':
        return <Eye size={14} className="text-blue-400" />;
      case 'click':
        return <LinkIcon size={14} className="text-purple-400" />;
    }
  };

  return (
    <li className="flex gap-3 items-center group cursor-default p-2 rounded-xl hover:bg-neutral-50 transition-colors">
      <div className="w-9 h-9 rounded-full bg-white border border-neutral-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-neutral-200 text-neutral-500">
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-neutral-900 truncate">
          {text}
        </p>
        <p className="text-[11px] font-medium text-neutral-400">{time}</p>
      </div>
    </li>
  );
}
