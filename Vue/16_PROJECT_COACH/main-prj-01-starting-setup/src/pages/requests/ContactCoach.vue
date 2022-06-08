<template>
    <form @submit.prevent="submitForm">
       <div>
           <label for="email">Your e-mail</label>
           <input type="email" id="email" v-model.trim="email">
       </div> 

       <div>
           <label for="message">Message</label>
           <textarea id="message" rows="5" v-model.trim="message"></textarea>
       </div>
       <!-- сообщ. об обшибке -->
        <p class="errors" v-if="!formIsValid">Please enter a valid e-mail and not empty message</p>
       <div class="actions">
           <base-button>Send message</base-button>
       </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true
        }
    },
    methods: {
        submitForm() {
            //валидация
            this.formIsValid = true;
            if (
                this.email === '' || 
                !this.email.includes('@') || 
                this.message === ''
            )  {
                this.formIsValid = false;
                return;
            }
            //вызываем action для добавления реквеста
            //который в requests/actions называется contactCoach
            //и как payload передаю объект с нашими данными с формы
            //мы добавили fetch в action теперь это отправка на сервер
            this.$store.dispatch('requests/contactCoach', {
                email: this.email,
                message: this.message, 
                //id берем с адреса страницы, он там уже есть
                coachId: this.$route.params.id
            })
            //и как все передано - уходим со страницы с формой
            this.$router.replace('/coaches');
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>