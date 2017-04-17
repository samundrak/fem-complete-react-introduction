import { createStore } from 'redux';
import rootReducers from './reducer';
import State from './state';

export default createStore(rootReducers, State);
