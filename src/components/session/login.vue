<template>
  <div id="login" class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col mdl-cell--1-col-phone login-container">
      <!--<img src="../../assets/img/ciudad.png" class="login-city"/>-->
      <img src="https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/p/platypus/platypus.adapt.590.1.JPG" class="login-city">
    </div>
    <div class="mdl-cell mdl-cell--6-col mdl-cell--1-col-phone login-container">
      <div class="login-form">
        <div class="login-button">
          <span class="login-facebook">
            <b>Login</b> with <b>Facebook</b>
          </span>
        </div>
        <div class="login-button">
          <span class="login-google">
            <b>Login</b> with <b>Google</b>
          </span>
        </div>
        <div class="login-button">
          <span class="login-twitter">
            <b>Login</b> with <b>Twitter</b>
          </span>
        </div>
        <div class="login-button">
          <div id="lg-fb"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
  name: 'Login',
  methods: {},
  mounted () {
    var uiConfig = {
      signInSuccessUrl: 'success',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#lg-fb', uiConfig)
  }
}
</script>

<style>
#login {
  height: 100%;
  padding: 0px;
}
.login-container {
  display: flex;
}
.login-city {
  height: 40%;
  margin: auto;
}
.login-form {
  width: 80%;
  margin: auto;
}
.login-button {
  height: 50px;
  margin: 20px 0px;
  display: flex;
}
.login-button span {
  width: 200px;
  border-radius: 100px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  color: white;
  padding: 15px 20px;
  margin: auto;
  cursor: pointer;
}
.login-facebook {
  background-color: #3b5998;
  border: solid 1px #3b5998;
}
.login-google {
  background-color: #ea4335;
  border: solid 1px #ea4335;
}
.login-twitter {
  background-color: #2AA3EF;
  border: solid 1px #2AA3EF;
}
</style>
