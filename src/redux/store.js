import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// https://www.npmjs.com/package/redux-persist

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [thunk, logger];

  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
  let persistor = persistStore(store)

export {store, persistor};