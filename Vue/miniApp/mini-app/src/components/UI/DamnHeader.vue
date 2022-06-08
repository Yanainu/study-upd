
<template>
    <div>
        <h1 class="header__text">{{ headerText }}</h1>
    </div>
</template>


<script>
export default {
    props: ['addingBlockVisibility'],

    computed: {
        headerText() {
        //если блок добавления включен то текст 'Add Task"
        if (!this.addingBlockVisibility) {
            console.log(this.addingBlockVisibility)
            return 'Add Task';
        } else {
            return 'To Do';
        }
    }
    }
}
</script>

<style scoped>
/* header  */

.header__text {
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: left;
}
</style>
