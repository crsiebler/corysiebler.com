import { create } from 'zustand';

interface DisplayState {
  drawer: boolean;
  toggleDrawer: () => void;
}

export const useDisplay = create<DisplayState>((set) => ({
  drawer: false,
  toggleDrawer: () => set((state) => ({ drawer: !state.drawer })),
}));
