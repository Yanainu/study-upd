'use strict'

const app = Vue.createApp({
    data() {
        return {
            myName: 'Yana',
            myAge: 32,

            imgLink: 'http://pm1.narvii.com/7008/ed7da41fd06424ba9f5b2a09be3d5051ac4db6ebr1-553-604v2_uhq.jpg',
        }
    },

    methods: {
        calcAgeInFiveYears() {
            const ageInFiveYears = this.myAge + 5;
            return ageInFiveYears;
        },
    }
})

app.mount('#assignment');