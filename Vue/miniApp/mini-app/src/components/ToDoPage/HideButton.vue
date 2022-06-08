<template>
    <div class="hide-button-box">
        <button @click="hideCompletedTasks" class="hide-button">{{ btnContent }}</button>
    </div>
</template>

<script>
export default {
    props: ['completedTasksVisibility'],

    computed: {
        btnContent() {
            if (this.completedTasksVisibility) {
                return 'Hide Completed';
            } else {
                return 'Show Completed';
            }
        }
    },

    methods: {
        hideCompletedTasks() {
            this.$emit('hideCompletedTasks');
        }
    }
}
</script>

<style scoped>

    .hide-button-box {
        display: flex;
        justify-content: right;
    }

    .hide-button {
        background-color: transparent;
        border: 0;
        cursor: pointer;

        font-style: italic;
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        color: #3478F6;
    }
</style>