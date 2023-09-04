import { Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Users, { User } from '../pages/users'
import About from '../pages/about'
import News from '../pages/home/news'
import Message from '../pages/home/message'
import Detail from '../pages/home/message/detail'
import NoMatch from '../pages/no-match';

// router路由对象 类似于vue-router
const router = [
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: '/home/news', element: <News/> },
      { 
        path: '/home/message',
        element: <Message/>,
        children: [
          { path: '/home/message/detail', element: <Detail/> }
        ]
      },
    ]
  },
  {
    path: '/users',
    element: <Users />,
    children: [
      { path: '/users/:info', element: <User/> }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '*',
    element: <NoMatch/>
  },
]

export default router