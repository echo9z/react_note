import { useEffect, useState, useSyncExternalStore } from 'react'
import Home from './components/home'
import User from './components/user'
import store from './store';
import './App.css';

function App() {
  // 订阅store，当store的count发送变化时，更新count
  // redux 通过store.getState() 获取store中所有state数据
  // const count = useSyncExternalStore(store.subscribe, 
  //   () => store.getState().count)

  // const add = () => {
  //   // dispatch 传入一个action对象
  //   const action = { type: 'add', payload: { num: 1}}
  //   store.dispatch(action) // 配发一个action
  // }
  const [count, setCount] = useState(store.getState().count)
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState().count)
    })
  }, [])

  return (
    <div className="App">
      <h2>App count:{count}</h2>
      <div>
        <Home/>
        <User/>
      </div>
    </div>
  );
}

export default App;
