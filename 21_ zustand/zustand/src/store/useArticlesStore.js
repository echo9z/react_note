import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useArticlesStore = create(
  devtools(
    persist( // windows.localStorage 持久化
      immer((set) => ({
        articles: [],
        count: 0,
        // 使用了immer，不需要通过set返回一个新state对象 set({ count: state.count+num })
        increment: (num) => set((state) => { state.count += num }),
        decrement: (num) => set((state) => { state.count -= num }),
        // 添加异步操作
        fetchArticle: async (pond) => {
          const response = await fetch(pond)
          const { data } = await response.json() 
          set({ articles: data.list })
        },
      })),
      { 
        name: "art",
        // 默认使用'localStorage'
        storage: createJSONStorage(() => sessionStorage)
      }
    ),
  )
)
export default useArticlesStore