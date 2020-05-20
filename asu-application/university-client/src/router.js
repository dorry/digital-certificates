import Vue from 'vue'
import Router from 'vue-router'
import AddCertificate from './components/AddCertificate'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import store from './store/store'
import university from './components/CertificatesList'
import Dashboard from './components/Dashboard'
import ViewMyCert from './components/ViewMyCert'
import Stat from './components/Statistics'
import Req from './components/Request'
import Reql from './components/RequestList'
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
    {
      path:'/clist',
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
      path:'/stats',
      name:'Stat',
      component: Stat,
      beforeEnter: (to, from, next) => {
        if(store.state.islogged == false) {
            console.log("Guarded");
            next('/login');
        } 
        if(store.state.isadmin==false)
        {
          alert("Un-authorized");
          next('home')
        }
          else {
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
  {
    path: '/Requestlist',
    name: 'RequestList',
    component: Reql,
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
  }    
},
{
  path: '/ViewMyCert',
  name:'ViewMyCert',
  component : ViewMyCert,
  beforeEnter: (to, from, next) => {
    if(store.state.islogged == false) {
        console.log("Guarded");
        next('/login');
    } else {
      console.log("Passed!!!");
      next();
    }
}    
},
  ]
})
