import React from 'react';
import './styles/App.css';
import './styles/Font.css'
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './containers/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Registration from './containers/Registration'

const App = () => {


  const activeLink = {
    color: 'blue'
  }

  return (
    <Provider store={store}>
      <Router>
        <div className='fontStyle smallFont'>
          <p><NavLink exact to="/" activeStyle={activeLink}>Strona główna</NavLink></p>
          <p><NavLink exact to="/login" activeStyle={activeLink}>Zaloguj</NavLink></p>
          <p><NavLink exact to="/registration" activeStyle={activeLink}>Zarejestruj</NavLink></p>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Router component={NotFound} />
        </Switch>

      </Router>
    </Provider>
  )
}

export default App;
