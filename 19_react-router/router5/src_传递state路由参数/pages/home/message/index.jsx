import React,{ useState } from 'react'
import { useRouteMatch, Link, Switch, Route, Redirect } from 'react-router-dom'
import Detail from './detail'

export default function Message() {
  const {path, url} = useRouteMatch()
  const [arr, setArr] = useState([
    {id:1, content: 'message01'},
    {id:2, content: 'message02'},
    {id:3, content: 'message03'},
  ])
  console.log(path);
  return (
    <div>
      <ul>
        {
          arr.map((item) => <li key={item.id}>
            <Link to={{
              pathname: `${url}/detail`,
              // search: `?id=${item.id}&title=${item.content}`, // url后添加?id=1&title=message
              // hash: "#the-hash", // 在 url添加 #the-hash
              state: { 
                id: item.id,
                title: item.content
              } // 路由组件中，通过location.state
            }} >{item.content}</Link>
          </li>)
        }
      </ul>
      <Switch>
        {/* search参数无需声明接收，query get传递查询参数 */}
        <Route path={`${path}/detail`} component={Detail} />
        <Redirect from={`${path}`} to={{
          pathname: `${url}/detail`,
          state: { id: 1, title: 'message01' }
        }} />
      </Switch>
    </div>
  )
}
