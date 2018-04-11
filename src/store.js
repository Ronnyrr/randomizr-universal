/* global window */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// redux-persist for native
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import * as appReducers from './ducks';

let middleware = applyMiddleware(thunk);

// default store
const reducers = combineReducers({ ...appReducers });

if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
    middleware = compose(middleware, window.devToolsExtension());
}

export const defaultStore = createStore(reducers, middleware);


// persisting store
const config = {
    key: 'root',
    storage,
    blacklist: ['fonts'],
};

const persistReducer = persistCombineReducers(config, { ...appReducers });

export const configurePersistStore = () => {
    const store = createStore(
        persistReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        compose(middleware),
    );

    const persistor = persistStore(
        store,
        null,
        () => { store.getState(); },
    );

    return { persistor, store };
};
