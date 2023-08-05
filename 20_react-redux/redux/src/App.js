// import logo from './logo.svg';
import { useSyncExternalStore } from 'react'
import store from './store';
import './App.css';

function App() {
  // 订阅store，当store的count发送变化时，更新count
  // redux 通过store.getState() 获取store中所有state数据
  const count = useSyncExternalStore(store.subscribe, 
    () => store.getState().count)

  const add = () => {
    // dispatch 传入一个action对象
    const action = { type: 'add', payload: { num: 1}}
    store.dispatch(action) // 配发一个action
  }
  return (
    <div className="App">
      count: {count}
      <button onClick={add}>+1</button>
    </div>
  );
}

export default App;
