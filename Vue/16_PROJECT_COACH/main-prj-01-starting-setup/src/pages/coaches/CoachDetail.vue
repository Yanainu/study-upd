<template>

    <div>
        <section>
            <base-card>
                <h2> {{ fullName }} </h2>
                <h3>${{ rate }}/hour</h3>
            </base-card>
        </section>

        <section>
            <base-card>
                <!-- перенаправление на контакт-форму -->
                <header>
                    <h2>Interested? Reach out now</h2>
                    <base-button link :to="contactLink">Contact</base-button>
                </header>

                <!-- тут будет рендер формы для контактп -->
                <router-view></router-view>
            </base-card>
        </section>

        <section> 
            <base-card>
                <!-- тут его области - фронтенды бекенды       -->
                <base-badge v-for="area in areas" :key="area"
                :type="area"
                :title="area"></base-badge>
                <!-- описание тренера  -->
                <p>{{ description }}</p>
            </base-card>

        </section>
    </div>
    
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null,
        };
    },
    //как только компонент создан сработает created()
    created() {
        //достаем из store данные о нужном тренере. нужный это тот, чей айди = айди в пропсах
        //проходим в список тренеров в сторе и ищем там по айти нужного
        //и ставим его в selectedCoach
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(
            (coach) => coach.id === this.id)
    },
    computed: {
        fullName() {
            return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
        },
        areas() {
            return this.selectedCoach.areas;
        },  
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        },
        contactLink() {
            return `${this.$route.path}/${this.id}/contact`;
        }
    }
    
}
</script>