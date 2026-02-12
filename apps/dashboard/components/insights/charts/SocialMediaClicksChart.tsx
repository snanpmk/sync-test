'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import {
  Instagram,
  Linkedin,
  Twitter,
  Globe,
  Video,
  Mail,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

const data = [
  {
    name: 'Instagram',
    value: 450,
    color: '#E1306C',
    icon: <Instagram size={14} />,
  },
  {
    name: 'LinkedIn',
    value: 360,
    color: '#0077b5',
    icon: <Linkedin size={14} />,
  },
  { name: 'TikTok', value: 390, color: '#000000', icon: <Video size={14} /> },
  {
    name: 'Twitter',
    value: 210,
    color: '#1DA1F2',
    icon: <Twitter size={14} />,
  },
  { name: 'Website', value: 180, color: '#CCFF00', icon: <Globe size={14} /> },
  { name: 'Email', value: 120, color: '#EA4335', icon: <Mail size={14} /> },
].sort((a, b) => b.value - a.value);

export function SocialMediaClicksChart() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center gap-8 py-4 font-sans">
      {/* Chart Container */}
      <div className="relative w-full md:w-1/2 h-[300px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
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
                    <div className="bg-neutral-900 text-white p-3 rounded-2xl shadow-2xl border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: item.color }}>{item.icon}</span>
                        <span className="font-bold text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black">{item.value}</span>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded-md">
                          +12%
                        </span>
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
          <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none mb-1">
            Total
          </p>
          <p className="text-2xl font-black text-neutral-900 tracking-tighter leading-none">
            {data.reduce((acc, curr) => acc + curr.value, 0).toLocaleString()}
          </p>
          <p className="text-[10px] font-bold text-neutral-400 uppercase mt-1">
            Clicks
          </p>
        </div>
      </div>

      {/* Legend Sidebar */}
      <div className="w-full md:w-1/2 grid grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-2xl border border-neutral-50 hover:bg-neutral-50 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: item.color + '15',
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase">
                    {item.value} Clicks
                  </span>
                  <div className="w-1 h-1 rounded-full bg-neutral-200" />
                  <span className="text-[10px] font-bold text-emerald-500 flex items-center">
                    <ArrowUpRight size={8} className="mr-0.5" /> 5%
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
