import Vue from 'vue'
import Router from 'vue-router'
import Identification from './components/Identification'
import Validation from './components/Validation'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {path: '',
    name:'Identification',
    component : Identification

    },
    {
        path: '/validation',
        name: 'Validation',
        component: Validation
      },
  ]
})
