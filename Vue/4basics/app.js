'use strict'

const app = Vue.createApp({
    data() {
        return {
            classValue: '',
            paragraphIsVisible: true,
            colorValue: '',
        }
    },

    methods: {
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    },

    //он сделал классы в параграфе через computed

    computed: {
        paraClasses() {
            return {
                user1: this.classValue === 'user1',
                user2: this.classValue === 'user2',
                visible: this.paragraphIsVisible, 
                hidden: !this.paragraphIsVisible,
            }
        }
    }
})

app.mount('#assignment');