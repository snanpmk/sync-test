'use client';

import { useState } from 'react';
import { AddConnectionModal } from './AddConnectionModal';
import { ConnectionsHeader } from './ConnectionsHeader';
import { ConnectionsControlBar } from './ConnectionsControlBar';
import { ConnectionsGrid, Connection } from './ConnectionsGrid';
import { ConnectionsEmptyState } from './ConnectionsEmptyState';

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

  const handleAddConnection = (newConn: any) => {
    // Cast newConn to Connection if needed, assuming the modal returns a partial or matching shape
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

  const filteredConnections = connections
    .filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.placeMet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((c) =>
      filter === 'all' ? true : filter === 'starred' ? c.isStarred : true
    );

  return (
    <div className="p-2 lg:p-6 space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header Context & Search */}
      <ConnectionsHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAddClick={() => setIsModalOpen(true)}
      />

      {/* Control Bar */}
      <ConnectionsControlBar filter={filter} setFilter={setFilter} />

      {/* Grid of Connections */}
      <ConnectionsGrid
        connections={filteredConnections}
        onDelete={handleDeleteConnection}
        onToggleStar={handleToggleStar}
        onStatusChange={handleStatusChange}
      />

      {/* Empty State */}
      {searchQuery && filteredConnections.length === 0 && (
        <ConnectionsEmptyState />
      )}

      <AddConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddConnection}
      />
    </div>
  );
}

