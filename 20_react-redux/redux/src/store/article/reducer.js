import * as actionType from './constants';
// 初始化state值
const initialState = {
  articles: []
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_ART:
      return {...state, articles: action.payload.value }
    default:
      return state
  }
}

export default articleReducer 