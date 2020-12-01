import React from 'react';
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
import AccountView from './containers/AccountView';
import Header from './containers/Header';
import IrrPreview from './containers/IrrPreview';
import UsersPanel from './containers/UsersPanel';
import Footer from './components/Footer/Footer'
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header/>

            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/myaccount" component={AccountView} />
              <Route path="/PageNotFoundError" component={NotFound} />
              <Route exact path="/main" component={Main} />
              <Route path="/preview" component={IrrPreview} />
              <Route path="/userspanel" component={UsersPanel} />
              <Redirect from="*" to="/PageNotFoundError" />
            </Switch>

          <Footer/>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
