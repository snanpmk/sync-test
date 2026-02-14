'use client';

import { motion } from 'framer-motion';

const geoData = [
  { country: 'United States', code: 'US', value: 45, color: '#222222' }, // Dark/Intense
  { country: 'United Kingdom', code: 'GB', value: 25, color: '#444444' },
  { country: 'India', code: 'IN', value: 15, color: '#666666' },
  { country: 'Germany', code: 'DE', value: 8, color: '#888888' },
  { country: 'Canada', code: 'CA', value: 5, color: '#beee02' }, // Neon Lime accent for brand
  { country: 'Others', code: 'OT', value: 2, color: '#cccccc' },
];

export function GeoHeatmap() {
  return (
    <div className="w-full h-full flex flex-col justify-center font-sans">
      <div className="space-y-6">
        {geoData.map((item, index) => (
          <div key={item.country} className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="flex items-center gap-3">
                <span className="text-xl leading-none filter drop-shadow-sm">
                  {item.code === 'US' && '🇺🇸'}
                  {item.code === 'GB' && '🇬🇧'}
                  {item.code === 'IN' && '🇮🇳'}
                  {item.code === 'DE' && '🇩🇪'}
                  {item.code === 'CA' && '🇨🇦'}
                  {item.code === 'OT' && '🌍'}
                </span>
              
              </span>
              <span className="text-[12px] font-black text-neutral-900 leading-none">{item.value}%</span>
            </div>

            <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden shadow-inner border border-neutral-50/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: "circOut" }}
                className="h-full rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-100">
        <div className="flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#beee02] animate-pulse" />
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
            Live Real-time Distribution
          </p>
        </div>
      </div>
    </div>
  );
}
