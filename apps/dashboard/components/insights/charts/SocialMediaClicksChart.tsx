'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Globe,
} from 'lucide-react';

const data = [
  {
    name: 'Instagram',
    value: 850,
    color: '#beee02',
    icon: <Instagram size={14} />,
    share: '45%'
  },
  {
    name: 'LinkedIn',
    value: 420,
    color: '#4c4c4c',
    icon: <Linkedin size={14} />,
    share: '22%'
  },
  {
    name: 'TikTok',
    value: 310,
    color: '#333333',
    icon: <Youtube size={14} />,
    share: '16%'
  },
  {
    name: 'WhatsApp',
    value: 120,
    color: '#1a1a1a',
    icon: <Facebook size={14} />,
    share: '6%'
  },
].sort((a, b) => b.value - a.value);

export function SocialMediaClicksChart() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10 py-6 font-sans">
      {/* Chart Container */}
      <div className="relative w-full h-[340px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={120}
              paddingAngle={6}
              dataKey="value"
              stroke="none"
              animationBegin={200}
              animationDuration={1200}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
                />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload;
                  return (
                    <div className="bg-neutral-800 text-white p-4 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-white/10" style={{ color: item.color }}>
                          {item.icon}
                        </div>
                        <p className="font-black text-xs uppercase tracking-widest">{item.name}</p>
                      </div>
                      <div className="flex items-end gap-2">
                        <p className="text-2xl font-black text-[#beee02] leading-none">{item.value.toLocaleString()}</p>
                        <p className="text-[10px] font-bold text-neutral-500 mb-0.5 uppercase tracking-tighter">Clicks</p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em] leading-none mb-2">
            Total
          </p>
          <p className="text-4xl font-black text-white tracking-tighter leading-none mb-1">
            {data.reduce((acc, curr) => acc + curr.value, 0).toLocaleString()}
          </p>
          <p className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-widest">
            Visitors
          </p>
        </div>
      </div>

      {/* Modern High-Fidelity Legend Grid */}
      <div className="w-full grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-5 rounded-[28px] bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{item.name}</span>
              </div>
              <span className="text-[10px] font-bold text-[#beee02] bg-[#beee02]/10 px-2 py-0.5 rounded-full transition-colors group-hover:bg-[#beee02] group-hover:text-black">
                {item.share}
              </span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">{item.value.toLocaleString()}</div>
            <div className="text-[9px] font-bold text-neutral-600 uppercase tracking-wider mt-1">Direct Referrals</div>
          </div>
        ))}
      </div>
    </div>
  );
}
