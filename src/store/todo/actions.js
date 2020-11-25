import API from '@/api/api';

export default {
    async loadTodoList({ commit }) {
        const data = await API.getTodoList();
        commit('setTodoList', data);
    },
};
