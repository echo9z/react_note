import React,{ useState } from 'react'
import { useRouteMatch, Link, Switch, Route, Redirect } from 'react-router-dom'
import Info from './detail'

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
            <Link to={`${url}/detail/${item.id}`} >{item.content}</Link>
          </li>)
        }
      </ul>
      <Switch>
        <Route path={`${path}/detail/:messageId`} component={Info} />
        <Redirect from={`${path}`} to={`${url}/detail/1`} />
      </Switch>
    </div>
  )
}
