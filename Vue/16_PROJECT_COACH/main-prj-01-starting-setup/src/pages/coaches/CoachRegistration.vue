<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <!-- форма регистрации -->
            <coach-form @save-data="saveData"></coach-form>
        </base-card>

    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
    components: {
        CoachForm
    },
    methods: {
        //data-то что мы передали из CoachForm, объект formData с данными формы
        //тут мы хотим добавить нового тренера в vuex store
        saveData(data) {
            //приготовили mutation & action для изменения данных в сторе, 
            //теперь вызываем здесь этот экшн
            //coaches -это неймспейс, registerCoach это имя экшона, data объект с данными
            this.$store.dispatch('coaches/registerCoach', data)

            //чтобы при регистрации мы сразу уходили с формы
            //на страницу со списком коучей
            this.$router.replace('/coaches');

        }
    }
}
</script>