import { combineReducers } from 'redux' 
import * as actionType from './constants';
// 初始化state值
const initialState = {
  count: 0,
  articles: []
}

/**
 * 参数1：store中目前保存的state值
 * 参数2：本次需要更新的action（display传入action对象）
 * 返回值：返回最新state值
 */
const aReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
      return {...state, count: state.count + action.payload.value };
    case actionType.SUB:
      return {...state, count: state.count - action.payload.value }
    case actionType.CHANGE_ART:
      return {...state, articles: action.payload.value }
    default:
      return state
  }
}

const bReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case actionType.CHANGE_USER:
      return {...state, userInfo: action.payload.value };
    default:
      return state
  }
}

// 合并多个 reducer 为一个 根reducer
const rootReducer = combineReducers({
  a: aReducer,
  b: bReducer
})
export default rootReducer 