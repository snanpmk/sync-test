'use client';

import { useState } from 'react';
import { Plus, Package, AlertCircle, Search, ArrowUpRight } from 'lucide-react';
import { MOCK_INVENTORY } from '@/data/mock-data';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function InventoryManagement() {
    const [inventory, setInventory] = useState(MOCK_INVENTORY);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any>(null);

    // Form states
    const [newProduct, setNewProduct] = useState({ name: '', sku: '', category: 'Premium', stock: 0, price: 0 });

    const filteredInventory = inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lowStockCount = inventory.filter(item => item.stock < 15).length;

    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            setInventory(inventory.map(p => p.id === editingProduct.id ? { ...editingProduct } : p));
            setEditingProduct(null);
        } else {
            const product = {
                ...newProduct,
                id: (inventory.length + 1).toString()
            };
            setInventory([product, ...inventory]);
        }
        setIsModalOpen(false);
        setNewProduct({ name: '', sku: '', category: 'Premium', stock: 0, price: 0 });
    };

    const startEdit = (product: any) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">Inventory</h1>
                    <p className="text-neutral-500 mt-1 font-medium text-sm md:text-base">Manage products and stock levels.</p>
                </div>
                <Button onClick={() => { setEditingProduct(null); setIsModalOpen(true); }} className="gap-2 w-full sm:w-auto justify-center">
                    <Plus size={20} />
                    <span>Add Product</span>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] p-5 md:p-6 flex items-start justify-between shadow-sm">
                    <div>
                        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Low Stock Alert</p>
                        <p className="text-xl md:text-2xl font-extrabold mt-2 text-neutral-900">{lowStockCount} Items</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                        <AlertCircle size={20} />
                    </div>
                </div>
                <div className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] p-5 md:p-6 flex items-start justify-between shadow-sm">
                    <div>
                        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Total Products</p>
                        <p className="text-xl md:text-2xl font-extrabold mt-2 text-neutral-900">{inventory.length}</p>
                    </div>
                    <div className="p-3 bg-primary/20 rounded-2xl text-black">
                        <Package size={20} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-3.5 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-primary transition-colors shadow-sm text-sm"
                    />
                </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full border-collapse text-left min-w-[800px]">
                        <thead>
                            <tr className="border-b border-neutral-100 bg-neutral-50/50">
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Product</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">SKU</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Category</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Stock</th>
                                <th className="px-6 md:px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400 text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {filteredInventory.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-neutral-50 transition-colors group cursor-pointer"
                                    onClick={() => startEdit(item)}
                                >
                                    <td className="px-6 md:px-8 py-5">
                                        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-50 border border-neutral-100 shrink-0 flex items-center justify-center transition-colors group-hover:bg-white group-hover:border-neutral-200">
                                                <Package size={20} className="text-neutral-400 group-hover:text-primary transition-colors" />
                                            </div>
                                            <p className="font-bold text-neutral-900 text-sm truncate">{item.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 md:px-8 py-5 text-[10px] md:text-sm text-neutral-500 font-mono font-bold truncate">{item.sku}</td>
                                    <td className="px-6 md:px-8 py-5 text-xs md:text-sm text-neutral-500 font-bold">{item.category}</td>
                                    <td className="px-6 md:px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.stock < 15 ? 'bg-red-500' : 'bg-primary'}`} />
                                            <p className={`font-bold text-xs ${item.stock < 15 ? 'text-red-500' : 'text-neutral-700'}`}>
                                                {item.stock} <span className="hidden sm:inline">available</span>
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-6 md:px-8 py-5 text-right">
                                        <p className="font-bold text-neutral-900 text-sm">${item.price.toFixed(2)}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredInventory.length === 0 && (
                    <div className="p-20 text-center">
                        <p className="text-neutral-400 font-bold">No products found.</p>
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingProduct ? "Edit Product" : "Add New Product"}
            >
                <form onSubmit={handleAddProduct} className="space-y-5">
                    <div className="space-y-4">
                        <Input
                            label="Product Name"
                            placeholder="e.g. Premium Business Card"
                            value={editingProduct ? editingProduct.name : newProduct.name}
                            onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })}
                            required
                        />
                        <Input
                            label="SKU"
                            placeholder="e.g. SKU-001"
                            value={editingProduct ? editingProduct.sku : newProduct.sku}
                            onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, sku: e.target.value }) : setNewProduct({ ...newProduct, sku: e.target.value })}
                            required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                                label="Stock Level"
                                type="number"
                                placeholder="0"
                                value={editingProduct ? editingProduct.stock : newProduct.stock}
                                onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) }) : setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                                required
                            />
                            <Input
                                label="Price ($)"
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                value={editingProduct ? editingProduct.price : newProduct.price}
                                onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) }) : setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Category</label>
                            <select
                                value={editingProduct ? editingProduct.category : newProduct.category}
                                onChange={(e) => editingProduct ? setEditingProduct({ ...editingProduct, category: e.target.value }) : setNewProduct({ ...newProduct, category: e.target.value })}
                                className="w-full px-5 py-3.5 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm font-bold text-neutral-900 outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                            >
                                <option value="Premium">Premium</option>
                                <option value="Reviews">Reviews</option>
                                <option value="Essentials">Essentials</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="w-full sm:flex-1 h-12 order-2 sm:order-1 font-bold">
                            Cancel
                        </Button>
                        <Button type="submit" className="w-full sm:flex-1 h-12 order-1 sm:order-2 font-bold shadow-lg shadow-primary/20">
                            {editingProduct ? "Update Product" : "Add Product"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
