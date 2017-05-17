import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  // const createLogger = require('redux-logger');
  // middlewares.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
);

export default configureStore;