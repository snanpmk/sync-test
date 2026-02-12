'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target, Lightbulb } from 'lucide-react';

const insights = [
  {
    icon: <Zap className="text-yellow-500" size={18} />,
    title: 'Peak Traffic Alert',
    description:
      'Your profile views peak between 6 PM - 9 PM on Tuesdays. Consider sharing new updates during this window.',
    color: 'bg-yellow-50',
  },
  {
    icon: <Target className="text-blue-500" size={18} />,
    title: 'Audience Interest',
    description:
      'Visitors from LinkedIn are 2x more likely to click your "Portfolio" link compared to Instagram.',
    color: 'bg-blue-50',
  },
  {
    icon: <Lightbulb className="text-emerald-500" size={18} />,
    title: 'Optimization Tip',
    description:
      'Adding a custom thumbnail to your "Latest Blog" link could increase CTR by up to 15%.',
    color: 'bg-emerald-50',
  },
];

export function AIInsights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 bg-black rounded-lg">
          <Sparkles size={14} className="text-primary" />
        </div>
        <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
          Powered by SynAI
        </span>
      </div>

      {insights.map((insight, index) => (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          key={index}
          className={`p-4 rounded-2xl border border-neutral-100 ${insight.color} relative overflow-hidden group`}
        >
          {/* Decorative background circle */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                {insight.icon}
              </div>
              <h4 className="font-bold text-neutral-900 text-sm">
                {insight.title}
              </h4>
            </div>
            <p className="text-neutral-600 text-xs leading-relaxed">
              {insight.description}
            </p>
            <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-neutral-900 mt-3 group/btn">
              Apply Strategy{' '}
              <ArrowRight
                size={12}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
