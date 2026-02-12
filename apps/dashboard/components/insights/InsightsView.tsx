'use client';

import { useState } from 'react';
import {
  BarChart3,
  MapPin,
  MousePointer2,
  Smartphone,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  UserPlus,
  Share2,
  Contact,
  Package,
} from 'lucide-react';
import { InsightFilters } from './InsightFilters';
import { ClicksVsViewsChart } from './charts/ClicksVsViewsChart';
import { SocialMediaClicksChart } from './charts/SocialMediaClicksChart';
import { GeoHeatmap } from './charts/GeoHeatmap';
import { DeviceBreakdownChart } from './charts/DeviceBreakdownChart';
import { TopPerformingLinks } from './TopPerformingLinks';
import { AIInsights } from './AIInsights';
import { ProductServicePerformance } from './ProductServicePerformance';
import { MetricCard } from '../home/MetricCard';
import dynamic from 'next/dynamic';

const MapHeatmap = dynamic(() => import('./charts/MapHeatmap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-neutral-50 animate-pulse rounded-3xl flex items-center justify-center">
      <p className="text-neutral-400 font-medium">Loading Map...</p>
    </div>
  ),
});

export function InsightsView() {
  const [activePeriod, setActivePeriod] = useState<
    'daily' | 'weekly' | 'monthly' | 'six_months'
  >('weekly');

  return (
    <div className="p-4 lg:p-10 space-y-10 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header Context & Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100/50 rounded-full w-fit border border-neutral-100/50">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
            Live Analytics Dashboard
          </span>
        </div>
        <InsightFilters
          activePeriod={activePeriod}
          onChange={setActivePeriod}
        />
      </div>

      {/* Primary KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Users size={20} />}
          label="Profile Views"
          value="12,234"
          trend="+12%"
          link="Audience Data"
          colorTheme="blue"
        />
        <MetricCard
          icon={<MousePointer2 size={20} />}
          label="Link Clicks"
          value="8,540"
          trend="+25%"
          link="Click Map"
          colorTheme="emerald"
        />
        <MetricCard
          icon={<Smartphone size={20} />}
          label="NFC/QR Scans"
          value="945"
          trend="+15%"
          link="Hardware Stats"
          colorTheme="orange"
        />
        <MetricCard
          icon={<TrendingUp size={20} />}
          label="Conversion Rate"
          value="4.8%"
          trend="+2.1%"
          link="Funnel Analysis"
          colorTheme="purple"
        />
      </div>

      {/* Engagement Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Contact size={20} />}
          label="Save Contacts"
          value="1,450"
          trend="+8%"
          link="Contact CRM"
          colorTheme="indigo"
        />
        <MetricCard
          icon={<UserPlus size={20} />}
          label="Connections"
          value="1,240"
          trend="+22%"
          link="Manage Network"
          colorTheme="emerald"
        />
        <MetricCard
          icon={<Share2 size={20} />}
          label="Share Clicks"
          value="2,120"
          trend="+18%"
          link="Share History"
          colorTheme="orange"
        />
        <MetricCard
          icon={<Sparkles size={20} />}
          label="Lead Generation"
          value="342"
          trend="+5%"
          link="Leads Form"
          colorTheme="purple"
        />
      </div>

      {/* Main Graph: Views vs Clicks */}
      <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              Performance Over Time
            </h2>
            <p className="text-neutral-400 text-xs font-medium mt-1 uppercase tracking-wider">
              Metrics compared to previous period
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1e293b]" />
              <span className="text-xs font-bold text-neutral-500">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-bold text-neutral-500">Clicks</span>
            </div>
          </div>
        </div>
        <div className="h-[380px]">
          <ClicksVsViewsChart period={activePeriod} />
        </div>
      </div>

      {/* Grid Layout for secondary charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Social & Demographics (Lg: 7/12) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Products & Services Performance */}
          <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-3">
                <span className="p-2.5 bg-neutral-900 text-white rounded-2xl">
                  <Package size={20} />
                </span>
                Products & Services
              </h2>
            </div>
            <ProductServicePerformance />
          </div>

          {/* Top PERFORMING LINKS */}
          <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-3">
                <span className="p-2.5 bg-neutral-900 text-white rounded-2xl">
                  <TrendingUp size={20} />
                </span>
                External Link Performance
              </h2>
            </div>
            <TopPerformingLinks />
          </div>

          {/* Social Traffic */}
          <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-3">
                <span className="p-2.5 bg-neutral-900 text-white rounded-2xl">
                  <BarChart3 size={20} />
                </span>
                Traffic Channels
              </h2>
              <span className="text-[10px] font-black uppercase text-neutral-400 tracking-widest bg-neutral-50 px-3 py-1.5 rounded-full">
                Source Breakdown
              </span>
            </div>
            <div className="min-h-[400px]">
              <SocialMediaClicksChart />
            </div>
          </div>
        </div>

        {/* Right Column - Locations & AI (Lg: 5/12) */}
        <div className="lg:col-span-5 space-y-8">
          {/* AI INSIGHTS - Premium Look */}
          <div className="bg-neutral-900 p-1 text-white rounded-[34px] shadow-2xl overflow-hidden group">
            <div className="bg-white/5 p-6 lg:p-8 rounded-[32px] border border-white/10 h-full">
              <AIInsights />
            </div>
          </div>

          {/* Locations & Devices Combined or Separate */}
          <div className="bg-white p-6 lg:p-8 rounded-[32px] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="p-2.5 bg-orange-50 text-orange-500 rounded-2xl">
                <MapPin size={22} />
              </span>
              Audience Geolocation
            </h2>

            <div className="h-[400px] mb-8 rounded-[24px] overflow-hidden">
              <MapHeatmap />
            </div>

            <h3 className="text-sm font-black uppercase text-neutral-400 mb-4 tracking-widest">
              Global Distribution
            </h3>
            <GeoHeatmap />

            <div className="mt-10 pt-8 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-neutral-900">
                  Device Origin
                </h2>
                <span className="text-[10px] font-black uppercase text-neutral-400">
                  Past 7 Days
                </span>
              </div>
              <div className="h-[220px]">
                <DeviceBreakdownChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Tip or motivation */}
      <div className="bg-primary p-6 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_20px_50px_rgba(204,255,0,0.2)]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-black rounded-2xl shadow-lg">
            <Sparkles className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-black font-black text-lg">
              Your profile is trending!
            </h3>
            <p className="text-black/70 text-sm font-medium">
              You've reached <span className="font-bold">2,500 new people</span>{' '}
              this week. Keep sharing!
            </p>
          </div>
        </div>
        <button className="px-8 py-4 bg-black text-primary font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
          EXPORT FULL REPORT
        </button>
      </div>
    </div>
  );
}
