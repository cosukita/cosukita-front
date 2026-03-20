import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_NAME } from "@/contexts/storageName";

export interface BearStore {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<BearStore>()(
  persist(
    (set) => ({
      bears: 0,
      increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
      decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: STORAGE_NAME.bearStorage.toString(),
    },
  ),
);
