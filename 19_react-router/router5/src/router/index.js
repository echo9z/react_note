// 定义路由组件
import About from '../pages/about';
import Users, { User } from '../pages/users';
import Home from '../pages/home';
import NoMatch from '../pages/no-match';

import News from '../pages/home/news';
import Message from '../pages/home/message';
import Detail from '../pages/home/message/detail';
import HomeView from '../pages/home/home-view';

const routes = [
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/home/message',
        component: Message,
        routes: [
          {
            path: '/home/message/detail',
            component: Detail,
          }
        ]
      },
      {
        path: '/home/:info',
        component: HomeView
      },
    ]
  },
  {
    path: '/users',
    component: Users,
    routes: [
      { 
        path: '/users/:userId',
        exact: true,
        component: User
      }
    ]
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: NoMatch,
  },
]

export default routes