import React, { useState } from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import Login from './containers/Login';
import Main from './containers/Main';
import NotFound from './containers/NotFound';
import Registration from './components/Registration/Registration';
import Panel from './containers/Panel';
import Header from './containers/Header';
import IrrPreview from './containers/IrrPreview';
import UsersPanel from './containers/UsersPanel';
import Footer from './components/Footer/Footer'
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {

  const [isAuthenticated, setUserStatus] = useState(false)

  const onLoad = (user) => {
    console.log("app")
    console.log(user)
    if (user.email !== '') { setUserStatus(true) } else {
      setUserStatus(false)
    }
  }


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />

            <Switch>
              <Route exact path="/" component={() => <Login onLoad={onLoad} />} />
              <Route exact path="/registration" component={Registration} />
              <Route path="/PageNotFoundError" component={NotFound} />
              {isAuthenticated && <Route exact path="/main" component={Main} appProps={{ isAuthenticated }} />}
              {isAuthenticated && <Route path="/preview" component={IrrPreview} appProps={{ isAuthenticated }} />}
              {isAuthenticated && <Route path="/userspanel" component={UsersPanel} appProps={{ isAuthenticated }} />}
              <Redirect from="*" to="/PageNotFoundError" />
            </Switch>

          <Footer/>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
