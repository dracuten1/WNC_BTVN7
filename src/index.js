import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import gameReducer from './store/reducers/gameReducers';
import authenticaReducer from './store/reducers/authenticaReducer';
import onlienReduce from './store/reducers/onlineState';

const rootReducer = combineReducers({
    grc: gameReducer,
    auth: authenticaReducer,
    onl: onlienReduce
});
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    compose(applyMiddleware(thunk)),
);
const store = createStore(rootReducer, enhancer);
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

serviceWorker.unregister();
