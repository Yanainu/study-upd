import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

//это мы экспортируем, чтобы потом импортировать в корневом 
//index js
export default {
    namespaced: true,
    state() {
        return { 
            requests: []
        }
    },
    mutations, 
    actions,
    getters
}