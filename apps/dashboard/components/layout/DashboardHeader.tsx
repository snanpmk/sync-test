import { Share2 } from 'lucide-react';

export function DashboardHeader() {
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '/profile/alex');
      alert('Profile link copied to clipboard!');
    }
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-6 py-2 mb-2">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
            alt="Profile Avatar"
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
            Good Morning, Alex
          </h1>
          <p className="text-neutral-500 text-sm font-medium">
            Here's how your card is performing today.
          </p>
        </div>
      </div>

      <button
        onClick={handleShare}
        className="hidden md:flex items-center gap-2 px-8 py-3 bg-[#111111] text-[#CCFF00] font-bold rounded-[20px] hover:-translate-y-px transition-all shadow-lg active:scale-95 cursor-pointer text-sm"
      >
        <Share2 size={18} /> Share Profile
      </button>
    </header>
  );
}
