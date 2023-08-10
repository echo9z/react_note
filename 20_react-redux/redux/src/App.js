import { useEffect, useState, useSyncExternalStore } from 'react'
import Home from './components/home'
import Article from './components/article'
import About from './components/about'
import Detail from './components/detail'
import store from './store';
import './App.css';

function App() {
  // 订阅store，当store的count发送变化时，更新count
  // redux 通过store.getState() 获取store中所有state数据
  const count = useSyncExternalStore(store.subscribe, 
    () => store.getState().a.count)

  // const add = () => {
  //   // dispatch 传入一个action对象
  //   const action = { type: 'add', payload: { num: 1}}
  //   store.dispatch(action) // 配发一个action
  // }
  // const [count, setCount] = useState(store.getState().a.count)
  // useEffect(() => {
  //   store.subscribe(() => {
  //     setCount(store.getState().a.count)
  //   })
  // }, [])

  return (
    <div className="App">
      <h2>App count:{count}</h2>
      <div>
        <Home/>
        <Detail/>
        <About />
        <Article/>
      </div>
    </div>
  );
}

export default App;
