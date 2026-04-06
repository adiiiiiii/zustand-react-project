import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCatStore = {
    cats: {
        smallCats: number;
        biggerCats: number;
    }
    increaseSmallCats: () => void;
    increaseBiggerCats: () => void;

}
export const catStore = create<TCatStore>()
(
immer((set) => ({
    cats: {
        smallCats: 0,
        biggerCats: 0
    },
    increaseSmallCats: () => set((state) => {
        state.cats.smallCats++;
    }),
    increaseBiggerCats: () => set((state) => {
        state.cats.biggerCats++;
    })
}))
)
