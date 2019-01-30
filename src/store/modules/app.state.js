import { makeMutations, makeActions, makeGetters } from '@/utils/state.helper';

const defaultState = {
    sidebar: {
        opened: true,
    },
};

export default {
    namespaced: true,
    state: defaultState,
    mutations: makeMutations(defaultState),
    actions: makeActions(defaultState),
    getters: makeGetters(defaultState),
};
