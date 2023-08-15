import * as actionType from './constants';
// 初始化state值
const initialState = {
  count: 0,
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
      return {...state, count: state.count + action.payload.value };
    case actionType.SUB:
      return {...state, count: state.count - action.payload.value }
    default:
      return state
  }
}

export default countReducer 