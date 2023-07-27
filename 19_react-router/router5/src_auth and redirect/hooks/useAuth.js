import { createContext, useContext } from 'react'
export const authContext = createContext()

// 通过useContext 获取auth 上下文跨层级组件中的数据对象
export default function useAuth() {
  return useContext(authContext)
}