'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'Consultation Call',
    type: 'Service',
    value: '1,245',
  },
  {
    name: 'E-Book: Growth Hacks',
    type: 'Product',
    value: '1,245',
  },
  {
    name: 'NFC Smart Card',
    type: 'Product',
    value: '2,101',
  },
];

export function ProductServicePerformance() {
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex p-1 bg-neutral-100 rounded-2xl w-full">
        <button
          onClick={() => setActiveTab('products')}
          className={`flex-1 py-3 text-sm font-black transition-all rounded-xl uppercase tracking-widest ${activeTab === 'products' ? 'bg-[#222222] text-[#beee02]' : 'text-neutral-500'
            }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`flex-1 py-3 text-sm font-black transition-all rounded-xl uppercase tracking-widest ${activeTab === 'services' ? 'bg-[#222222] text-[#beee02]' : 'text-neutral-500'
            }`}
        >
          Services
        </button>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-5 bg-white rounded-3xl group cursor-pointer shadow-sm border border-neutral-50"
          >
            <h4 className="text-sm font-bold text-neutral-800">{item.name}</h4>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#beee02]" />
              <span className="text-sm font-black text-neutral-900">{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <button className="w-fit mx-auto px-6 py-2 bg-neutral-600/20 text-neutral-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-neutral-600/30 transition-all flex items-center justify-center">
        View All
      </button>
    </div>
  );
}
