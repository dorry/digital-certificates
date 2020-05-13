import Vue from 'vue'
import App from './App.vue'
import babelPolyfill from 'babel-polyfill'
import router from './router.js'
import store from './store/store'
export const eventBus = new Vue();
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'hchs-vue-charts'
import Vuelidate from 'vuelidate'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)
// Install BootstrapVue
Vue.use(Chartkick.use(Chart));
Vue.use(window.VueCharts);
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(firestorePlugin)

// Optionally install the BootstrapVue icon components plugin

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
