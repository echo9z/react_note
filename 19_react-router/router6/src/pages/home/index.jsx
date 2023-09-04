import { NavLink, Outlet, useOutlet } from 'react-router-dom'
import { HomeWrapper } from './style'

export default function Home(){
  // 如果最套路由没有挂载，则result为nul1
  // 如果嵌套路由已经挂载，则展示眠套的路由对象
  const result = useOutlet()
  console.log("🚀 ~Home ~ outlet:", result)
  
  // const match = useMatch() // 传入url，判断当前url是否请求路由url是否一直
  // console.log(match);
  // const location = useLocation();
  // console.log("🚀 ~ , location",location)
  return (
    <HomeWrapper>
      <h3>Home view content</h3>
      <ul className='tag'>
        {/* to 中v5需要写绝对路径 /home/news，在v6 可不要写 news或者./news */}
        <li><NavLink to={`news`}>news</NavLink></li>
        <li><NavLink to={`message`}>message</NavLink></li>
      </ul>
      {/* 二级路由出口 /home/xxxx */}
      <Outlet />
    </HomeWrapper>
  )
}