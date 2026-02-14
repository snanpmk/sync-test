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
        <section className="bg-[#171717] rounded-[32px] p-6 lg:p-8 relative overflow-hidden h-full text-white">
            <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="font-bold text-xl flex flex-col gap-1">
                    Weekly Performance
                    <span className="text-sm font-medium text-neutral-400">
                        Last 7 Days
                    </span>
                </h3>
                <a
                    href="/insights"
                    className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-800 px-3 py-1.5 rounded-full hover:bg-neutral-700 transition-colors"
                >
                    View Insights
                </a>
            </div>

            <div className="h-48 md:h-64 w-full -ml-4 relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PERFORMANCE_DATA}>
                        <defs>
                            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#beee02" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#beee02" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            vertical={false}
                            stroke="#262626"
                            strokeDasharray="3 3"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#525252', fontSize: 11, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#525252', fontSize: 11, fontWeight: 500 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#262626',
                                border: 'none',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
                            }}
                            itemStyle={{
                                color: '#e5e5e5',
                                fontSize: '12px',
                                fontWeight: 500,
                            }}
                            labelStyle={{
                                color: '#a3a3a3',
                                marginBottom: '4px',
                                fontSize: '11px',
                            }}
                            cursor={{ stroke: '#404040', strokeWidth: 1 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="views"
                            stroke="#beee02"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorViews)"

                        />
                        {/* Hiding clicks for cleaner "Mobile" look, or keeping it subtle. Let's keep one main line as per typical "Performance" cards */}
                        <Area
                            type="monotone"
                            dataKey="clicks"
                            stroke="#525252"
                            strokeWidth={2}
                            fillOpacity={0}
                            fill="transparent"
                            strokeDasharray="5 5"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}
