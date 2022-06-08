<template>
    <div class="add-task">
        <button class="add-task__button" @click="addTask">
            <!-- <img class="add-task__button-icon" src="../src/assets/add-task-icon.png" alt="add task"> -->
            add task
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        addTask() {
            this.$emit('openAddingBlock');
        }
    }
}
</script>

<style scoped>

</style>