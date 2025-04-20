import { create } from 'zustand';

interface DisplayState {
  drawer: boolean;
  hideDrawer: () => void;
  showDrawer: () => void;
}

export const useDisplay = create<DisplayState>((set) => ({
  drawer: false,
  hideDrawer: () => set(() => ({ drawer: false })),
  showDrawer: () => set(() => ({ drawer: true })),
}));
