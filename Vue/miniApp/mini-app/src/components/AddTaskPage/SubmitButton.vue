<template>
    <div class="add-task-form__submit">
        <button @click="closeAddingBlock" class="add-task-form__submit-button" type="submit">Done</button>
    </div>
</template>

<script>
export default {

  methods: {
      closeAddingBlock() {
        this.$emit('closeAddingBlock')
      }
    }
}
</script>

<style scoped>
.add-task-form__submit {
  padding: 30px 0;
}

.add-task-form__submit-button {
  width: 100%;
  background-color: black;
  background: #171717;
  border-radius: 11.5812px;
  padding: 14px 13px;

  color: white;

  font-style: italic;
  font-weight: 700;
  font-size: 14.0628px;
  line-height: 18px;
}
</style>