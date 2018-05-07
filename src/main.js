// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import Vuex from 'vuex'
import store from './vuex'
import VueSession from 'vue-session'

const sessionOptions = {
  persist: true
}

Vue.config.productionTip = false
Vue.use(Vuefire)
Vue.use(Vuex)
Vue.use(VueSession, sessionOptions)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
