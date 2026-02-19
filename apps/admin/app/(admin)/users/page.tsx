'use client';

import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { MOCK_USERS } from '@/data/mock-data';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function UserManagement() {
    const [users, setUsers] = useState(MOCK_USERS);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form states
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Customer' });
    const [editingUser, setEditingUser] = useState<any>(null);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingUser) {
            setUsers(users.map(u => u.id === editingUser.id ? { ...editingUser } : u));
            setEditingUser(null);
        } else {
            const user = {
                ...newUser,
                id: (users.length + 1).toString(),
                status: 'Active',
                createdAt: new Date().toISOString().split('T')[0]
            };
            setUsers([user, ...users]);
        }
        setIsModalOpen(false);
        setNewUser({ name: '', email: '', role: 'Customer' });
    };

    const startEdit = (user: any) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">User Management</h1>
                    <p className="text-neutral-500 mt-2 font-medium text-base md:text-lg">Manage and monitor platform users access and roles.</p>
                </div>
                <Button onClick={() => { setEditingUser(null); setIsModalOpen(true); }} className="gap-2 w-full sm:w-auto h-12 px-6 justify-center shadow-lg shadow-primary/20">
                    <Plus size={20} />
                    <span className="font-bold">Add User</span>
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search users by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-4 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-primary transition-all shadow-sm text-sm font-medium"
                    />
                </div>
                <Button variant="outline" className="gap-2 w-full md:w-auto h-12 px-6 justify-center border-neutral-200">
                    <Filter size={18} />
                    <span className="font-bold">Filters</span>
                </Button>
            </div>

            <div className="bg-white border border-neutral-200 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full border-collapse text-left min-w-[700px]">
                        <thead>
                            <tr className="border-b border-neutral-100 bg-neutral-50/50">
                                <th className="px-6 md:px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-neutral-400">User Details</th>
                                <th className="px-6 md:px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Status</th>
                                <th className="px-6 md:px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Role</th>
                                <th className="px-6 md:px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-neutral-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 font-medium">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-neutral-50/80 transition-colors group cursor-pointer" onClick={() => startEdit(user)}>
                                    <td className="px-6 md:px-8 py-6">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-neutral-100 border border-neutral-200 shrink-0 flex items-center justify-center font-bold text-xs text-neutral-500">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-bold text-neutral-900 text-sm md:text-base truncate">{user.name}</p>
                                                <p className="text-xs md:text-sm text-neutral-400 truncate">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 md:px-8 py-6">
                                        <span className={`text-[10px] md:text-xs font-bold uppercase px-3 py-1 rounded-full ${user.status === 'Active' ? 'bg-primary/20 text-black' : 'bg-neutral-100 text-neutral-400'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 md:px-8 py-6">
                                        <p className="text-sm md:text-base font-bold text-neutral-600">{user.role}</p>
                                    </td>
                                    <td className="px-6 md:px-8 py-6 text-right">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); startEdit(user); }}
                                            className="text-neutral-400 hover:text-black transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest"
                                        >
                                            Edit profile
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingUser ? "Edit User" : "Add New User"}
            >
                <form onSubmit={handleAddUser} className="space-y-5">
                    <div className="space-y-4">
                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            value={editingUser ? editingUser.name : newUser.name}
                            onChange={(e) => editingUser ? setEditingUser({ ...editingUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })}
                            required
                        />
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            value={editingUser ? editingUser.email : newUser.email}
                            onChange={(e) => editingUser ? setEditingUser({ ...editingUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
                            required
                        />
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Role</label>
                            <select
                                value={editingUser ? editingUser.role : newUser.role}
                                onChange={(e) => editingUser ? setEditingUser({ ...editingUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
                                className="w-full px-5 py-3.5 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm font-bold text-neutral-900 outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                            >
                                <option value="Customer">Customer</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        {editingUser && (
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Status</label>
                                <select
                                    value={editingUser.status}
                                    onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                                    className="w-full px-5 py-3.5 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm font-bold text-neutral-900 outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Suspended">Suspended</option>
                                </select>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="w-full sm:flex-1 h-12 order-2 sm:order-1 font-bold">
                            Cancel
                        </Button>
                        <Button type="submit" className="w-full sm:flex-1 h-12 order-1 sm:order-2 font-bold shadow-lg shadow-primary/20">
                            {editingUser ? "Update User" : "Create User"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
