import { CHANGE_COUNT, CHANGE_NAME } from "./constants.mjs"

// 初始数据
const initialState = {
  count: 0,
  name: 'ok',
}
// 定义reducer函数：纯函数
/**
 * 参数1：store中目前保存的state值
 * 参数2：本次需要更新的action（display传入action对象）
 * 返回值：返回最新state值
 */
export default function reducer(state = initialState, action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, 
        count: state.count + action.payload.value };
    case CHANGE_NAME:
      return { ...state, 
        name: action.payload.value }
    default:
      return state;
  }
}