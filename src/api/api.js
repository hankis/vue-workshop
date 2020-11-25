import axios from './axios';

export default {
	getTodoList: async (errHandler) => new Promise((resolve) => axios
		.get('/todos')
		.then((response) => resolve(response.data))
		.catch(errHandler)),

	getCard: async (errHandler) => new Promise((resolve) => axios
		.get('/users/1')
		.then((response) => resolve(response.data))
		.catch(errHandler)),
};
