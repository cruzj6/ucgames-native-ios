import { combineReducers } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import topTracked, * as topTrackedSelectors from '../reducers/topTracked';

const reducers = combineReducers({
	topTracked
});

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducers, middleware);
