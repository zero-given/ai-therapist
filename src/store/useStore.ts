import { create } from 'zustand';

interface StoreState {
  tokens: number;
  incrementTokens: (amount: number) => void;
  resetTokens: () => void;
}

export const useStore = create<StoreState>((set) => ({
  tokens: 0,
  incrementTokens: (amount) => set((state) => ({ tokens: state.tokens + amount })),
  resetTokens: () => set({ tokens: 0 }),
}));