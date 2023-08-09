// import { useEffect, useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
// import store from '../store';
import { addAction, subAction } from '../store/creatorAction';

export default function Detail() {
  const count = useSelector(state => state.a.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 style={{color: 'red'}}>Detail Count:{count}</h2>
      <button onClick={() => dispatch(addAction(10))}>+10</button>
      <button onClick={() => dispatch(subAction(5))}>-5</button>
    </div>
  )
}
