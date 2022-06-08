import { createApp } from 'vue';

//импортируем App.vue файл и router
import router from './router.js';
//импортируем данные vuex, store
import store from './store/index.js';

import App from './App.vue'

//импорт компонентов
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

//добавляем App в аргумент createApp и складываем это в переменную
const app = createApp(App);

//подключаем роутер
app.use(router);
app.use(store);

//компоненты
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
