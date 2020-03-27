import Vue from 'vue'
import App from './App.vue'
import babelPolyfill from 'babel-polyfill'
import router from './router.js'
import store from './store/store'
export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
