'use client';

import { ExternalLink, TrendingUp } from 'lucide-react';

const links = [
  {
    title: 'Portfolio Website',
    url: 'https://synconnect.me/portfolio',
    clicks: 1240,
    growth: '+15.2%',
    type: 'External',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'LinkedIn Profile',
    url: 'https://linkedin.com/in/user',
    clicks: 980,
    growth: '+8.4%',
    type: 'Social',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Latest Blog Post',
    url: 'https://synconnect.me/blog/future-of-ai',
    clicks: 750,
    growth: '+22.1%',
    type: 'Article',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Product Catalog',
    url: 'https://synconnect.me/shop',
    clicks: 620,
    growth: '+5.7%',
    type: 'Shop',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export function TopPerformingLinks() {
  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-2xl hover:shadow-md hover:border-neutral-200 transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${link.color}`}
            >
              <ExternalLink size={18} />
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 text-sm group-hover:text-black transition-colors">
                {link.title}
              </h4>
              <p className="text-neutral-400 text-xs mt-0.5 truncate max-w-[150px] sm:max-w-none">
                {link.url}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm font-bold text-neutral-900">
                {link.clicks.toLocaleString()}
              </p>
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Clicks
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-primary/10 text-[#88AA00] rounded-lg text-xs font-bold border border-primary/20">
              <TrendingUp size={10} />
              {link.growth}
            </div>
          </div>
        </div>
      ))}
      <button className="w-full py-3 text-sm font-bold text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-100 transition-all mt-2">
        View All Performance Data
      </button>
    </div>
  );
}
