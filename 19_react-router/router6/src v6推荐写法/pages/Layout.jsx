import { Link, Outlet } from 'react-router-dom';
import { styled } from 'styled-components'
import Header from '../components/Header'
// 访问/ 渲染展示视图组件
export default function Layout() {
  return (
    <>
      <Header />
      <AppWrapper>
        <ul className='left'>
          <li><Link to='/home'>home</Link></li>
          <li><Link to='/users'>users</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
        {/* 一级路由出口 */}
        <div className='right'>
          <Outlet />
        </div>
      </AppWrapper>
    </>
  )
}

export const AppWrapper = styled.div`
  display: flex;
  .left{
    margin: 0;
    padding: 0;
    border: solid 1px #ccc;
    border-radius: 5px;
    height: 100%;
    overflow: hidden;
    li {
      list-style: none;
      border-bottom: 1px solid #ccc;
      .active{
        color: red;
        background-color: #ccc;
        font-weight: 400;
      }
      a {
        display: inline-block;
        width: 100px;
        height: 45px;
        line-height: 45px;
        /* padding-left: 20px; */
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .right{
    margin-left: 45px;
  }
`