import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import About from './components/about';
import Users from './components/users';
import Home from './components/home';
import './App.css'
import Test from './components/test';

function App() {
  const [isActive, setIsActive] = useState('home')
  
  return (
    <Router>
      <h2>router基本使用</h2>
      <div>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setIsActive('home')}
              className={`${isActive === 'home'? 'active':''}`}>Home</Link></li>

            <li><Link to="/users/detail/100" >/users/detail/100</Link></li>
            <li><Link to="/users/detail">/users/detail</Link></li>
            <li><Link to="/users/15" >/users/15</Link></li>
            <li><Link to="/users" onClick={() => setIsActive('users')}
              className={`${isActive === 'users'? 'active':''}`}>users</Link></li>
            
            <li><Link to="/about" onClick={() => setIsActive('about')}
              className={`${isActive === 'about'? 'active':''}`}>about</Link></li>
          </ul>
        </nav>
        {/* 理解一级路由出口 */}
        <Switch>
          {/* exact当为true时，进行精确匹配
            比如请求localhost:80/user/abc，路由表中匹配path='/user'，与location.pathname=’/user/abc‘ 进行精确匹配；
            如果exact为false呈现对应组件，如果为true不呈现组件
            exact:true  path=/user  to=/user/abc  不呈现组件
            exact:false  path=/user  to=/user/abc  呈现对应path=/user组件
           */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/detail/:id" component={Test} />
          <Route path="/users/detail" component={Test} />
          <Route path="/users/:id" component={Test} />
          <Route path="/users" component={Users} />
          
          {/* <Route path="/:id">
            <Test />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
