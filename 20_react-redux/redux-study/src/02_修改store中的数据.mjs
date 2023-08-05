import store from './store/index.mjs';

// console.log(store.getState());

// 修改store中的数据：派发一个action
const action1 = { type: 'change/count', payload: { value: 10 }}
store.dispatch(action1)
console.log('count', store.getState().count);

const action2 = { type: 'change/name', payload: { value: "tom" }}
store.dispatch(action2)
console.log('name', store.getState().name);
