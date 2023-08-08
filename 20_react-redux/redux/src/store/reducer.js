import { ADD, SUB } from './constants';
// 初始化state值
const initialState = {
  count: 0
}

/**
 * 参数1：store中目前保存的state值
 * 参数2：本次需要更新的action（display传入action对象）
 * 返回值：返回最新state值
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + action.payload.value };
    case SUB:
      return {...state, count: state.count - action.payload.value }
    default:
      return state
  }
}
export default reducer 