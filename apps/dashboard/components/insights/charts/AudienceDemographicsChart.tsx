'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area, // Added Area import
} from 'recharts';

const data = [
  { name: 'Mobile', value: 75, color: '#beee02' },
  { name: 'Desktop', value: 20, color: '#222222' },
  { name: 'Tablet', value: 5, color: '#4c4c4c' },
];

export function AudienceDemographicsChart() {
  return (
    <div className="w-full h-full min-h-[250px] font-sans">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f1f5f9"
          />
          <XAxis
            dataKey="age"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94a3b8', fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94a3b8', fontSize: 11 }}
          />
          <Tooltip
            cursor={{ fill: '#f8fafc' }}
            contentStyle={{
              backgroundColor: '#1e293b',
              borderRadius: '8px',
              border: 'none',
              color: '#fff',
              fontSize: '11px',
            }}
          />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#222222"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorViews)"
            name="Profile Views"
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#beee02"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorClicks)"
            name="Total Clicks"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
