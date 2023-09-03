import { Outlet, NavLink } from 'react-router-dom'
import { HomeWrapper } from './style'

export default function Home(){
  // const match = useMatch() // 传入url，判断当前url是否请求路由url是否一直
  // console.log(match);
  // const location = useLocation();
  // console.log("🚀 ~ , location",location)
  return (
    <HomeWrapper>
      <h3>Home view content</h3>
      <ul className='tag'>
        <li><NavLink to={`/home/news`}>{`news`}</NavLink></li>
        <li><NavLink to={`/home/message`}>{`message`}</NavLink></li>
      </ul>
      {/* 二级路由出口 /home/xxxx */}
      <Outlet />
    </HomeWrapper>
  )
}