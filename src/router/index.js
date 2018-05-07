import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/session/login'
import Dashboard from '@/components/dashboard/dashboard'
import User from '@/components/user/user'
import _ from 'lodash'

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
  let session = JSON.parse(localStorage['vue-session-key'] || '{}')
  if (to.name !== 'Login') {
    if (!session.user.session.accessToken) {
      return next('/login')
    }
  } else {
    if (_.has(session, 'user.session.accessToken')) {
      return next('/')
    }
  }
  next()
})

export default router
