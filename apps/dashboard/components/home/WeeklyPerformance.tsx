'use client';

import { ChevronRight } from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { PERFORMANCE_DATA } from '../../data/mock-data';

export function WeeklyPerformance() {
    return (
        <section className="bg-white border border-neutral-100 rounded-[32px] p-6 lg:p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
            <div className="flex justify-between items-center mb-6 relative z-10">
                <h3 className="font-bold text-xl flex items-center gap-2 text-neutral-900">
                    Weekly Performance
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                        Last 7 Days
                    </span>
                </h3>
                <a
                    href="/insights"
                    className="text-xs font-semibold text-neutral-500 hover:text-black transition-colors flex items-center gap-1 cursor-pointer bg-neutral-50 px-3 py-1.5 rounded-full hover:bg-neutral-100"
                >
                    View Insights <ChevronRight size={12} strokeWidth={3} />
                </a>
            </div>

            <div className="h-48 md:h-64 w-full -ml-2 relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PERFORMANCE_DATA}>
                        <defs>
                            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#171717" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#171717" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#beee02" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#beee02" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            vertical={false}
                            stroke="#f3f4f6"
                            strokeDasharray="3 3"
                            opacity={1}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#a3a3a3', fontSize: 11, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#a3a3a3', fontSize: 11, fontWeight: 500 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#000000',
                                border: 'none',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            }}
                            itemStyle={{
                                color: '#ffffff',
                                fontSize: '12px',
                                fontWeight: 500,
                                padding: '2px 0',
                            }}
                            labelStyle={{
                                color: '#a3a3a3',
                                marginBottom: '4px',
                                fontSize: '11px',
                            }}
                            cursor={{ stroke: '#e5e5e5', strokeWidth: 1 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="views"
                            stroke="#171717"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorViews)"
                            activeDot={{
                                r: 4,
                                fill: '#171717',
                                stroke: '#fff',
                                strokeWidth: 2,
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="clicks"
                            stroke="#beee02"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorClicks)"
                            activeDot={{
                                r: 4,
                                fill: '#beee02',
                                stroke: '#fff',
                                strokeWidth: 2,
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}
