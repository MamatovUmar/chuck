import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AxiosPlugin from './plugins/axios';

import 'normalize.css'
import './assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(AxiosPlugin, store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
