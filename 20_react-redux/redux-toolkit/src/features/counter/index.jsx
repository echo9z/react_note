import { useDispatch, useSelector } from 'react-redux';
// action
import { increment, decrement, add, sub } from './counterSlice';

export default function Counter() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter Page {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(add({ num: 10 }))}>+10</button>
        <button onClick={() => dispatch(sub({ num: 10 }))}>-10</button>
      </div>
    </div>
  )
}