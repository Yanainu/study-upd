<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    }
  },
  inject: ['users'],
  methods: {
    saveChanges() {
      this.changesSaved = true;
    },
    //перед уходом с текущего компонента
    beforeRouteLeave(to, from, next) {
      if (this.changesSaved) {
        next();
      } else {
        const userWantsToLeave = confirm("r u sure, unsaves changes");
        next(userWantsToLeave)
      }
    },
    //вызовется перед переходом на этот компонент
    beforeRouteEnter(to, from, next) {
      next();
    },

    //код, вызываемый перед тем как покинем компонент
    //когда переход подтвержден но перед его совершением
    unmounted() {
      console.log('unmounted')
    },
    confirmInput() {
      //do smthn и потом надо перейти на другую ссылку
      // push- переход на нужную ссылку
      this.$router.push('/teams');
      //еще вот такие есть и другие если погуглить
      // this.$router.back()
      // this.$router.forward()
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>