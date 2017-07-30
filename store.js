import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import * as topTrackedActions from './actions/TopTracked';
import topTracked from './reducers/topTracked';


const reducers = combineReducers({
  topTracked,
});

const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducers, middleware);
export default store;
