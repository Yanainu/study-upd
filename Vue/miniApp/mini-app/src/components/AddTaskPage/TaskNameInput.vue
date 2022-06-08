<template>
    <div class="add-task-form__input-box">
        <label class="add-task-form__input-label" for="task-name">Name</label>
        <input v-model="taskNameInput" @input="saveInputValue" class="add-task-form__input" id="task-name" name="task-name" type="text">
    </div>
</template>

<script>
export default {
    data() {
      return {
        taskNameInput: '',
      }
    },
    methods: {
      saveInputValue() {
        this.$emit('getValueFromInput', this.taskNameInput)
      }
    }


}
</script>

<style scoped>

.add-task-form__input-box {
  padding: 40px 0;
}

.add-task-form__input-label {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}

.add-task-form__input {
  outline: none;
  border: none;
  border-bottom: 0.379227px solid rgba(60, 60, 67, 0.3);
  margin-left: 15px;

  font-weight: 400;
  font-size: 12.8937px;
  line-height: 17px;
  letter-spacing: -0.309449px;
  color: rgba(60, 60, 67, 0.3);
}
</style>