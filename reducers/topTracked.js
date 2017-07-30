import Immutable from 'immutable';
import actionConstants from '../constants/actions/topTracked';

export default function topTracked(state = Immutable.Map(), action) {
  switch (action.type) {
    case actionConstants.GET_TOP_TRACKED:
      return state
        .set('topTracked', action.topTracked)
        .delete('error');
    case actionConstants.ERROR_TOP_TRACKED:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export const getTopTracked = state => state.topTracked.get('topTracked') || [];
export const getTopTrackedGame = (state, id) => getTopTracked.find(game => game.id === id);
export const getTopTrackedError = state => state.topTracked.get('error');
