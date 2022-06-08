const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            //я не использовала computed и результат был объявлен тут
            // result: '',
        }
    },

    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet';
            }
            
            if (this.counter === 37) {
                return 'Exactly 37';
            }

            if (this.counter > 37) {
                return 'Too much!';
            }
        }
    }, 

    watch: {
        result() {
            const context = this;
            setTimeout(() => {
                context.counter = 0;
            }, 5000);
        }
    },

    //я все через watch, тоже работало, но сохраняю его решение как образец
    //я еще не оч поняла какое именно обнуление он хотел, написала как поняла
    // watch: {
    //     counter(value) {
    //         if (value < 37) {
    //             this.result = 'Not there yet';
    //         }
    //         if (value > 37) {
    //             this.result = 'Too much';
    //         }
    //         //мне хотелось бы видеть еще когда ровно 37
    //         if (value === 37) {
    //             this.result = 'exatly 37!'
    //         }
    //         const context = this;
    //         setTimeout(function() {
    //             context.counter = 0;
    //             context.result = '';
    //         }, 5000)
            
    //     },

    methods: {
        increaseCounter(index) {
            this.counter = this.counter + index;
            return this.counter;
        },
    }
})

app.mount('#assignment')