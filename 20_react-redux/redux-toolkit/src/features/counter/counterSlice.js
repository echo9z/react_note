import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

// createSlice创建切片对象，包含 reducer函数的对象、切片名称和state初始状态值
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { // dispatch(increment()) action
      state.count += 1; // 内部使用 immerjs 的库，原来需要返回完整新的state对象
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // add(payload)
    add: (state, action) => {
      state.count += action.payload.num
    },
    sub: (state, action) => {
      state.count -= action.payload.num
    }
  }
})

// 导出action
export const { increment, decrement, add, sub } = counterSlice.actions

// 导出reducer
export default counterSlice.reducer