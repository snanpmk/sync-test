'use client';

import { useState } from 'react';
import { Package, Layers, Wrench, Trash2, Plus } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';

interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
}

interface Service {
    id: string;
    title: string;
    price: string;
    description: string;
}

export function CatalogTab() {
    const [products, setProducts] = useState<Product[]>([
        {
            id: '1',
            name: 'UI Kit Pro',
            price: '$49',
            description: 'Complete design system',
            image:
                'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop',
        },
    ]);

    const [services, setServices] = useState<Service[]>([
        {
            id: '1',
            title: 'UX Audit',
            price: '$199',
            description: 'Full analysis of your digital product.',
        },
    ]);

    return (
        <div className="space-y-12">
            <div>
                <SectionHeader
                    title="Product Showcase"
                    description="Add your products with images to boost your card sales."
                    icon={<Package size={22} />}
                />
                <div className="grid grid-cols-1 gap-6">
                    {products.map((p) => (
                        <Card
                            key={p.id}
                            className="flex flex-col sm:flex-row gap-4 lg:gap-6 overflow-hidden items-start sm:items-center p-4"
                        >
                            <div className="w-full sm:w-24 aspect-square sm:aspect-auto sm:h-24 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-neutral-50">
                                <img src={p.image} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-neutral-900 tracking-tight truncate">
                                    {p.name}
                                </h4>
                                <p className="text-xs text-neutral-400 line-clamp-2">
                                    {p.description}
                                </p>
                                <span className="text-sm font-black text-emerald-600 mt-1 block">
                                    {p.price}
                                </span>
                            </div>
                            <div className="flex sm:flex-col lg:flex-row gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                <button className="flex-1 sm:flex-none p-3 bg-neutral-50 text-neutral-400 rounded-xl hover:text-black active:scale-95 transition-all flex items-center justify-center">
                                    <Wrench size={16} />
                                </button>
                                <button className="flex-1 sm:flex-none p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 active:scale-95 transition-all flex items-center justify-center">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </Card>
                    ))}
                    <button className="w-full py-6 border-2 border-dashed border-neutral-200 rounded-[32px] text-neutral-400 font-black text-xs uppercase tracking-widest hover:border-neutral-900 hover:text-neutral-900 transition-all flex items-center justify-center gap-2 bg-white">
                        <Plus size={16} /> Create New Product
                    </button>
                </div>
            </div>

            <div>
                <SectionHeader
                    title="Services List"
                    description="List your professional services (No images required)."
                    icon={<Layers size={22} />}
                />
                <div className="grid grid-cols-1 gap-6">
                    {services.map((s) => (
                        <Card
                            key={s.id}
                            className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-start sm:items-center p-4 py-4"
                        >
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-neutral-900 tracking-tight truncate">
                                    {s.title}
                                </h4>
                                <p className="text-xs text-neutral-400 line-clamp-2">
                                    {s.description}
                                </p>
                                <span className="text-sm font-black text-emerald-600 mt-1 block">
                                    {s.price}
                                </span>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <button className="flex-1 sm:flex-none p-3 bg-neutral-50 text-neutral-400 rounded-xl hover:text-black active:scale-95 transition-all flex items-center justify-center">
                                    <Wrench size={16} />
                                </button>
                                <button className="flex-1 sm:flex-none p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 active:scale-95 transition-all flex items-center justify-center">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </Card>
                    ))}
                    <button className="w-full py-6 border-2 border-dashed border-neutral-200 rounded-[32px] text-neutral-400 font-black text-xs uppercase tracking-widest hover:border-neutral-900 hover:text-neutral-900 transition-all flex items-center justify-center gap-2 bg-white">
                        <Plus size={16} /> Add Service Offering
                    </button>
                </div>
            </div>
        </div>
    );
}
