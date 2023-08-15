import { useEffect, useState } from 'react'
import store from '../store';
import { addAction, subAction } from '../store/count';

export default function Home() {
  // 在react中单独使用redux 进行数据状态管理
  const [count, setCount] = useState(store.getState().countRe.count)
  useEffect(() => {
    // 挂载是订阅store
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().countRe.count)
    })
    return () => {
      unsubscribe() // 组件卸载时，取消订阅
    }
  }, [])

  return (
    <div>
      <h2 style={{color: 'red'}}>Home Count:{count}</h2>
      <button onClick={() => store.dispatch(addAction(1))}>+1</button>
      <button onClick={() => store.dispatch(addAction(5))}>+5</button>
      <button onClick={() => store.dispatch(subAction(1))}>-1</button>
    </div>
  )
}
