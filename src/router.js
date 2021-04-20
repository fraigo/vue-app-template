import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting, separate chunk name, lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Form.vue')
    }
  ]
})
