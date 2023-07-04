import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
import Pubsub from 'pubsub-js'
import './index.css'

/* function HOCLazyList () {
  const List = ({list}) => {
    return list.map(item => {
      return (
        <div className="card" key={item.id}>
          <a href={item.html_url} target="_blank" rel="noreferrer">
            <img alt="header_pice" src={item.avatar_url} style={{ width: '100px' }}/>
          </a>
          <p className="card-text">{item.login}</p>
        </div>
      )
    }) 
  }
  return lazy(() => new Promise((resolve, reject) =>{
    axios.get(`/api/search/users?q=aaa`).then(res => {
      if(res.status === 200) {
        resolve({
          default: () => <List list={res.data.items}/>
        })
      }
    }).catch(err => console.log(err))
  }))
}
 */
function TodoList(props) {
  const [status, setStatus] = useState({
    list: [],
    isFirst: true,
    isLoading: false,
    err: ''
  })

  useEffect(() => {
    const token = Pubsub.subscribe('sendState', (msg, data) => {
      console.log(msg, data);
      setStatus(v => ({...v, ...data}))
    })
    // 取消订阅消息
    return () => {
      Pubsub.unsubscribe(token)
    }
  }, [])

  return (
    <div className="row">
      { status.isFirst ? <h3>enter the name you search</h3> : null}
      {
        status.isLoading ? <h1>🌀 Loading...</h1> : status.list.map(item => {
          return (
            <div className="card" key={item.id}>
              <a href={item.html_url} target="_blank" rel="noreferrer">
                <img alt="header_pice" src={item.avatar_url} style={{ width: '100px' }}/>
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          )
        }) 
      }
      {status.err === '' ? null : <h1>item.err</h1>}
    </div>
  )
}

export default TodoList
