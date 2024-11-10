import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  clicks: number;
  multiplier: number;
  lastClick: number;
  walletConnected: boolean;
  incrementClicks: () => void;
  setWalletConnected: (connected: boolean) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      clicks: 0,
      multiplier: 1,
      lastClick: 0,
      walletConnected: false,
      incrementClicks: () =>
        set((state) => ({
          clicks: state.clicks + state.multiplier,
          lastClick: Date.now(),
        })),
      setWalletConnected: (connected) => set({ walletConnected: connected }),
    }),
    {
      name: 'game-storage',
    }
  )
);