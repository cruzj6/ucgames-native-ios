import { axios } from 'axios';
import UCConstants from '../constants/ucapi';

const topTrackedParams = (amount) => {
	return { number: amount}
}

const addTrackedParams = (id) => {
	return { gameid: id }
}

const removeTrackedParams = (id) => {
	return { gameid: id }
}

const advancedSearchFilters = (keywords) => {
	return { filters: keywords }
}

const advancedSearchParams = (platform, month, year, keywords) => {
	const filters = advancedSearchFilters(keywords);
	return {
		platform,
		month,
		year,
		...filters
	}
}

// User tracked operations
export const getTrackedGames = () => {
	return axios.get(`${UCConstants.BASE_URL}${UCConstants.USER_TRACKED}`);
}

export const addTrackedGame = (id) => {
	const params = addTrackedParams(id);
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
