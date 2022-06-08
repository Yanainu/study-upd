<template>
<div class="list-item-container">
    <!-- чекбокс  -->
    <label class="list-item__checkbox">
        <input type="checkbox" :checked="task.isDone" :class="{text_done: task.isDone}" @change="changeStatus">
        <span class="checkmark"></span>
    </label>
    <!-- строка  -->
    <p class="list-item__text" :class="{text_done: task.isDone}">{{ task.name }}</p>
</div>

</template>

<script>
export default {
    props: ['task'],
    data() {
      return {
      }
    },
    methods: {
      changeStatus() {
        this.$emit('changeStatus', this.task.id)
      }
    }
}
</script>

<style scoped>
/* чекбоксы  *//* Customize the label (the container) */
.list-item__checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


}

/* Hide the browser's default checkbox */
.list-item__checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;

  background: #FFFFFF;
  border: 2px solid #E8E8E8;
  border-radius: 6px;
}

/* On mouse-over, add a grey background color */
.list-item__checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.list-item__checkbox input:checked ~ .checkmark {
  background-color: #000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.list-item__checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.list-item__checkbox .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.list-item__text {
  font-style: italic;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #737373;
}

.list-item-container {
    display: flex;
    align-items: center;
}

.text_done {
  text-decoration: line-through;
}

</style>