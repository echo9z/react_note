import { useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink } from "react-router-dom";
import About from './pages/about';
import Users from './pages/users';
import Home from './pages/home';
import './App.css'
import Test from './pages/test';
import FadingRoute from './components/FadingRoute';
import ListItemLink from './components/ListItemLink';

function App() {
  const [isActive, setIsActive] = useState('home')
  
  return (
    <Router>
      <h2>router基本使用</h2>
      <div>
        <nav>
          <ul>
            {/* 
              // exact 是否精确匹配
              // 模糊匹配:
              // 浏览器地址栏中的 pathname 为：/search/a
              // 匹配成功的 to 属性为：
              // 1 /search 		==> 模糊匹配成功
              // 2 /search/a	==> 完全相同，匹配成功
              // 3 /sear			==> 匹配失败，与一级路径 /search不相等

              // 精确匹配：
              // 浏览器地址栏中的 pathname 为：/search/a
              // 注意：添加 exact 属性后，变为精确匹配，此时，patchname 只能为 /search
              // React 中如果属性是 布尔值 可以只写属性名称，不用写后面的 = 
             */}
            <li><NavLink exact to="/" >Home</NavLink></li>

            <li><NavLink exact to="/users/detail/100" >/users/detail/100</NavLink></li>
            <li><NavLink exact to="/users/detail">/users/detail</NavLink></li>
            <li><NavLink exact to="/users/15" >/users/15</NavLink></li>
            <li><NavLink exact to="/users" >users</NavLink></li>
            
            <li><NavLink exact to="/about/123">about</NavLink></li>
            <ListItemLink to="/abc ">a</ListItemLink>
            {/* <About children='aaa' /> */}
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
          {/* <Route path="/about/:username" component={About} >
            <About a={1} />
          </Route> */}
          <Route path="/users/detail/:id" component={Test} />
          <Route path="/users/detail" component={Test} />
          <Route path="/users/:id" component={Test} />
          <Route path="/users" component={Users} />
          <FadingRoute path="/about/:id" component={About} />
          {/* <Route path="/:id">
            <Test />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
