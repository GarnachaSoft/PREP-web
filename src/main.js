// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './service/firebase'

Vue.config.productionTip = false
Vue.use(Vuefire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    // TODO: db connection
    // cat: firebase.database.ref('cat').orderByChild('created_at')
  },
  created () {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        return this.$router.push('/')
      }
      return this.$router.push('/login')
    })
  },
  router,
  template: '<App/>',
  components: { App }
})
