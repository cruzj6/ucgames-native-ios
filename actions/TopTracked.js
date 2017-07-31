import types from '../constants/actions/topTracked';
import * as ucapi from '../services/ucgamesapi';

const actions = {
  getTopTrackedAction(topTracked) {
    return {
      topTracked,
      type: types.GET_TOP_TRACKED,
    };
  },

  getTopTrackedErrorAction(err) {
    return {
      error: err,
      type: types.ERROR_TOP_TRACKED,
    };
  },

  getTopTracked(number) {
    return dispatch => (
      ucapi.getTopTracked(number)
        .then(res => dispatch(actions.getTopTrackedAction(res.data)))
        .catch(err => dispatch(actions.getTopTrackedErrorAction(err)))
    );
  },
};

export default actions;
