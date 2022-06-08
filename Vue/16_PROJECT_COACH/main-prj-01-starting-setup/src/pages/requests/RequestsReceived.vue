<template>
<div>
    <base-dialog :show="!!error" title="Error!" @close="handleError">
        <p> {{ error }} </p>
    </base-dialog>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <!-- список реквестов -->
            <ul v-else-if="hasRequests && !isLoading">
                <request-item v-for="req in receivedRequests" 
                :key="req.id"
                :email="req.userEmail"
                :message="req.message"></request-item>
            </ul>
            <!-- если запросов нет - надпись -->
            <h3 v-else>No requests yet</h3>
        </base-card>
    </section>
</div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
export default {
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null
        }
    },
    //реквесты у нас хранятся в сторе vuex, чтобы получать доступ
    //к стору всегда используем computed и геттеры
    computed: {
        //список реквестов из стора
        receivedRequests() {
            //'имя namespace/имя геттера'
            return this.$store.getters['requests/requests']
        },
        //есть ли реквесты у пользователя
        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        }

    },
    created() {
        this.loadRequests();
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/fetchRequests');
            } catch(error) {
                this.error = error.message || 'Something went wrong';
            }
            
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    }

}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>