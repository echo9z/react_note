import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import articleSlice from '../features/article/articleSlice'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    counter: counterReducer,
    article: articleSlice
  }
})