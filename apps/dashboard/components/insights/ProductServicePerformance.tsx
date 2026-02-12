'use client';

import {
  Package,
  ShoppingBag,
  Eye,
  MousePointer2,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'Consultation Call',
    type: 'Service',
    views: 1240,
    clicks: 450,
    ctr: '36.2%',
    color: 'bg-blue-50 text-blue-600',
    icon: <TrendingUp size={16} />,
  },
  {
    name: 'E-Book: Growth Hacks',
    type: 'Product',
    views: 980,
    clicks: 120,
    ctr: '12.2%',
    color: 'bg-emerald-50 text-emerald-600',
    icon: <Package size={16} />,
  },
  {
    name: 'Website Audit',
    type: 'Service',
    views: 750,
    clicks: 310,
    ctr: '41.3%',
    color: 'bg-purple-50 text-purple-600',
    icon: <ShoppingBag size={16} />,
  },
  {
    name: 'NFC Smart Card',
    type: 'Product',
    views: 2100,
    clicks: 540,
    ctr: '25.7%',
    color: 'bg-orange-50 text-orange-600',
    icon: <Package size={16} />,
  },
];

export function ProductServicePerformance() {
  return (
    <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
      <table className="w-full text-left border-separate border-spacing-y-3">
        <thead>
          <tr className="text-neutral-400 text-[10px] font-black uppercase tracking-widest">
            <th className="pb-2 pl-4">Product / Service</th>
            <th className="pb-2">Views</th>
            <th className="pb-2">Clicks</th>
            <th className="pb-2">CTR</th>
            <th className="pb-2 pr-4 text-right">Trend</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <motion.tr
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="group cursor-pointer"
            >
              <td className="py-4 pl-4 bg-white border-y border-l border-neutral-100 rounded-l-2xl group-hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-medium text-neutral-400">
                      {item.type}
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-4 bg-white border-y border-neutral-100 group-hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-1.5 text-sm font-bold text-neutral-700">
                  <Eye size={14} className="text-neutral-300" />
                  {item.views.toLocaleString()}
                </div>
              </td>
              <td className="py-4 bg-white border-y border-neutral-100 group-hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-1.5 text-sm font-bold text-neutral-700">
                  <MousePointer2 size={14} className="text-neutral-300" />
                  {item.clicks.toLocaleString()}
                </div>
              </td>
              <td className="py-4 bg-white border-y border-neutral-100 group-hover:bg-neutral-50 transition-colors">
                <span className="text-xs font-black text-neutral-900 bg-neutral-100 px-2 py-1 rounded-lg">
                  {item.ctr}
                </span>
              </td>
              <td className="py-4 pr-4 bg-white border-y border-r border-neutral-100 rounded-r-2xl group-hover:bg-neutral-50 transition-colors text-right">
                <div className="flex items-center justify-end gap-1 text-emerald-500 font-bold text-xs">
                  <TrendingUp size={12} />
                  +5.2%
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
