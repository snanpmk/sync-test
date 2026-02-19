'use client';

import { SALES_DATA, USER_GROWTH_DATA, MOCK_ORDERS } from '@/data/mock-data';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';
import { Clock, ShoppingBag, UserPlus, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminOverview() {
    return (
        <div className="space-y-8 pb-12">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">Dashboard Overview</h1>
                <p className="text-neutral-500 mt-3 font-medium text-base md:text-lg max-w-2xl">Welcome back, Admin. Here's a summary of today's performance and activity.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <StatCard title="Total Revenue" value="$42,890" delta="+18.2%" icon={<TrendingUp size={16} />} />
                <StatCard title="New Users" value="1,245" delta="+12.5%" icon={<UserPlus size={16} />} />
                <StatCard title="Active Orders" value="56" delta="+5.1%" icon={<ShoppingBag size={16} />} />
                <StatCard title="Pending Tickets" value="12" delta="-2.4%" icon={<Clock size={16} />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Sales Chart */}
                <div className="lg:col-span-2 bg-white border border-neutral-200 rounded-[32px] p-6 md:p-8 shadow-sm flex flex-col overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h3 className="text-lg font-bold text-neutral-900">Weekly Revenue</h3>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Revenue</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] md:h-[300px] w-full -ml-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={SALES_DATA}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#CCFF00" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#CCFF00" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#00000008" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#999', fontSize: 10, fontWeight: 700 }}
                                    dy={10}
                                />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #eee',
                                        borderRadius: '16px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#CCFF00"
                                    strokeWidth={4}
                                    fillOpacity={1}
                                    fill="url(#colorSales)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white border border-neutral-200 rounded-[32px] p-6 md:p-8 shadow-sm">
                    <h3 className="text-lg font-bold mb-6 text-neutral-900">Recent Activity</h3>
                    <div className="space-y-6 text-sm">
                        <ActivityItem
                            label="New order placed"
                            time="2 min ago"
                            description="Order #1034 for $129.00"
                        />
                        <ActivityItem
                            label="User registration"
                            time="15 min ago"
                            description="Sarah Jenkins joined as Customer"
                        />
                        <ActivityItem
                            label="Inventory alert"
                            time="1 hour ago"
                            description="Premium Card V1 is low on stock"
                            isWarning
                        />
                        <ActivityItem
                            label="Payment received"
                            time="3 hours ago"
                            description="Transaction #TR-8829 successful"
                        />
                    </div>
                    <button className="w-full mt-8 py-3 rounded-2xl border border-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black hover:bg-neutral-50 transition-all">
                        View All Activity
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* User Growth */}
                <div className="bg-white border border-neutral-200 rounded-[32px] p-6 md:p-8 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold mb-6 text-neutral-900">User Growth</h3>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={USER_GROWTH_DATA}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#00000008" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#999', fontSize: 10, fontWeight: 700 }}
                                    dy={10}
                                />
                                <Tooltip
                                    cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #eee',
                                        borderRadius: '16px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}
                                />
                                <Bar dataKey="users" radius={[6, 6, 0, 0]}>
                                    {USER_GROWTH_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === USER_GROWTH_DATA.length - 1 ? '#CCFF00' : '#E5E7EB'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white border border-neutral-200 rounded-[32px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-neutral-900">Processing Orders</h3>
                        <Link href="/orders" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1">
                            View All <ArrowRight size={12} />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {MOCK_ORDERS.slice(0, 4).map((order) => (
                            <div key={order.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                    <div className="w-10 h-10 rounded-full bg-neutral-100 shrink-0 flex items-center justify-center font-bold text-xs text-neutral-400">
                                        #{order.id.slice(-2)}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-sm text-neutral-900 truncate">{order.customer}</p>
                                        <p className="text-[10px] text-neutral-400 font-bold">{order.date}</p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="font-bold text-sm text-neutral-900">${order.total.toFixed(2)}</p>
                                    <p className="text-[10px] font-bold uppercase text-primary">{order.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, delta, icon }: { title: string; value: string; delta: string; icon: React.ReactNode }) {
    const isPositive = delta.startsWith('+');
    return (
        <div className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] p-5 md:p-6 hover:shadow-lg hover:shadow-primary/5 transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-125 transition-transform duration-500">
                {icon}
            </div>
            <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">{title}</p>
            <div className="flex items-end justify-between mt-4">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">{value}</h3>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-primary/20 text-black' : 'bg-red-500/10 text-red-500'}`}>
                    {delta}
                </span>
            </div>
        </div>
    );
}

function ActivityItem({ label, time, description, isWarning = false }: { label: string; time: string; description: string, isWarning?: boolean }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 shrink-0">
                <div className={`w-2 h-2 rounded-full ${isWarning ? 'bg-red-500' : 'bg-primary'} ring-4 ${isWarning ? 'ring-red-500/10' : 'ring-primary/10'}`} />
            </div>
            <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-bold text-neutral-900 truncate">{label}</p>
                    <span className="text-[10px] text-neutral-400 font-bold">{time}</span>
                </div>
                <p className="text-xs text-neutral-400 mt-0.5 break-all">{description}</p>
            </div>
        </div>
    );
}


