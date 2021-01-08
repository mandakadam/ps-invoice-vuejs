import Vue from 'vue'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/*BOOTSTRAP*/
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;




import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";




/*APP STYLES*/
import "@/assets/css/style.scss";




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
