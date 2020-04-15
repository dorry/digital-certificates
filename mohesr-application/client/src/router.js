import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Identification from './components/Identification'
import Validation from './components/Validation'
import Login from './components/login'
import Publics from './components/PublicUnis'
import Uni from './components/University'
import store from './store/store'

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
    component : Identification,
    beforeEnter: (to, from, next) => {
      if(store.state.islogged == false) {
          console.log("Guarded");
          next('/login');
      } else {
        console.log("Passed!");
        next();
      }
  } 
    },
    {path: '/publicunis',
    name:'Publicunis',
    component : Publics,
    beforeEnter: (to, from, next) => {
      if(store.state.islogged == false) {
          console.log("Guarded");
          next('/login');
      } else {
        console.log("Passed!");
        next();
      }
  } 
    },
    {
    path: '/university',
    name:'Uni',
    component : Uni,
    beforeEnter: (to, from, next) => {
      if(store.state.islogged == false) {
          console.log("Guarded");
          next('/login');
      } else {
        console.log("Passed!");
        next();
      }
  } 
    },
    {
    path: '/login',
    name:'Login',
    component : Login,
    
    },
    {
    path: '/validation',
    name: 'Validation',
    component: Validation,
    beforeEnter: (to, from, next) => {
      if(store.state.islogged == false) {
          console.log("Guarded");
          next('/login');
      } else {
        console.log("Passed!");
        next();
      }
  } 
    },
  ]
})
