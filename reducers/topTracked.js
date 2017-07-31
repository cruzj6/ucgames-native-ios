import Immutable from 'immutable';
import actionConstants from '../constants/actions/topTracked';

export default function topTracked(state = Immutable.Map(), action) {
  switch (action.type) {
    case actionConstants.GET_TOP_TRACKED:
      return state
        .set('games', action.topTracked)
        .delete('error');
    case actionConstants.ERROR_TOP_TRACKED:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export const selectors = {
  getTopTrackedGames(state) {
    const games = state.topTracked.get('games') || [];

    return games.map(game => ({
      id: game.gbGameId.toString(),
      name: game.name,
      imageLink: game.imageLink,
    }));
  },

  getTopTrackedGame(state, id) {
    return selectors.getTopTrackedGames(state).find(game => game.id === id);
  },

  getTopTrackedError(state) {
    return state.topTracked.get('error');
  },
};
