import Vue from 'vue'
import Router from 'vue-router'
import AddCertificate from './components/AddCertificate'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import store from './store/store'
import university from './components/University'
import Dashboard from './components/Dashboard'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [

    {path: '/',
    name:'Home',
    component : Home
    },
    
    {path:'/login',
    name:'Login',
    component : Login
    },
  
    {path: '/profile',
    name:'Profile',
    component : Profile
    },

    {path: '/dashboard',
    name:'Dashboard',
    component : Dashboard
    },

    {
      path:'/university',
      name:'Uni',
      component: university,
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
    path: '/addcert',
    name:'AddCertificate',
    component : AddCertificate,
    beforeEnter: (to, from, next) => {
      if(store.state.islogged == false) {
          console.log("Guarded");
          next('/login');
      } else {
        console.log("Passed!!!");
        next();
      }
  }    },
  ]
})
