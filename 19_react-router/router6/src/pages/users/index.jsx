import { useLocation, Link, useParams, Outlet, useMatch, useSearchParams } from 'react-router-dom'

export default function Users() {
  const location = useLocation()
  console.log(location);
  return (
    <div style={{background: 'pink'}}>
      <h3>Users</h3>
      <ul>
        <li><Link to={`/users/abc?id=1&name=red`}>users/acb</Link></li>
        <li><Link to={`/users/123?id=2&name=green`}>users/123</Link></li>
        <li><Link to={`/users/props-v-state?id=3&name=blue`}>props-v-state</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export function User() {
  // 通过useParams获取路由动态参数
  const match = useMatch('/users/:info')
  console.log("🚀 ~ User ~ match:", match)
  const { info } = useParams()
  const [search, setSearch] = useSearchParams()
  console.log("🚀 ~ search:", search.get('id'), search.get('name'))
  return (<div>
    <h3>{info}</h3>
    <p>search id:{search.get('id')} name:{search.get('name')} </p>
    {/* setSearch会修改url的query参数，同时页面会渲染 */}
    <button onClick={() => setSearch('id=5&name=lol')}>更新search 参数</button>
  </div>)
}
