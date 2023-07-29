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
            {/* 向路由组件传递search参数 */}
            <Link to={`${url}/detail?id=${item.id}&title=${item.content}`} >{item.content}</Link>
          </li>)
        }
      </ul>
      <Switch>
        {/* search参数无需声明接收，query get传递查询参数 */}
        <Route path={`${path}/detail`} component={Detail} />
        <Redirect from={`${path}`} to={`${url}/detail?id=1&title=message01`} />
      </Switch>
    </div>
  )
}
