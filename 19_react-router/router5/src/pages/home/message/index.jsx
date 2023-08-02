import React,{ useState } from 'react'
import { useRouteMatch, Link, Switch, Route, Redirect, useHistory } from 'react-router-dom'
// import Detail from './detail'

export default function Message({ routes }) {
  const {path, url} = useRouteMatch()
  const history = useHistory()
  const [arr/* , setArr */] = useState([
    {id:1, content: 'message01'},
    {id:2, content: 'message02'},
    {id:3, content: 'message03'},
  ])
  console.log(path);
  console.log(routes);
  return (
    <div>
      <button onClick={() => history.goBack()}>后退</button>
      <button onClick={() => history.goForward()}>前进</button>
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
            }} >{item.content}</Link> &nbsp; <button onClick={() => {
              history.push(`${url}/detail`, { 
                id: item.id,
                title: item.content
              })
            }}>push</button> | <button onClick={() => {
              history.replace(`${url}/detail`, { 
                id: item.id,
                title: item.content
              })
            }}>replace</button>
          </li>)
        }
      </ul>
      <Switch>
        {/* search参数无需声明接收，query get传递查询参数 */}
        {/* <Route path={`${path}/detail`} component={Detail} /> */}
        {
          routes.map((route, idx) => 
            <Route key={idx} path={route.path} render={routeProps => (
              <route.component {...routeProps} routes={route.routes} />
            )}/>
          )
        }
        
        <Redirect from={`${path}`} to={{
          pathname: `${url}/detail`,
          state: { id: 1, title: 'message01' }
        }} />
      </Switch>
    </div>
  )
}
