//импортируем, создаем, + webHistory, экспортируем 
import { createRouter, createWebHistory } from 'vue-router';

//подключаем компоненты из pages папки
import CoachDetail from './pages/coaches/CoachDetail';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegistration from './pages/coaches/CoachRegistration';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';

//для routes.beforeEach
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //если в адресе только основной домен
        { path: '/', redirect: '/coaches' },//направляем на тренеров

        //список тренеров
        { path: '/coaches', component: CoachesList },
        //один тренер, ребенок - контакт с одним тренером
        { 
            path: '/coaches/:id', 
            component: CoachDetail, 
            props: true,
            
            children: [
                { path: 'contact', component: ContactCoach } //coaches/id2/contact
        ]},
        //регистрация тренера
        { path: '/register', component: CoachRegistration, meta: {
            requiresAuth: true
        }},
        //список реквестов полученных(что пришло с contact form)
        { path: '/requests', component: RequestsReceived, meta: {
            requiresAuth: true
        }},
        //логин
        { path: '/auth', component: UserAuth,  meta: {
            requiresUnauth: true
        }},
        //not found page если введено чет не то 
        { path: '/:notFound(.*)', component: NotFound }
    ]

});

//функция которая будет выполняться перед любым переходом на стр (beforeEach)
router.beforeEach(function(to, _, next) {
    //наши защищаемые routes это /register и /requests их не видно без авторизации
    //и /auth - его мы не можем посетить если мы авторизованы, наоборот

    //если роут требует авторизации и мы НЕ авторизованы
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');//то идем на страницу авторизации
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        //если требует НЕавторизации, а мы авторизованы
        next('/coaches')
    } else {
        next()//нет проблем - просто идем куда шли
    }


})

export default router; 