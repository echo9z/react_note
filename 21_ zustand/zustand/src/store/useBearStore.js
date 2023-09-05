import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

const useBearStore = create(
  devtools(
    persist( // windows.localStorage 持久化
      (set, get) => ({
        bears: 0,
        preincrement: () => set((state) => ({ bears: state.bears + 1 })),
        predecrement: () => set(() => ({ bears: get().bears - 1 })),
        removeAllBears: () => set({ bears: 0 }),
        add: (payload) => set(state => ({ bears: state.bears + payload })),
        sub: (payload) => set(state => ({ bears: state.bears - payload })),
      }),
      { 
        name: "bears",
        // 默认使用'localStorage'
        storage: createJSONStorage(() => sessionStorage)
      }
    ),
  )
)
export default useBearStore