import * as actionType from './constants';
import axios from 'axios'

export const articlesAction = (value) => {
  return { type: actionType.CHANGE_ART, payload: { value } }
}

export const fetchArticlesAction = (value) => {
  // dispatch 派发只能是一个对象dispatch(object)
  // 如果是一个普通action，需要返回action对象
  // 对象中不能直接返回服务器请求的异步数据
  // 如果返回的是一个函数，那么redux是不支持的，需要react-thunk，thunk会自动执行函数
  // 传递的函数有两个参数：dispatch派发action，getState()返回store中的数据
  return async (dispatch, getState) => {
    const {data} = await axios.get('https://www.echouu.com/api/articles/list?page=1&pageSize=5')
    const article = data.data.list
    dispatch(articlesAction(article))
  }
}
