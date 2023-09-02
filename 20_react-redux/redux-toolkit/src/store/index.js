import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice'
import articleSlice from '../features/article/articleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    article: articleSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',

})