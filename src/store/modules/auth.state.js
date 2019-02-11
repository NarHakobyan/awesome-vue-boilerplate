import { commit } from 'vuex-pathify';
import Auth from '@/resources/Auth';
import { makeMutations, makeGetters, makeActions, withLoading } from '@/store/helpers/default.helper';

const defaultState = {
    token: null,
    user: null,
};

const mutations = {};
const getters = {
    isAuthenticated: state => !!state.token,
};

const actions = {
    login: withLoading('authState/login', async (_, credentials) => {
        const res = await Auth.login(credentials);
        commit('authState/SET_TOKEN', res.body.token.access);
        commit('authState/SET_USER', res.body.user);
        return res;
    }),
    activate(_, token) {
        return Auth.activate({ token });
    },
    async fetchCurrentUser({ getters }) {
        const { token } = getters;
        if (!token) {
            return false;
        }
        const res = await Auth.me();

        const user = res.body.user;
        commit('authState/SET_USER', user);

        return user;
    },
    logout() {
        commit('authState/SET_TOKEN', null);
        commit('authState/SET_USER', null);
    },
};

export default {
    state: defaultState,
    mutations: makeMutations(defaultState, mutations),
    actions: makeActions(defaultState, actions),
    getters: makeGetters(defaultState, getters),
};
