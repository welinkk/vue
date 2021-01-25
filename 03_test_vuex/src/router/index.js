import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'
import Router from 'vue-router'
import TestVuex from '../components/TestVuex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testvuex',
      name: 'TestVuex',
      component: TestVuex
    }
  ]
})
