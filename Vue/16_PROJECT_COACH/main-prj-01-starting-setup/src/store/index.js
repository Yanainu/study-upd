//vuex
import { createStore } from 'vuex';

//импорт модулей 
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

//создать store
const store = createStore({
    //модули
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule
    }, 
    //данные


});

//экспортировать store для main js
export default store;