'use client';

export const SectionHeader = ({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: any;
}) => (
    <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h2 className="text-xl font-black text-neutral-900 tracking-tight">
                {title}
            </h2>
            <p className="text-neutral-500 text-sm font-medium">{description}</p>
        </div>
    </div>
);
