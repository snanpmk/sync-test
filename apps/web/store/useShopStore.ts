import { create } from 'zustand';

interface ShopState {
  selectedCategory: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useShopStore = create<ShopState>((set) => ({
  selectedCategory: 'All Products',
  searchQuery: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
