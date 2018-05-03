'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  firebase: JSON.stringify({
    apiKey: 'AIzaSyB13-IZI8MFN_0_FvH-cicj7NyKYUZI3Lg',
    authDomain: 'het-vue-furebase-tutorial.firebaseapp.com',
    databaseURL: 'https://het-vue-furebase-tutorial.firebaseio.com',
    projectId: 'het-vue-furebase-tutorial',
    storageBucket: 'het-vue-furebase-tutorial.appspot.com',
    messagingSenderId: '104477334982'
  })
})
