import actionConstants from '../constants/actions/topTracked';
import Immutable from 'immutable';

export default function topTracked(state = Immutable.Map(), action) {
	switch (action.type){
		case actionConstants.GET_TOP_TRACKED:
			return state.set('topTracked', action.topTracked)
				.delete('error');
		case actionConstants
			return state.set('error', action.error);
		default:
			return state;
	}
}

export const getTopTracked = state => state.get('topTracked');
export const getTopTrackedError = state => state.get('error');
