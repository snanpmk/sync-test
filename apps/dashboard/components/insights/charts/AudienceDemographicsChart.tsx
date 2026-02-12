'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  { age: '18-24', male: 25, female: 30 },
  { age: '25-34', male: 45, female: 40 },
  { age: '35-44', male: 30, female: 25 },
  { age: '45-54', male: 15, female: 18 },
  { age: '55+', male: 10, female: 12 },
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
          <Bar
            dataKey="male"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            name="Male"
          />
          <Bar
            dataKey="female"
            fill="#ec4899"
            radius={[4, 4, 0, 0]}
            name="Female"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
