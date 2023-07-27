import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink } from "react-router-dom";
import './App.css'
import PublicPage from './pages/public'
import ProtectedPage from './pages/protected'
import LoginPage from './pages/login'
import PrivateRoute from './components/PrivateRoute'
import ProvideAuth from './components/ProvideAuth'
import AuthButton from './components/AuthButton'

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li><NavLink to='/public'>Public page</NavLink></li>
            <li><NavLink to='/protected'>Protected page</NavLink></li>
          </ul>

          <Switch>
            <Route path='/public' component={PublicPage}/>
            <Route path='/login' component={LoginPage}/>
            <PrivateRoute path='/protected' component={ProtectedPage}/>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
