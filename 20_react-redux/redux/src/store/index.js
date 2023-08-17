import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import articleReducer from './article';
import countReducer from './count';
// 将多个reducer进行合并
const rootReducers = combineReducers({
  articleRe: articleReducer,
  countRe: countReducer
})
// combineReducers基本原理
// function reducers(state={}, action) {
//   // 返回一个state对象
//   return {
//     articleRe: articleReducer(state.articleRe, action),
//     countRe: countReducer(state.countRe, action)
//   }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// 支持异步dispatch派发异步操作
// 添加多个中间件applyMiddleware(xxx,xxx,xxx)，通过composeEnhancers组合一个增强函数
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

export default store