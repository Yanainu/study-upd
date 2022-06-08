import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList';
import UsersList from './pages/UsersList';
//для /teams/:teamID
import TeamMembers from './components/teams/TeamMembers';

import NotFound from './pages/NotFound';

//разные футеры
import TeamsFooter from './pages/TeamsFooter';
import UsersFooter from './pages/UsersFooter';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        {   
            name: 'teams',
            path: '/teams', 
            meta: { needsAuth: true},
            components: {
                default: TeamsList,
                footer: TeamsFooter
            }, 
            children: [
                //для членов команды, с динамическим id,
                {name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
        ]},
        { 
            path: '/users', 
            components: {
                default: UsersList,
                footer: UsersFooter 
            },
            beforeEnter(to, from, next) {
                next()
            }
        },

        
        //этот path всегда последний, это если в адресе будет неподдерживаемое что-то
        { path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    //метод, вызываемый vue router когда страница изменилась
    scrollBehavior(_, _2, savedPosition) {

        // to & from тожсамое что this.$route.to / this.$route.from
        //это страницы с которых мы пришли и куда идем(to вроде та которая щас открыта)
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0//нули значит прокрутить на начало наверх
        }//объект должен описывать куда браузеру scrollTo
    }
});

//перед каждым переходом на др.роутер будет вызвана ф-я
router.beforeEach(function(to, from, next) {
    if (to.meta.needsAuth) {
        //проверка что пользователь авторизован
        next();
    } else {
        next();
    }
})

//запускается, как только переход подтвердился (вроде)
//подходит для отправки логов на сервер например
//лог что юзер перешел на такую-то страницу напр
//не контролирует визуал
// router.afterEach(function(to, from) {

// })


export default router;