<template>
<section>
<form @submit.prevent="submitData">
    <label>User name</label>
    <input type="text" v-model="enteredName">
    <label>User age</label>
    <input type="text" v-model="enteredAge">

    <button>Set User Data</button>
</form>
</section>




    
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }

    },
    methods: {
        submitData() {
            this.$emit ('set-data', this.enteredName, this.enteredAge);
        }
    }
}
</script>