//стандартная строка
import { createApp } from 'vue';

//это я импортирую компоненты из файлов .vue сюда?
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

//на основе импортированного App.vue создаю приложение - общий файл 
const app = createApp(App);

//к общему app привязываю более мелкие части, он назвал это РАЗБЛОКИРОВАТЬ
app.component('friend-contact', FriendContact); //потом тег friend-contact пишется в общем файле app.vue
app.component('new-friend', NewFriend);

app.mount('#app');
