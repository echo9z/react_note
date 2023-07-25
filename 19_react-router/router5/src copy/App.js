// import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink } from "react-router-dom";
import About from './pages/about';
import Users from './pages/users';
import Home from './pages/home';
import './App.css'
import Test from './pages/test';
import FadingRoute from './components/FadingRoute';
import NoMatch from './pages/no-match';

function App() {
  return (
    <Router>
      <h2>router基本使用</h2>
      <div>
        <ul>
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink exact to="/users" >users</NavLink></li>
          <li><NavLink exact to="/about">about</NavLink></li>

        </ul>
        {/* 理解一级路由出口 */}
        <Switch>
          <Redirect from='/' to='/home' />
          <Route exact path="/home" component={Home} />
          <Route path="/users/detail/:id" component={Test} />
          <Route path="/users/detail" component={Test} />
          <Route path="/users/:id" component={Test} />
          <Route path="/users" component={Users} />
          <FadingRoute path="/about/:id" component={About} />

          {/* 以上路由规则全都不匹配时，404页面; 放在最后，兜底*/}
          <Route path="*" component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
