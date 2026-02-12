import { SynConnectLogo } from '@synconnect/ui';
import { Home, BarChart3, Users, UserCircle } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="hidden lg:flex w-72 border-r border-white/5 bg-[#0a0a0a] flex-col h-full">
      <div className="p-8">
        <SynConnectLogo className="h-8 w-auto text-white" />
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          isActive={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Insights"
          isActive={activeTab === 'insights'}
          onClick={() => setActiveTab('insights')}
        />
        <NavItem
          icon={<Users size={20} />}
          label="Connections"
          isActive={activeTab === 'connections'}
          onClick={() => setActiveTab('connections')}
        />
        <NavItem
          icon={<UserCircle size={20} />}
          label="Account"
          isActive={activeTab === 'account'}
          onClick={() => setActiveTab('account')}
        />
      </nav>

      <div className="p-4 border-t border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
            <span className="font-bold text-primary">SC</span>
          </div>
          <div>
            <p className="text-sm font-medium">SynConnect User</p>
            <p className="text-xs text-neutral-400">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-[20px] transition-all duration-300 group ${
        isActive
          ? 'bg-[#CCFF00] text-black font-black shadow-[0_10px_20px_rgba(204,255,0,0.15)] translate-x-1'
          : 'text-neutral-400 hover:text-white hover:bg-white/5'
      }`}
    >
      <span
        className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
      >
        {icon}
      </span>
      <span className="text-sm font-bold tracking-tight">{label}</span>
    </button>
  );
}
