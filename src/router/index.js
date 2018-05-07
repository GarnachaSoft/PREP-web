import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/session/login'
import Dashboard from '@/components/dashboard/dashboard'
import User from '@/components/user/user'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login') {
    let session = JSON.parse(localStorage['vue-session-key'])
    if (!session.user) {
      return next('/login')
    }
  }
  next()
})

export default router
