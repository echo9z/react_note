import { useEffect, useState } from 'react'
import store from '../store';
import { addAction, subAction } from '../store/creatorAction';

export default function About() {
  const [count, setCount] = useState(store.getState().count)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count)
    })
    return () => {
      unsubscribe()
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
