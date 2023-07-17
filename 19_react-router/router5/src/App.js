import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import About from './components/about';
import Users from './components/users';
import Home from './components/home';

function App() {
  return (
    <Router>
      <h2>router基本使用</h2>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">users</Link></li>
            <li><Link to="/users/abc">users/abc</Link></li>
            <li><Link to="/about">Home</Link></li>
          </ul>
        </nav>
        <Switch>
          {/* exact当为true时，进行精确匹配
            比如请求localhost:80/user/abc，路由表中匹配path='/user'，与location.pathname=’/user/abc‘ 进行精确匹配；
            如果exact为false呈现对应组件，如果为true不呈现组件
            exact:true  path=/user  to=/user/abc  不呈现组件
            exact:false  path=/user  to=/user/abc  呈现对应path=/user组件
           */}
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
