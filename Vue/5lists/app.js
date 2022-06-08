const app = Vue.createApp({
    data() {
        return {
            task: '',
            taskList: [],
            listIsVisible: true,
            // buttonCaption: 'Hide',
        }
    },

    //я меняла текст кнопки в методах, но сохраню его вариант
    computed: {
        buttonCaption() {
            return this.listIsVisible ? 'Hide List' : 'Show List';
        }
    },

    methods: {
        addTask() {
            this.taskList.push(this.task);
        },
        
        removeTask(index) {
            this.taskList.splice(index, 1);
        },

        toggleListVisibility() {
            this.listIsVisible = !this.listIsVisible;

            //я меняла текст кнопки тут, он менял в computed
            // if (this.listIsVisible) {
            //     this.buttonCaption = 'Hide';
            // }

            // if (!this.listIsVisible) {
            //     this.buttonCaption = 'Show';
            // }
            
        }
    }
});

app.mount('#assignment');