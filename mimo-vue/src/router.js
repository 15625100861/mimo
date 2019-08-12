import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'//主页面

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: Home },
  ]
})
