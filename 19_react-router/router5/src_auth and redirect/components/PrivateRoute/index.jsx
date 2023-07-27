import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
// 根据用户信息是否展示，私有路由
export default function PrivateRoute({ component: Component, ...reset }) {
  const auth = useAuth()
  return (
    <Route {...reset}
      render={rootProps => 
        auth.user ? (
          <Component {...rootProps} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: rootProps.location } // 记录当前请求的url信息，当前请求path是/protected
          }} />
        )
      }
  />)
}
