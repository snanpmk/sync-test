'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  UserPlus,
  Users,
  Grid,
  List,
  ArrowUpDown,
} from 'lucide-react';
import { ConnectionCard } from './ConnectionCard';
import { AddConnectionModal } from './AddConnectionModal';

interface Connection {
  name: string;
  role: string;
  placeMet: string;
  dateMet: string;
  status: 'new' | 'followed_up' | 'collaborator';
  isStarred: boolean;
}

const INITIAL_CONNECTIONS: Connection[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Creative Director at StudioX',
    placeMet: 'TechCrunch Disrupt, SF',
    dateMet: 'Oct 12, 2025',
    status: 'new' as const,
    isStarred: true,
  },
  {
    name: 'Robert Chen',
    role: 'Lead Blockchain Engineer',
    placeMet: 'Web3 Summit, Dubai',
    dateMet: 'Sep 24, 2025',
    status: 'followed_up' as const,
    isStarred: false,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Venture Capitalist',
    placeMet: 'Starbucks, Palo Alto',
    dateMet: 'Nov 02, 2025',
    status: 'collaborator' as const,
    isStarred: true,
  },
  {
    name: 'James Wilson',
    role: 'Product Manager at Google',
    placeMet: 'LinkedIn Networking Event',
    dateMet: 'Aug 15, 2025',
    status: 'followed_up' as const,
    isStarred: false,
  },
  {
    name: 'Anya Sharma',
    role: 'Freelance UI Designer',
    placeMet: 'Co-working Space, Bangalore',
    dateMet: 'Jun 10, 2025',
    status: 'collaborator' as const,
    isStarred: false,
  },
  {
    name: 'David Ng',
    role: 'Founder of HealthTrack',
    placeMet: 'Gym Meetup, Singapore',
    dateMet: 'May 05, 2025',
    status: 'new' as const,
    isStarred: false,
  },
];

export function ConnectionsView() {
  const [connections, setConnections] =
    useState<Connection[]>(INITIAL_CONNECTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'starred' | 'recent'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddConnection = (newConn: Connection) => {
    setConnections([{ ...newConn, isStarred: false }, ...connections]);
  };

  const handleDeleteConnection = (name: string) => {
    setConnections(connections.filter((c) => c.name !== name));
  };

  const handleToggleStar = (name: string) => {
    setConnections(
      connections.map((c) =>
        c.name === name ? { ...c, isStarred: !c.isStarred } : c
      )
    );
  };

  const handleStatusChange = (
    name: string,
    newStatus: Connection['status']
  ) => {
    setConnections(
      connections.map((c) =>
        c.name === name ? { ...c, status: newStatus } : c
      )
    );
  };

  return (
    <div className="p-4 lg:p-10 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header Context & Search */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-[#CCFF00] text-black rounded-lg">
              <Users size={16} strokeWidth={3} />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
              Personal CRM
            </span>
          </div>
          <h1 className="text-3xl font-black text-neutral-900 tracking-tight">
            Your Connections
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
          <div className="relative flex-1 sm:w-80 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, place, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all shadow-sm"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-black rounded-2xl shadow-lg shadow-neutral-200 active:scale-95 hover:translate-y-[-2px] transition-all text-sm tracking-tight"
          >
            <UserPlus size={18} className="text-[#CCFF00]" /> ADD CONNECTION
          </button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-y border-neutral-100/50">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {(['all', 'starred', 'recent'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                filter === t
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-neutral-100 p-1 rounded-xl">
            <button className="p-1.5 bg-white text-black rounded-lg shadow-sm">
              <Grid size={16} />
            </button>
            <button className="p-1.5 text-neutral-400 hover:text-black transition-colors">
              <List size={16} />
            </button>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-black transition-colors">
            <ArrowUpDown size={14} /> Sort: Recent
          </button>
        </div>
      </div>

      {/* Grid of Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {connections
          .filter(
            (c) =>
              c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.placeMet.toLowerCase().includes(searchQuery.toLowerCase()) ||
              c.role.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .filter((c: any) =>
            filter === 'all' ? true : filter === 'starred' ? c.isStarred : true
          )
          .map((connection, index) => (
            <ConnectionCard
              key={index}
              {...connection}
              onDelete={() => handleDeleteConnection(connection.name)}
              onToggleStar={() => handleToggleStar(connection.name)}
              onStatusChange={(
                status: 'new' | 'followed_up' | 'collaborator'
              ) => handleStatusChange(connection.name, status)}
            />
          ))}
      </div>

      {/* Empty State */}
      {searchQuery &&
        connections.filter((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0 && (
          <div className="py-20 text-center">
            <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-neutral-200">
              <Search size={32} className="text-neutral-300" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">
              No results found
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Try adjusting your search query or filters.
            </p>
          </div>
        )}

      <AddConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddConnection}
      />
    </div>
  );
}
