/* eslint-disable */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducer';
import State from './state';

export default createStore(rootReducers, State, compose(
  applyMiddleware(thunk),
  typeof window === 'object'
  && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : (f) => f,
));
