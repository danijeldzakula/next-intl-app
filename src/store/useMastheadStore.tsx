import { create } from 'zustand';

type TState = {
  isAuthOpen: boolean;
  isNavbarOpen: boolean;
};

type TFunction = {
  handleAuthOpen: () => void;
  handleAuthClose: () => void;
  handleNavbarOpen: () => void;
  handleNavbarClose: () => void;
};

export const useMastheadStore = create<TState & TFunction>((set) => ({
  isAuthOpen: false,
  isNavbarOpen: false,
  handleAuthOpen: () => {
    set(() => ({ isAuthOpen: true }));
  },
  handleAuthClose: () => {
    set(() => ({ isAuthOpen: false }));
  },
  handleNavbarOpen: () => {
    set(() => ({ isNavbarOpen: true }));
  },
  handleNavbarClose: () => {
    set(() => ({ isNavbarOpen: false }));
  },
}));
