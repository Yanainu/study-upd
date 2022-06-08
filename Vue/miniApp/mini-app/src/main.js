
import Vue from 'vue'
import App from './App.vue'

import DamnHeader from './components/UI/DamnHeader';
Vue.component('damn-header', DamnHeader);

Vue.config.productionTip = false


const app = new Vue({
  render: h => h(App),
}).$mount('#app')



app.$mount