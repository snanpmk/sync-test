import { Sidebar } from '@/components/layout/Sidebar';
import { MobileHeader } from '@/components/layout/MobileHeader';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-primary selection:text-black overflow-hidden text-sm">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 h-full">
                <MobileHeader />
                <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
                    <div className="lg:p-10 p-5 md:p-8 max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
