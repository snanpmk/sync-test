'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer-v3';
import 'leaflet/dist/leaflet.css';

// Mock data for heatmap: [lat, lng, intensity]
const heatmapData: [number, number, number][] = [
  // Kerala High Density Corridor
  [8.5241, 76.9366, 0.9], // Trivandrum
  [8.6, 76.9, 0.6],
  [8.8932, 76.6141, 0.7], // Kollam
  [9.1, 76.5, 0.4],
  [9.4981, 76.3388, 0.8], // Alappuzha
  [9.5916, 76.5222, 0.75], // Kottayam
  [9.9312, 76.2673, 0.95], // Kochi
  [10.0, 76.3, 0.8],
  [10.2, 76.2, 0.5],
  [10.5276, 76.2144, 0.8], // Thrissur
  [10.8505, 76.2711, 0.6], // Malappuram
  [11.2588, 75.7804, 0.85], // Kozhikode
  [11.5, 75.8, 0.4],
  [11.8745, 75.3704, 0.7], // Kannur
  [12.1, 75.4, 0.3],

  // Other Major Cities
  [12.9716, 77.5946, 0.8], // Bangalore
  [19.076, 72.8777, 0.9], // Mumbai
  [13.0827, 80.2707, 0.7], // Chennai
  [28.6139, 77.209, 0.8], // Delhi

  // High Intensity Global Hubs
  [25.2048, 55.2708, 0.7], // Dubai
  [51.5074, -0.1278, 0.5], // London
  [40.7128, -74.006, 0.4], // New York
];

export default function MapHeatmap() {
  return (
    <div className="w-full h-full rounded-[32px] overflow-hidden border border-neutral-100 shadow-inner group relative">
      <style jsx global>{`
        .leaflet-control-attribution {
          display: none !important;
        }
        .grayscale-map {
          filter: grayscale(100%) invert(0%) contrast(90%);
        }
      `}</style>
      <MapContainer
        center={[10.5, 76.5]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', background: '#F8FAFC' }}
        className="grayscale-map"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <HeatmapLayer
          points={heatmapData}
          longitudeExtractor={(m: any) => m[1]}
          latitudeExtractor={(m: any) => m[0]}
          intensityExtractor={(m: any) => m[2]}
          radius={30}
          blur={20}
          max={1.0}
        />
      </MapContainer>

      {/* Premium Overlay for map feel */}
      <div className="absolute inset-0 pointer-events-none border-12 border-white/10 rounded-[32px] z-20" />
    </div>
  );
}
