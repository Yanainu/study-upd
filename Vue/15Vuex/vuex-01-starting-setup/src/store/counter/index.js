import counterMutaions from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
    namespased: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutaions,
    actions: counterActions,
    getters: counterGetters
};