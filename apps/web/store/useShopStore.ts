import { create } from 'zustand';

interface ShopState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useShopStore = create<ShopState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
