import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

/*BOOTSTRAP*/
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common = { "auth-token": sessionStorage.getItem("sessionid") };

/* GLOBALMIXIN */
import { Globalmixin } from "@/mixins"
Vue.mixin(Globalmixin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";




/*APP STYLES*/
import "@/assets/css/style.scss";




new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
