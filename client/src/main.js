import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/style.css'

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
