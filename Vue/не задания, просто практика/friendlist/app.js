const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '01234 5678 991', 
                    email: 'manuel@host.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones', 
                    phone: '09876 453 221', 
                    email: 'julie@host.com'
                }
            ],

            detailsAreVisible: false,

        }
    },

    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component('friend-contact', {
    data() {
        return {
            detailsAreVisible: false,
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');