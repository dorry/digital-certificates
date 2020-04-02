import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Identification from './components/Identification'
import Validation from './components/Validation'
import Login from './components/login'
import Publics from './components/PublicUnis'
import Uni from './components/University'
Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
    path: '/',
    name:'Home',
    component : Home
    },
    {path: '/identification',
    name:'Identification',
    component : Identification
    },
    {path: '/publicunis',
    name:'Publicunis',
    component : Publics
    },
    {
    path: '/university',
    name:'Uni',
    component : Uni
    },
    {
    path: '/login',
    name:'Login',
    component : Login
    },
    {
    path: '/validation',
    name: 'Validation',
    component: Validation
    },
  ]
})
