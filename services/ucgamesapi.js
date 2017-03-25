import { axios } from 'axios';
import UCConstants from '../constants/ucapi';

const topTrackedParams = (amount) => {
	return {
		number: amount
	}
}

const addTrackedParams = () => {
	return {

	}
}

const removeTrackedParams = () => {
	return {

	}
}

const advancedSearchParams = () => {
	return {

	}
}

// User tracked operations
export const getTrackedGames = () => {
	return axios.get(`${UCConstants.BASE_URL}${UCConstants.USER_TRACKED}`);
}

export const addTrackedGame = () => {
	return axios.post(`${UCConstants.BASE_URL}${UCConstants.USER_TRACKED}`, { params });
}

export const removeTrackedGame = (id) => {
	const params = removeTrackedParams(id);
	return axios.delete(`${UCConstants.BASE_URL}${UCConstants.USER_TRACKED}`, { params })
}

export const getTopTracked = (amount) => {
	const params = topTrackedParams(amount);
	return axios.get(`${UCConstants.BASE_URL}${UCConstants.TOP_TRACKED}`, { params });
}
