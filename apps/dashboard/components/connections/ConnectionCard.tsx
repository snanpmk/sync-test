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
      className="bg-brand-black rounded-[32px] p-5 border border-white/5 shadow-2xl transition-all group flex flex-col h-full relative overflow-hidden"
    >
     
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black shadow-lg">
            <span className="text-lg font-black tracking-tighter">
              {initials}
            </span>
          </div>
          {status === 'new' && (
            <div className="bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">New</span>
            </div>
          )}
        </div>
        <div className="flex gap-0.5">
          <button
            onClick={onToggleStar}
            className={`p-1.5 transition-colors ${isStarred ? 'text-amber-400' : 'text-neutral-600 hover:text-amber-400'}`}
          >
            <Star size={16} fill={isStarred ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 transition-colors text-neutral-600 hover:text-red-500"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 space-y-0.5 mb-4">
        <h3 className="text-lg font-bold text-white tracking-tight">
          {name}
        </h3>
        <p className="text-neutral-500 text-[11px] font-medium pb-3">{role}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2.5 text-neutral-400">
            <MapPin size={12} className="text-white" />
            <span className="text-[11px] font-medium">{placeMet}</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-400">
            <Calendar size={12} className="text-white" />
            <span className="text-[11px] font-medium">{dateMet}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <button
          className="flex items-center justify-center gap-2 py-3 border border-white/10 text-primary rounded-[16px] text-[10px] font-black hover:bg-white/5 transition-all active:scale-95"
          onClick={() => window.open('tel:+123456789')}
        >
          <Phone size={12} fill="currentColor" /> CALL
        </button>
        <button
          className="flex items-center justify-center gap-2 py-3 bg-primary text-black rounded-[16px] text-[10px] font-black hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-primary/10"
          onClick={() => window.open('sms:+123456789')}
        >
          <MessageSquare size={12} fill="currentColor" /> MESSAGE
        </button>
      </div>
    </motion.div>
  );
}
