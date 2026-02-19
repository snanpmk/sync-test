'use client';

import { useState } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { MOCK_ORDERS } from '@/data/mock-data';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export default function OrderManagement() {
    const [orders, setOrders] = useState(MOCK_ORDERS);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredOrders = orders.filter(order => {
        const matchesFilter = activeFilter === 'All' || order.status === activeFilter;
        const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    const getStatusCount = (status: string) => {
        if (status === 'All') return orders.length;
        return orders.filter(o => o.status === status).length;
    };

    const handleUpdateStatus = (status: string) => {
        if (!selectedOrder) return;
        setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, status } : o));
        setSelectedOrder({ ...selectedOrder, status });
    };

    const openOrder = (order: any) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">Order Management</h1>
                    <p className="text-neutral-500 mt-1 font-medium text-sm md:text-base">Track and fulfill platform orders.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-3.5 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-primary transition-colors shadow-sm text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                <StatusFilter
                    label="All"
                    count={getStatusCount('All')}
                    active={activeFilter === 'All'}
                    onClick={() => setActiveFilter('All')}
                />
                <StatusFilter
                    label="Pending"
                    count={getStatusCount('Pending')}
                    active={activeFilter === 'Pending'}
                    onClick={() => setActiveFilter('Pending')}
                />
                <StatusFilter
                    label="Processing"
                    count={getStatusCount('Processing')}
                    active={activeFilter === 'Processing'}
                    onClick={() => setActiveFilter('Processing')}
                />
                <StatusFilter
                    label="Shipped"
                    count={getStatusCount('Shipped')}
                    active={activeFilter === 'Shipped'}
                    onClick={() => setActiveFilter('Shipped')}
                />
                <StatusFilter
                    label="Completed"
                    count={getStatusCount('Completed')}
                    active={activeFilter === 'Completed'}
                    onClick={() => setActiveFilter('Completed')}
                />
            </div>

            <div className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full border-collapse text-left min-w-[700px]">
                        <thead>
                            <tr className="border-b border-neutral-100 bg-neutral-50/50">
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Order ID</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Customer</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Date</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Total</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {filteredOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="hover:bg-neutral-50 transition-colors group cursor-pointer"
                                    onClick={() => openOrder(order)}
                                >
                                    <td className="px-6 md:px-8 py-5">
                                        <p className="font-bold flex items-center gap-2 text-neutral-900 text-sm">
                                            #{order.id}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                        </p>
                                    </td>
                                    <td className="px-6 md:px-8 py-5">
                                        <p className="font-bold text-neutral-700 text-sm">{order.customer}</p>
                                    </td>
                                    <td className="px-6 md:px-8 py-5">
                                        <p className="text-[10px] md:text-sm text-neutral-400 font-bold">{order.date}</p>
                                    </td>
                                    <td className="px-6 md:px-8 py-5">
                                        <p className="font-bold text-neutral-900 text-sm">${order.total.toFixed(2)}</p>
                                    </td>
                                    <td className="px-6 md:px-8 py-5 text-right">
                                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${order.status === 'Completed' ? 'bg-primary/20 text-black' :
                                            order.status === 'Cancelled' ? 'bg-red-50 text-red-600' :
                                                'bg-blue-50 text-blue-600'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredOrders.length === 0 && (
                    <div className="p-20 text-center">
                        <p className="text-neutral-400 font-bold">No orders found matching your criteria.</p>
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Order #${selectedOrder?.id}`}
            >
                {selectedOrder && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Customer</p>
                                <p className="text-lg font-bold mt-1 text-neutral-900">{selectedOrder.customer}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Date</p>
                                <p className="text-lg font-bold mt-1 text-neutral-900">{selectedOrder.date}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Total Amount</p>
                                <p className="text-lg font-extrabold mt-1 text-black">${selectedOrder.total.toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Current Status</p>
                                <span className={`inline-block mt-2 text-[10px] font-bold uppercase px-3 py-1 rounded-full ${selectedOrder.status === 'Completed' ? 'bg-primary/20 text-black' :
                                    selectedOrder.status === 'Cancelled' ? 'bg-red-50 text-red-600' :
                                        'bg-blue-50 text-blue-600'
                                    }`}>
                                    {selectedOrder.status}
                                </span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Update Status</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {['Pending', 'Processing', 'Shipped', 'Completed', 'Cancelled'].map((status) => (
                                    <Button
                                        key={status}
                                        variant={selectedOrder.status === status ? 'primary' : 'outline'}
                                        onClick={() => handleUpdateStatus(status)}
                                        className={`text-[10px] py-3 uppercase tracking-widest font-bold rounded-xl ${selectedOrder.status === status ? 'shadow-lg shadow-primary/20' : 'border-neutral-200'}`}
                                    >
                                        {status}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Button onClick={() => setIsModalOpen(false)} variant="outline" className="w-full h-12 font-bold border-neutral-200">
                            Close Details
                        </Button>
                    </div>
                )}
            </Modal>
        </div>
    );
}

function StatusFilter({ label, count, active = false, onClick }: { label: string; count: number; active?: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all text-left ${active
                ? 'bg-primary border-primary text-black shadow-lg shadow-primary/20'
                : 'bg-white border-neutral-200 text-neutral-400 hover:border-neutral-300 shadow-sm'
                }`}>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-black/60' : 'text-neutral-400'}`}>{label}</p>
            <p className={`text-xl md:text-2xl font-bold mt-1 ${active ? 'text-black' : 'text-neutral-900'}`}>{count}</p>
        </button>
    );
}
