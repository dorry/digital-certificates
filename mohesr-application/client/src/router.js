import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Identification from './components/Identification'
import Validation from './components/Validation'
import Stats from './components/Statistics'
import Login from './components/login'
import Publics from './components/PublicUnis'
import Uni from './components/University'
import Dash from './components/Dashboard'
import Req from './components/Request'
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
      path: '/dashboard',
      name:'Login',
      component : Dash,
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
       {
    path: '/Statistics',
    name: 'Stat',
    component: Stats,
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
      path: '/Request',
      name: 'Request',
      component: Req,
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
