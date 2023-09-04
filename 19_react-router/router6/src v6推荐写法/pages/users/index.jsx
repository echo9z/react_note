import { Link, useParams, Outlet} from 'react-router-dom'

export default function Users() {
  // const match = useRouteMatch() // 获取路由匹配对象
  // path: route中的匹配规则，url请求地址后路径字符串
  // <Route path={`/:id`} 请求的路径 http://localhost:80/users; path='/:id' url='/users'
  // console.log(match.path, match.url)
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li><Link to={`/users/abc`}>users/acb</Link></li>
        <li><Link to={`/users/123`}>users/123</Link></li>
        <li><Link to={`/users/props-v-state`}>props-v-state</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export function User() {
  // 获取路由中的动态参数
  const {userId} = useParams()
  return (
    <div>
      <h3>{userId}</h3>
    </div>
  )
}
