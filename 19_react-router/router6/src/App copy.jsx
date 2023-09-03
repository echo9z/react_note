// import { useState } from 'react'
import { styled } from 'styled-components'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

import './App.css'

function App() {
  
  const computedClassName = ({isActive}) => {
    // isActive NavLink是否被点击了
    return isActive ? 'activemq': ''
  }
  return (
    <>
      <h2>router V6</h2>
      <AppWrapper>
        <ul className='left'>
          {/* 在v5的时候，使用activeClassName指定选中类名，在v6需要将class类名写一个函数 */}
          <li><NavLink to='/home' className={computedClassName} >Home</NavLink></li>
          <li><NavLink to='/about' className={computedClassName} >about</NavLink></li>
        </ul>

        <div className='right'>
          {/* 路由注册  v5中Switch变为 Routes, 必须使用Routes包裹 */}
          <Routes>
            {/* 一级路由 */}
            <Route path='/home' element={<Home />}>
              <Route path='/home/a' element={<About />} />
            </Route>
            <Route path='/about' element={<About />} />
            {/* v5中Redirect组件进行重定向，在v6中 Navigate */}
            {/* <Redirect path='/' to='/home' /> */}
            <Route path='/' element={<Navigate to='/home' />} />
          </Routes>
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
      .activemq{
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

export default App
