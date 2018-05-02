import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/session/login'
import Dashboard from '@/components/dashboard/dashboard'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    }
  ]
})
