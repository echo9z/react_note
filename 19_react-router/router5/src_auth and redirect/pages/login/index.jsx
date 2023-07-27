import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
export default function LoginPage(props) {
  let history = useHistory() // 导航链接跳转
  let location = useLocation() // 记录url请求信息
  let auth = useAuth() // 获取共享数据对象
  console.log(props)
  // 获取之前没有认证的auth请求 url信息，如果没有直接跳转值 /路径
  const { from } = location.state || { from: { pathname: '/' }}
  const login = () => {
    auth.signin(() => {
      history.replace(from);
    })
  }
  return (<div>
    <p>You must log in to view the page at {from.pathname}</p>
    <button onClick={login}>Login</button>
  </div>)
}