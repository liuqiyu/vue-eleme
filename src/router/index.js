import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import City from '../page/city/city.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:cityid',
      name: 'city',
      component: City
    }
  ]
})
