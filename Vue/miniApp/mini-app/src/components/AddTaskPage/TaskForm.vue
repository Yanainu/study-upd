<template>
    <form @submit.prevent="addTaskToList" class="add-task-form">
      <task-name-input @getValueFromInput="getValueFromInput"></task-name-input>
      <submit-button @closeAddingBlock="closeAddingBlock"></submit-button>
    </form>
</template>

<script>
import SubmitButton from './SubmitButton.vue';
import TaskNameInput from './TaskNameInput.vue';

export default {
    components: {
        SubmitButton,
        TaskNameInput
    },
    data() {
      return {
        newTaskName: ''
      }
    },
    inject: ['taskList'],
    methods: {
      getValueFromInput(value) {
        this.newTaskName = value;
      },
      addTaskToList() {
        this.taskList.push({name: this.newTaskName, id: Math.random(), isDone: false})
      },
      closeAddingBlock() {
        this.$emit('closeAddingBlock')
      },


    },
    
}
</script>

<style scoped>

.add-task-form {
  display: block;
}



</style>