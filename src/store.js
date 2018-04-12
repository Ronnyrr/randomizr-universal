/* global window */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import * as appReducers from './ducks';
import globals from './config/globals';

const globs = globals('client');
console.log(globs);
// console.log(__DEV__);
// console.log(__CLIENT__);

let middleware = applyMiddleware(thunk);

// default store
const reducers = combineReducers({ ...appReducers });

if (__DEV__ && (globs.__CLIENT__ || __CLIENT__) && typeof window.devToolsExtension === 'function') {
    middleware = compose(middleware, window.devToolsExtension());
}

export default createStore(reducers, middleware);
