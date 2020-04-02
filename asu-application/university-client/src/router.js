import Vue from 'vue'
import Router from 'vue-router'
import AddCertificate from './components/AddCertificate'
import Login from './components/Login'
import Home from './components/Home'
import university from './components/University'
Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [

    {path: '',
    name:'Login',
    component : Login
    },
    {path: '/home',
    name:'Home',
    component : Home
    },
    {
      path:'/university',
      name:'Uni',
      component: university
      
    },
    {path: '/addcert',
    name:'AddCertificate',
    component : AddCertificate
    },
  ]
})
