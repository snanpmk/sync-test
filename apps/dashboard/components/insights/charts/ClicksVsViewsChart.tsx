'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Mon', views: 85, clicks: 35 },
  { name: 'Tue', views: 110, clicks: 45 },
  { name: 'Wed', views: 160, clicks: 75 },
  { name: 'Thu', views: 220, clicks: 90 },
  { name: 'Fri', views: 190, clicks: 80 },
  { name: 'Sat', views: 260, clicks: 120 },
  { name: 'Sun', views: 240, clicks: 105 },
];

export function ClicksVsViewsChart({ period = 'weekly' }: { period?: string }) {
  // We can switch data based on `period` later.
  // For now using static `data` for "weekly" demo.

  return (
    <div className="w-full h-full min-h-[300px] font-sans">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1e293b" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#1e293b" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CCFF00" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#CCFF00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            dx={-10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              borderRadius: '8px',
              border: 'none',
              color: '#fff',
              fontSize: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            itemStyle={{ color: '#fff' }}
            cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#1e293b"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorViews)"
            name="Profile Views"
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#9fcc00" // using a greener shade for visibility if #CCFF00 is too light
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorClicks)"
            name="Total Clicks"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
