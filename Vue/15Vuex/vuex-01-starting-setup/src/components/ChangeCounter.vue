<template>
    <button @click="myNameOfAction">Add 2</button>
    <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // }
        // ...mapActions(['increment', 'increase'])

        ...mapActions('numbers', {
            myNameOfAction: 'increment',
            increase: 'increase'
        })
    }
}
</script>