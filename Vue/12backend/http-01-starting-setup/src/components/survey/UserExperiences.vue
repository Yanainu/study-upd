<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>

      <p v-else-if="!isLoading && error"> {{ error }}</p>

      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found, add some survey results
      </p>
      
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
// import func from 'vue-editor-bridge';
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      //изначально null тк еще нет ошибок
      error: null
    }
  },
  methods: {
    //получение данных с сервера
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch('https://vue-http-demo-396d8-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
      .then((response) => {
        //response это ответ с сервера. then это промис - сделать чтото с данными тогда, когда они придут
        if (response.ok) {
          //ok это св-во объекта response, если успешно выполнен запрос без ошибок то ок
          return response.json();
        }
      })
      .then((data) => {
        this.isLoading = false;
        //второй then запустится после 1го, когда уже будет возвращен запрос с данными
        //и data это уже данные в нужном формате
        const results = [];
        for (const id in data) {
          results.push( {
            id: id,
            name: data[id].name,
            rating: data[id].rating
          })

        this.results = results;
        }
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Failed to fetch data - pls try again later'
      });
    },
    //когда компонент полностью загружен/инициализирован
    mounted() {
      console.log('run');
      this.isLoading = false;
      this.loadExperiences(); 
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>