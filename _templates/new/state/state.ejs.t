---
to: src/store/modules/<%= h.inflection.dasherize(name).toLowerCase() %>.state.js
---
import { makeMutations, makeActions, makeGetters, makeDefaultState } from '@/utils/state.helper';

const defaultState = {};

const mutations = {};

const actions = {};

const getters = {};

export default {
    namespaced: true,
    state: makeDefaultState(defaultState),
    mutations: makeMutations(defaultState, mutations),
    actions: makeActions(defaultState, actions),
    getters: makeGetters(defaultState, getters),
};
