import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      name: 'Index',
      component: Index,
      children: [
        {path: 'home', component: Home},
      ]
    }
  ]
})
