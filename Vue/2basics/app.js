const app = Vue.createApp({
    data() {
        return {
            outputOnKeyDown: '',
            outputOnEnter: '',
        }
    },

    methods: {
        showAlert() {
            alert('test');
        },

        changeOutputOnKeydown(event) {
            this.outputOnKeyDown = event.target.value;
        },

        changeOutputOnEnter(event) {
            this.outputOnEnter = event.target.value;
        }
    }
})

app.mount('#assignment');