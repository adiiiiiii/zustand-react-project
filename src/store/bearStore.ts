import { create } from "zustand";

type TBearStoreState = {
    bears: number;
    increasPopulation: () => void;
    removeAllBears : () => void;

}
//useBearStore --> hook
//creat --> callbackfunction
//set state will mutate for you
export const useBearStore = create<TBearStoreState>()((set) => ({
    bears : 0,
    increasPopulation : () => set((state) => (
        {bears: state.bears + 1}
    )),
    removeAllBears : () => set({bears: 0})
}))