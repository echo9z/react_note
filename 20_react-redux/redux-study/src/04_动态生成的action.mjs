import store from './store/index.mjs';
import { changeNameAction, changeCountAction} from './store/actionCreators.mjs';

// console.log(store.getState());

// 订阅store中state, 返回取消订阅函数
const unsubscribe = store.subscribe(() => {
  // 当state中的数据变化，执行回调
  console.log('state中的数据变化', store.getState());
})

// 封装一个action函数，返回一个action对象
/* const changeCountAction = (value) => {
  return {
    type: 'change/count',
    payload: { value }
  }
}
const changeNameAction = (value) => {
  return {
    type: 'change/name',
    payload: { value }
  }
}*/

// 修改store中的数据：派发一个action
// const action1 = { type: 'change/count', payload: { value: 10 }}
store.dispatch(changeCountAction(100))

// 取消订阅
unsubscribe()
// 下面dispatch修改state数据，就不会被监听到
// const action2 = { type: 'change/name', payload: { value: "tom" }}
store.dispatch(changeNameAction('lilei'))
