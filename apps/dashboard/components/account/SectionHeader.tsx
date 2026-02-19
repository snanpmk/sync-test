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
    <div className="flex items-center gap-4 mb-10 mt-2">
        <div className="w-10 h-10 rounded-2xl bg-white border border-neutral-100 shadow-sm text-neutral-900 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h2 className="text-xl font-black text-neutral-900 tracking-tight leading-tight">
                {title}
            </h2>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-0.5">{description}</p>
        </div>
    </div>
);
