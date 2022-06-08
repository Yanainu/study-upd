import { createStore } from 'vuex';

//Добавили рут чтобы понятно было что это не в модуле а корневые мут.
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters';

//импорт модуля
import counterModule from './counter/index.js';

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    //state - метод типа как data() возвращает объект
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;