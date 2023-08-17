import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import articleSlice from '../features/article/articleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    article: articleSlice
  }
})