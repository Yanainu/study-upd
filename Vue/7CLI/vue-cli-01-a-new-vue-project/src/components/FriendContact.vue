<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
        <button @click='toggleFavorite'>Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong> 
                {{ phoneNumber }}
            </li>
            <li>
                <strong>Email:</strong> 
                {{ emailAddress }}
                </li>
        </ul>

        <button @click="$emit('delete', id)">Delete</button>
        
    </li>
</template>

<script>
    export default {
        // props: [
        //     'name', 
        //     'phoneNumber',
        //     'emailAddress',
        //     'isFavorite'
        // ],

        props: {
            id: {
                type: String, 
                required: true
            },
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            }, 
            emailAddress: {
                type: String,
                required: true,
            }, 
            isFavorite: {
                type: Boolean,
                required: false,
                default: false,
                //ф-я принимающая значение isFavorite и проверяющее валидно ли оно
                // validator: function(value) {
                //     //после ретерна я пишу условие просто? то что должно быть тру, чтобы value была принята
                //     return value === '1' || value === '0';
                // }
            }
        },

        emits: ['toggle-favorite', 'delete'],
        // emits: {
        //     'toggle-favorite': function(id) {
        //         if (id) {
        //             return true;
        //         } else {
        //             console.warn('id is missing!');
        //             return false;
        //         }
        //     }
        // },

        data() {
            return {
                detailsAreVisible: false,
            }
        },

        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                //emit для связи с App.vue
                //аргумент - название моего кастомного события
                //называть события всегда кебабом)0
                this.$emit('toggle-favorite', this.id);
                //слушается в App.vue в html компонента
            },

        }
    }
</script>
