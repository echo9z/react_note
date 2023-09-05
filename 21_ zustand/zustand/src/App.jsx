import { useEffect } from 'react'
import { useBear, useArticles } from './store'
import './App.css'

function App() {
  const bears = useBear((state) => state.bears)
  const preincrement = useBear((state) => state.preincrement)
  const predecrement = useBear((state) => state.predecrement)
  
  const add = useBear((state) => state.add)
  const sub = useBear((state) => state.sub)

  // article
  const count = useArticles((state) => state.count)
  const increment = useArticles((state) => state.increment)
  const decrement = useArticles((state) => state.decrement)
  const articles = useArticles((state) => state.articles)
  const fetchArticle = useArticles((state) => state.fetchArticle)

  useEffect(() => {
    fetchArticle('https://www.echouu.com/api/articles/list?page=1&pageSize=5')
  }, [])

  return (
    <>
      <h1>zustand</h1>
      <div className="card">
        <p>bears is {bears}</p>
        <button onClick={() => preincrement()}>
          +1
        </button>
        <button onClick={() => predecrement()}>
          -1
        </button>
        <button onClick={() => add(5)}>
          add +5
        </button>
        <button onClick={() => sub(10)}>
          sub -10
        </button>

        <hr/>
        <p>count is {count}</p>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => decrement(1)}>-1</button>

        <hr/>
        <ul>
          {articles.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
