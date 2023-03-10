import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false
// axios.defaults.baseURL="http://localhost:8090/bookstore"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
