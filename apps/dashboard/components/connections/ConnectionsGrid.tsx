'use client';

import { ConnectionCard } from './ConnectionCard';
// We need to define or import the Connection type.
// Since it was defined inside ConnectionsView, let's export it from there or redefine it here.
// Better practice: extract Shared Types, but for now I'll redefine or import if I can't modify the source easily yet.
// I'll assume the refactor of ConnectionsView will export the type or I'll move it to a types file later.
// For now, let's define it here to be safe and I'll update ConnectionsView to use this interface if needed or vice versa.

export interface Connection {
    name: string;
    role: string;
    placeMet: string;
    dateMet: string;
    status: 'new' | 'followed_up' | 'collaborator';
    isStarred: boolean;
}

interface ConnectionsGridProps {
    connections: Connection[];
    onDelete: (name: string) => void;
    onToggleStar: (name: string) => void;
    onStatusChange: (name: string, status: Connection['status']) => void;
}

export function ConnectionsGrid({
    connections,
    onDelete,
    onToggleStar,
    onStatusChange,
}: ConnectionsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {connections.map((connection, index) => (
                <ConnectionCard
                    key={index}
                    {...connection}
                    onDelete={() => onDelete(connection.name)}
                    onToggleStar={() => onToggleStar(connection.name)}
                    onStatusChange={(status) => onStatusChange(connection.name, status)}
                />
            ))}
        </div>
    );
}
