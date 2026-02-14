'use client';

export const Card = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`bg-white rounded-[32px] p-8 border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] ${className}`}
    >
        {children}
    </div>
);
