import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@synconnect/schema';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  notification: {
    message: string;
    type: 'success' | 'error' | 'info';
    isVisible: boolean;
  };
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  showNotification: (message: string, type?: 'success' | 'error' | 'info') => void;
  hideNotification: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      notification: {
        message: '',
        type: 'success',
        isVisible: false,
      },
      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === product.id);
        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
        get().showNotification(`${product.name} added to cart!`);
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      showNotification: (message, type = 'success') => {
        set({ notification: { message, type, isVisible: true } });
        // Auto hide after 3 seconds
        setTimeout(() => get().hideNotification(), 3000);
      },
      hideNotification: () => {
        set({ notification: { ...get().notification, isVisible: false } });
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ items: state.items }), // Only persist items
    }
  )
);
