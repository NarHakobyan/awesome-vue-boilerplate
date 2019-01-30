import VuexPersistence from 'vuex-persist';

const mutations = ['authState/SET_TOKEN'];

export default new VuexPersistence({
    storage: window.localStorage,
    modules: ['authState'],
    filter: mutation => mutations.includes(mutation.type),
});
