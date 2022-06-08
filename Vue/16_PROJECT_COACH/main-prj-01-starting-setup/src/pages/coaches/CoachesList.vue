<template>
<div>
    <!-- !!error это чтобы его конвертировать в boolean -->
    <!-- show используется внутри base-dialog -->
    <!-- событие close мы эмитим в base-dialog -->
    <base-dialog :show="!!error" title="Error!" @close="handleError">
        <p> {{ error }} </p>
    </base-dialog>
    <section>
        <coaches-filter @change-filter="setFilters"></coaches-filter>
    </section>
    <section>
        <!-- оборачиваем все в компонент base-card -->
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to reg as a coach</base-button>
                <base-button link to="/register" v-if="isLoggedIn && !isCoach && !isLoading">Register as a coach</base-button>
            </div>
            <!-- спиннер загрузки -->
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <!-- список тренеров -->
            <ul v-else-if="hasCoaches">
            <!-- цикл+ все нужные пропсы прокидываем в coach-item  -->
            <coach-item v-for="coach in filteredCoaches" :key="coach.id"
                :id="coach.id"
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
                ></coach-item>
            </ul>
            <h3 v-else>No coaches found</h3>
        
        </base-card>        
    </section>
</div>
</template>

<script>
//компоненты (две точки - подъем наверх в папках)
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseButton from '../../components/UI/BaseButton.vue';
import CoachesFilter from '../../components/coaches/CoachFilter.vue';

export default {
    components: {
        CoachItem,
        BaseButton,
        CoachesFilter
    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    //обращение к геттерам
    computed: {
        isLoggedIn() {
            //обращаемся так т.к. не namespace в модуле auth
            return this.$store.getters.isAuthenticated;
        },
        //список тренеров. филтред - т.к. потом будут фильтры еще
        filteredCoaches() {
            //getters['имя_модуля в store/index.js' / 'имя геттера']
            //coaches - полный список коучей
            const coaches = this.$store.getters['coaches/coaches'];
            //отбираем в нем тех, кто подходит по фильтрам
            return coaches.filter(coach => {
                //если фильтр фронтенд вкл + у коуча в areas есть фронтенд
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;//оставляем в отфильтрованном массиве
                }
                //так же для backend & career
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                //и если  ни одно условие не выполнилось то 
                return false;
            })
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },

        //обращаемся к геттеру в coaches, который показывает
        //является ли пользователь уже зареганным коучем 
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
    },
    methods: {
        //для смены галочек фильтров,updatedFilters мы тоже эмитили
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        //запуск экшна loadCoaches из store/coaches/actions
        async loadCoaches(refresh = false) {
            this.isLoading = true;
            //обернули в try catch для отлова ошибок
            try {
                await this.$store.dispatch('coaches/loadCoaches', {
                    forceRefresh: refresh
                });
            } catch (error) {
                //что делаем если поймана ошибка
                //либо вытаскиваем сообщение ошибки, если его нет - просто свое
                this.error = error.message || 'Something went wrong!';
            }
            
            this.isLoading = false;//это случится как только dispatch произошел
        },
        //закрытие окна с ошибкой
        handleError() {
            //close у нас както там расписан в base-dialog,
            //тут мы просто при закрытии обнуляем ошибку
            this.error = null;
            //и ошибка становится false и base-dialog не покажется
        }
    },
    created() {
        this.loadCoaches();
    }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>