'use client';

import { motion } from 'framer-motion';

const geoData = [
  { country: 'United States', code: 'US', value: 45, color: '#ef4444' }, // Intense
  { country: 'United Kingdom', code: 'GB', value: 25, color: '#f97316' },
  { country: 'India', code: 'IN', value: 15, color: '#eab308' },
  { country: 'Germany', code: 'DE', value: 8, color: '#84cc16' },
  { country: 'Canada', code: 'CA', value: 5, color: '#10b981' },
  { country: 'Others', code: 'OT', value: 2, color: '#64748b' },
];

export function GeoHeatmap() {
  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-center">
      <div className="space-y-4">
        {geoData.map((item, index) => (
          <div key={item.country} className="space-y-1">
            <div className="flex justify-between text-sm font-medium text-neutral-700">
              <span className="flex items-center gap-2">
                {/* Simple flag placeholder or emoji if consistent */}
                <span className="text-lg leading-none select-none">
                  {item.code === 'US' && '🇺🇸'}
                  {item.code === 'GB' && '🇬🇧'}
                  {item.code === 'IN' && '🇮🇳'}
                  {item.code === 'DE' && '🇩🇪'}
                  {item.code === 'CA' && '🇨🇦'}
                  {item.code === 'OT' && '🌍'}
                </span>
                {item.country}
              </span>
              <span>{item.value}%</span>
            </div>
            <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xs text-neutral-400 text-center">
        * Based on IP Geolocation from last 30 days
      </div>
    </div>
  );
}
