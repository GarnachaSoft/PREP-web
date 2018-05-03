<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
body {
  margin: 0;
}
html, body, #app {
  height: 100%;
}
</style>
