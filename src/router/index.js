import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/views/index'
import HelloWorld from '@/enter/index'
import data1 from '@/enter/login'
import data from '@/views/index'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/data1',
      name: 'data1',
      component: data1
    },
    {
      path: '/data',
      name: 'data',
      component: data
    }
  ]
})
