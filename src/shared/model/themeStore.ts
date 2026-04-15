import { create } from "zustand";

type ThemeStore = {
  theme: "light" | "dark";
  setNewTheme: (theme: "light" | "dark") => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setNewTheme: (theme) => {
    console.log(theme);
    set({ theme });
  },
}));
