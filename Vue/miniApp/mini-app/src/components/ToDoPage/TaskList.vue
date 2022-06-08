<template>
    <div class="list-container">
        <ul v-if="completedTasksVisibility" class="list">
          <li class="list__item" v-for="task in taskList" :key="task.id">
            <list-item @changeStatus="changeStatus" :task="task"></list-item>
          </li>
        </ul>

        <ul v-if="!completedTasksVisibility" class="uncompleted-list">
          <li class="uncompleted-list__item" v-for="task in uncompletedTaskList" :key="task.id">
            <list-item @changeStatus="changeStatus" :task="task"></list-item>
          </li>
        </ul>
      </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    components: {
        ListItem
    },
    props: ['taskList', 'completedTasksVisibility', 'uncompletedTaskList'],
    
    methods: {
      changeStatus(id) {
        this.$emit('changeStatus', id)
      }
    }
}
</script>

<style scoped>
/* список  */
.list, .uncompleted-list {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
}

</style>