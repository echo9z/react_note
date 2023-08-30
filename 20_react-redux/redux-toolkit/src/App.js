import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'
import './App.css';
import Counter from './features/counter'
import Article from './features/article'
import About from './page/about'

function App() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const inc = () => dispatch(increment())
  const dec = () => dispatch(decrement())
  return (
    <div className="App">
      <div>
        <h2>App Count: {count}</h2>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
      </div>
      <div>
        <Counter />
        <Article />
        <About />
      </div>
    </div>
  );
}

export default App;
