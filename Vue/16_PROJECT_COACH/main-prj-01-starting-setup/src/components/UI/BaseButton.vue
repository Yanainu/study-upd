<template>
    <!-- вид кнопки -->
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>

    <!-- вид ссылки -->

    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>

    <!-- показываться будет только одно -->
</template>

<script>
export default {
    props: {
        //mode - для присвоения нужного класса кнопке/ссылке
        mode: {
            type: String, 
            required: false,
            default: null
        },
        //если тру то ренедерим ссылку, если фолс то кнопку
        link: {
            type: Boolean,
            required: false,
            default: false //т.е. по умолчанию рендерим кнопку, не ссылку
        },
        //to нужно если у нас сссылка
        to: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>