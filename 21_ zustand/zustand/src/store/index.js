import useBearStore from './useBearStore'
import useArticlesStore from './useArticlesStore'

export const useBear = useBearStore
export const useArticles = useArticlesStore

// 多个zustand 切片合并，类似vuex namespace,redux多个reducer进行合并 具体看https://docs.pmnd.rs/zustand/guides/slices-pattern
// export const createFishSlice = (set) => ({
//   fishes: 0,
//   addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
// })

// export const createBearSlice = (set) => ({
//   bears: 0,
//   addBear: () => set((state) => ({ bears: state.bears + 1 })),
//   eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
// })

// import { create } from 'zustand'
// import { createBearSlice } from './bearSlice'
// import { createFishSlice } from './fishSlice'

// export const useBoundStore = create((...a) => ({
//   ...createBearSlice(...a),
//   ...createFishSlice(...a),
// }))