<template>
    <li>
        <div>
            <!-- ссылка с емейлом клиента, кликабельная -->
            <!-- будет открывать почту сразу -->
            <a :href="emailLink">{{ email }}</a>
        </div>
        <!-- сообщение от клиента  -->
        <p>{{ message }}</p>
    </li>
</template>

<script>
export default {
    //придут из RequestsReceived.vue
    props: ['email', 'message'],
    computed: {
        //чтобы не писать эту логику в темплейте
        emailLink() {
            //браузер откроет почту с адресатом из this.email
            return `mailto:${this.email}`;
        }
    }
}
</script>

<style>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>