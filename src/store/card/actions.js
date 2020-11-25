import API from '@/api/api';

export default {
    async fetchCard({ commit }) {
        const data = await API.getCard();
        commit('setCard', data);
    },
};
