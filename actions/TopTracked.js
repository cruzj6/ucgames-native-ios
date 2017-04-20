import actions from '../constants/actions/topTracked';
import * as ucapi from '../services/ucgamesapi';

const getTopTrackedAction = (topTracked) => {
	return {
		topTracked,
		type: actions.GET_TOP_TRACKED
	}
}

const getTopTrackedErrorAction = (err) => {
	return {
		error: err,
		type: actions.ERROR_TOP_TRACKED
	}
}

export const getTopTracked = () => dispatch => (
		ucapi.getTopTracked().then((res) => {
			console.log(res.data);
			dispatch(getTopTrackedAction(res.data));
		}).catch((err) => {
			dispatch(getTopTrackedErrorAction(err));
		})
);
