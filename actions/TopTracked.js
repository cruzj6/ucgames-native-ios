import actions from '../constants/actions/topTracked';
import * as ucapi from '../services/ucgamesapi';


export default actions = {
  getTopTrackedAction: topTracked => ({
    topTracked,
    type: actions.GET_TOP_TRACKED,
  }),

  getTopTrackedErrorAction: err => ({
    error: err,
    type: actions.ERROR_TOP_TRACKED,
  }),

  getTopTracked: number => dispatch => (
    ucapi.getTopTracked(number).then((res) => {
      dispatch(actions.getTopTrackedAction(res.data));
    }).catch((err) => {
      dispatch(actions.getTopTrackedErrorAction(err));
    })
  ),
};
