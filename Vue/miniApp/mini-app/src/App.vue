<template>
  <div id="app">
    <section v-show="listBlockVisibility">
      <damn-header 
      :addingBlockVisibility="addingBlockVisibility"
      ></damn-header>

      <hide-button 
        @hideCompletedTasks="hideCompletedTasks"
        :completedTasksVisibility="this.completedTasksVisibility"
      ></hide-button>

      <task-list 
        @changeStatus="changeStatus" 
        :taskList="taskList"
        :completedTasksVisibility="this.completedTasksVisibility"
        :uncompletedTaskList="this.taskList.filter(item => item.isDone === false)"
        >
      </task-list>
      
      <create-button @openAddingBlock="openAddingBlock"></create-button>
    </section>
    

    <add-task 
      :addingBlockVisibility="addingBlockVisibility"
      :listBlockVisibility="listBlockVisibility"
      @closeAddingBlock="closeAddingBlock"
      ></add-task>

  </div>
</template>

<script>

import DamnHeader from './components/UI/DamnHeader.vue';
import HideButton from './components/ToDoPage/HideButton.vue';
import TaskList from './components/ToDoPage/TaskList.vue';
import CreateButton from './components/ToDoPage/CreateButton.vue';
import AddTask from './components/AddTaskPage/AddTask.vue';

export default {
  components: {
    DamnHeader,
    HideButton,
    TaskList,
    CreateButton,
    AddTask
  },

  data() {
    return {
      addingBlockVisibility: false,
      listBlockVisibility: true,
      taskList: [{
        id: '12313',
        name: 'task #1',
        isDone: false,
      },
      {
        id: '456',
        name: 'task #2',
        isDone: false,
      }],

      completedTasksVisibility: true,
    }
  },

  provide() {
    return {
      taskList: this.taskList,
      nameValue: this.nameValue,
      addingBlockVisibility: this.addingBlockVisibility,
      listBlockVisibility: this.listBlockVisibility,
    }
  },
    methods: {
    openAddingBlock() {
      this.addingBlockVisibility = true;
      this.listBlockVisibility = false;
    },
    closeAddingBlock() {
      this.addingBlockVisibility = false;
      this.listBlockVisibility = true;
    },
    hideCompletedTasks() {
      this.completedTasksVisibility = !this.completedTasksVisibility;
    },
    //заметка - поднимала смену статуса задачи до сюда, т.к. пропсы нельзя изменять
    changeStatus(id) {
      const currentTask = this.taskList.find(item => item.id === id);
      currentTask.isDone = !currentTask.isDone;
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: Arial;
  font-weight: 700;
  margin: auto;
  max-width: 300px;
  padding: 30px;
}





</style>