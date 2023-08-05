import { createStore, combineReducers } from 'redux'
// 初始化state值
const initialState = {
  count: 0
}

// reducer 纯函数
/**
 * 参数1：store中目前保存的state值
 * 参数2：本次需要更新的action（display传入action对象）
 * 返回值：返回最新state值
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {...state, count: state.count + action.payload.num}
    default:
      return state
  }
}

// 创建store
const store = createStore(
  reducer,
  // 添加redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
