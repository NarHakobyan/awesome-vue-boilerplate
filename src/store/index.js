import Vue from 'vue';
import Vuex from 'vuex';
import pathify from './pathify';
import vuexLocal from '@/plugins/vuex-persistence';

import modules from './modules';

if (process.env.NODE_ENV === 'development') {
    pathify.debug();
}

Vue.use(Vuex);

const defaultState = {};
const mutations = {};
const getters = {};
const actions = {};

const store = new Vuex.Store({
    plugins: [pathify.plugin, vuexLocal.plugin],
    state: defaultState,
    mutations,
    actions,
    getters,
    modules,
    strict: process.env.NODE_ENV !== 'production',
});

export default store;
