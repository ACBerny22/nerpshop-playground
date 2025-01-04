import { create } from "zustand";

type TitleState = {
    title: string;
    setTitle: (title: string) => void;
};

const useTitleStore = create<TitleState>((set) => ({
    title: "" as string,
    setTitle: (title: string) => set({ title }),
}));

export default useTitleStore;
