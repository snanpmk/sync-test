'use client';

import { useState } from 'react';
import {
  X,
  User,
  Briefcase,
  MapPin,
  Calendar,
  Plus,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (connection: any) => void;
}

export function AddConnectionModal({
  isOpen,
  onClose,
  onAdd,
}: AddConnectionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    placeMet: '',
    dateMet: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }),
    status: 'new' as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;
    onAdd(formData);
    setFormData({
      name: '',
      role: '',
      placeMet: '',
      dateMet: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
      status: 'new',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-100"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="fixed left-0 sm:left-1/2 bottom-0 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-lg bg-white rounded-t-[32px] sm:rounded-[40px] shadow-2xl z-101 overflow-hidden max-h-[95vh] flex flex-col"
          >
            <div className="bg-neutral-900 p-6 sm:p-8 text-white relative shrink-0">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary text-black rounded-lg">
                  <User size={18} strokeWidth={3} />
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                  New Relationship
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Add Connection
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-black transition-colors"
                      size={18}
                    />
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                    Role / Company
                  </label>
                  <div className="relative group">
                    <Briefcase
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-black transition-colors"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="e.g. Founder at TechFlow"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                      Place Met
                    </label>
                    <div className="relative group">
                      <MapPin
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-black transition-colors"
                        size={18}
                      />
                      <input
                        type="text"
                        placeholder="e.g. Coffee Shop"
                        value={formData.placeMet}
                        onChange={(e) =>
                          setFormData({ ...formData, placeMet: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">
                      Date
                    </label>
                    <div className="relative group">
                      <Calendar
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-black transition-colors"
                        size={18}
                      />
                      <input
                        type="text"
                        value={formData.dateMet}
                        onChange={(e) =>
                          setFormData({ ...formData, dateMet: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 pb-4 sm:pb-0">
                <button
                  type="submit"
                  className="w-full order-1 sm:order-2 py-4 bg-primary text-black rounded-full text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2"
                >
                  <Plus size={16} strokeWidth={3} /> Save Connection
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full order-2 sm:order-1 py-4 text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
