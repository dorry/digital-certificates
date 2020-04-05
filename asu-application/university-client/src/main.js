import Vue from 'vue'
import App from './App.vue'
import babelPolyfill from 'babel-polyfill'
import router from './router.js'
import store from './store/store'
export const eventBus = new Vue();
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
