import React from 'react';
import './styles/App.css';
import './styles/Font.css';
import './styles/General.css';
import './styles/Links.css'
import './styles/Header.css'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import Login from './containers/Login'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Registration from './containers/Registration'
import Panel from './containers/Panel'
import Header from './containers/Header';
import IrrPreview from './containers/IrrPreview';
import AdminPanel from './containers/AdminPanel';
import { PersistGate } from 'redux-persist/integration/react'


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
              <Header />
              <Panel />

              <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
                <Route path="/PageNotFoundError" component={NotFound} />
                <Route path="/preview" component={IrrPreview} />
                <Route path="/adminpanel" component={AdminPanel} />
                <Redirect from="*" to="/PageNotFoundError" />
              </Switch>          
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
