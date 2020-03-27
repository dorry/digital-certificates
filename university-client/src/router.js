import Vue from 'vue'
import Router from 'vue-router'
import AddCertificate from './components/AddCertificate'


Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {path: '',
    name:'AddCertificate',
    component : AddCertificate

    },

  ]
})
