import { createStore, combineReducers } from 'redux'
import rootReducers from './reducer'

// 创建store
const store = createStore(
  rootReducers,
  // 添加redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
