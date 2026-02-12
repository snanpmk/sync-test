'use client';

import {
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
  MoreHorizontal,
  Star,
  ExternalLink,
  Linkedin,
  ChevronDown,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ConnectionCardProps {
  name: string;
  role: string;
  placeMet: string;
  dateMet: string;
  status: 'new' | 'followed_up' | 'collaborator';
  isStarred?: boolean;
  onToggleStar?: () => void;
  onDelete?: () => void;
  onStatusChange?: (status: 'new' | 'followed_up' | 'collaborator') => void;
}

const STATUS_COLORS = {
  new: 'bg-blue-100 text-blue-700',
  followed_up: 'bg-emerald-100 text-emerald-700',
  collaborator: 'bg-purple-100 text-purple-700',
};

const getInitials = (name: string) => {
  const parts = name.split(' ').filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

export function ConnectionCard({
  name,
  role,
  placeMet,
  dateMet,
  status,
  isStarred = false,
  onToggleStar,
  onDelete,
  onStatusChange,
}: ConnectionCardProps) {
  const initials = getInitials(name);

  const cycleStatus = () => {
    const statuses: ('new' | 'followed_up' | 'collaborator')[] = [
      'new',
      'followed_up',
      'collaborator',
    ];
    const currentIndex = statuses.indexOf(status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    onStatusChange?.(statuses[nextIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-[32px] p-6 border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center text-white ring-4 ring-neutral-50 shadow-lg shadow-neutral-200">
            <span className="text-xl font-black tracking-tighter">
              {initials}
            </span>
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-[3px] border-white ${isStarred ? 'bg-amber-400' : 'bg-neutral-300'}`}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={onToggleStar}
            className={`p-2 hover:bg-neutral-50 rounded-xl transition-colors ${isStarred ? 'text-amber-500' : 'text-neutral-400 hover:text-amber-500'}`}
          >
            <Star size={18} fill={isStarred ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={onDelete}
            className="p-2 hover:bg-neutral-50 rounded-xl transition-colors text-neutral-400 hover:text-red-500"
          >
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-neutral-900 leading-tight tracking-tight">
            {name}
          </h3>
          <button
            onClick={cycleStatus}
            className={`flex items-center gap-1 text-[9px] font-black uppercase px-3 py-1 rounded-full transition-all active:scale-95 hover:shadow-md hover:ring-2 hover:ring-current/10 cursor-pointer border border-transparent hover:border-current/20 ${STATUS_COLORS[status]}`}
            title="Click to cycle status"
          >
            {status.replace('_', ' ')}
            <ChevronDown size={10} strokeWidth={3} className="opacity-60" />
          </button>
        </div>
        <p className="text-neutral-400 text-xs font-medium mb-4">{role}</p>

        <div className="space-y-2.5 mb-6">
          <div className="flex items-center gap-2.5 text-neutral-500">
            <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
              <MapPin size={14} className="text-neutral-400" />
            </div>
            <span className="text-xs font-bold leading-none">{placeMet}</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-500">
            <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
              <Calendar size={14} className="text-neutral-400" />
            </div>
            <span className="text-xs font-bold leading-none">{dateMet}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto pt-5 border-t border-neutral-100/50">
        <button
          className="flex items-center justify-center gap-2 py-3.5 bg-neutral-900 text-white rounded-2xl text-xs font-black hover:translate-y-[-2px] transition-all active:scale-95 shadow-xl shadow-neutral-200"
          onClick={() => window.open('tel:+123456789')}
        >
          <Phone size={14} className="text-[#CCFF00]" /> CALL
        </button>
        <button
          className="flex items-center justify-center gap-2 py-3.5 bg-[#CCFF00] text-black rounded-2xl text-xs font-black hover:translate-y-[-2px] transition-all active:scale-95 shadow-xl shadow-[#CCFF00]/10"
          onClick={() => window.open('sms:+123456789')}
        >
          <MessageSquare size={14} /> MESSAGE
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between px-1">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center text-blue-500">
            <Linkedin size={10} />
          </div>
          <div className="w-6 h-6 rounded-full bg-neutral-50 border-2 border-white flex items-center justify-center text-neutral-500">
            <ExternalLink size={10} />
          </div>
        </div>
        <button className="text-[10px] font-black uppercase text-neutral-400 hover:text-neutral-900 tracking-widest transition-colors">
          View Detail
        </button>
      </div>
    </motion.div>
  );
}
