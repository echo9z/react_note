// import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink } from "react-router-dom";
import styled from 'styled-components'
// import About from './pages/about';
// import Users from './pages/users';
// import Home from './pages/home';
// import './App.css'
// import Test from './pages/test';
// import FadingRoute from './components/FadingRoute';
import Header from './components/Header';
// import NoMatch from './pages/no-match';
import routes from './router';

function App() {
  return (
    <Router>
      <h2>router基本使用</h2>
      <Header />
      <AppWrapper>
        <ul className='left'>
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink exact to="/users" >users</NavLink></li>
          <li><NavLink exact to="/about">about</NavLink></li>
        </ul>
        {/* 理解一级路由出口 */}
        <div className='right'>
          <Switch>
            <Redirect exact from='/' to='/home' />
            {routes.map((route, idx) => 
              <Route key={idx} path={route.path} render={routeProps => (
                <route.component {...routeProps} routes={route.routes} />
              )} />
            )}
            {/* <Route path="/home" component={Home} />
            <Route path="/users" component={Users} />
            <FadingRoute path="/about" component={About} /> */}

            {/* 以上路由规则全都不匹配时，404页面; 放在最后，兜底*/}
            {/* <Route path="*" component={NoMatch}/> */}
          </Switch>
        </div>
      </AppWrapper>
    </Router>
  );
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
        padding-left: 20px;
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

export default App;
