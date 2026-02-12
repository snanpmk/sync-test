import { Share2 } from 'lucide-react';

export function DashboardHeader() {
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '/profile/alex');
      alert('Profile link copied to clipboard!');
    }
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 py-4 md:px-8 md:py-6 bg-[#F9FAFB] sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="Profile Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
            Good Morning, Alex 👋
          </h1>
          <p className="text-neutral-500 text-xs md:text-sm mt-0.5 font-bold uppercase tracking-widest opacity-60">
            Performance Overview
          </p>
        </div>
      </div>
      <button
        onClick={handleShare}
        className="hidden md:flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white font-black rounded-2xl hover:translate-y-[-2px] transition-all shadow-xl shadow-neutral-200 active:scale-95 cursor-pointer text-sm tracking-tight"
      >
        <Share2 size={18} className="text-[#CCFF00]" /> SHARE PROFILE
      </button>
    </header>
  );
}
