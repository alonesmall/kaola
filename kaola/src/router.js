import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('@/views/Detail.vue')
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: () => import('@/views/Search.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
