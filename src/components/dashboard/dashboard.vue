<template>
  <div id="dashboard">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <img src="../../assets/img/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  methods: {},
  computed: {
    ...mapGetters(['user'])
  },
  mounted: function () {}
}
</script>

<style>

</style>
