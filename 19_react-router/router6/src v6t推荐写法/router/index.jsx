import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/home'
import Users, { User } from '../pages/users'
import About from '../pages/about'
import News from '../pages/home/news'
import View from '../pages/home/view'
import Message from '../pages/home/message'
import Detail from '../pages/home/message/detail'
import NoMatch from '../pages/no-match';

// router路由对象 类似于vue-router
const router = createBrowserRouter([
  // 一级路由 / 或者 /home /user都在这个对象下
  {
    id: 'root',
    path: "/",
    loader: async () => { // loader属性，数据加载即在
      const res = await Promise.resolve('ok')
      return res
      // return fetch(`/api/teams/${params.teamId}.json`);
    },
    Component: Layout,
    children:[ // 二级路由
      {
        index: true, // 为true，当访问/ 渲染home组件， 注意定义index，不能添加children
        Component: Home,
      },
      {
        path: 'home',
        Component: Home,
        children: [
          {
            index: true,
            Component: News
          },
          {
            path: 'news',
            Component: News
          },
          {
            path: 'message', // /home/message
            Component: Message,
            children: [
              {
                index: true,
                element: <Navigate to='/home/message/detail' state={{ id: 1, title: 'message01' }} />
              },
              {
                path: 'detail', // /home/message/detail
                Component: Detail,
              }
            ]
          },
          {
            path: ':info', // 兜底的 当访问的 /home/abc /home/12 param={info: abc|12}
            Component: View
          }
        ]
      },
      {
        path: "users",
        element: <Users/>,
        children: [
          {
            path: ':userId',
            element: <User />
          }
        ]
      }
    ]
  },
  {
    id: 'about',
    path: '/about',
    element: <About/>
  },
  {
    id: 'NoMatch',
    path: '*',
    element: <NoMatch/>
  },
])

export default router