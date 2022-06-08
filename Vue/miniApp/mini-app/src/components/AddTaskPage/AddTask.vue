<template>
<div v-show="addingBlockVisibility">
    <damn-header></damn-header>
    <task-form @closeAddingBlock="closeAddingBlock"></task-form>
</div>
</template>

<script>
import TaskForm from './TaskForm.vue';

export default {
    components: {
        TaskForm
    },
    props: ['addingBlockVisibility', 'listBlockVisibility'],
    methods: {
        closeAddingBlock() {
            this.$emit('closeAddingBlock')
        }
    }
    
}
</script>

<style scoped>

</style>