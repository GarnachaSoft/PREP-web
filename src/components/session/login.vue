<template>
  <div id="login" class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col mdl-cell--1-col-phone login-container">
      <!--<img src="../../assets/img/ciudad.png" class="login-city"/>-->
      <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/31606605_10156405980610956_2129413831527497728_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeF8Ud8AWs_aHuvnKI27XyknbYQyS4Lqujmbc7NpbWvSNdlDlkzrxTWuI56Rv3hkTay95ber28Pf1BY8G0kCeTE6LVkv6qpVZ5ahgnEH2i6zjA&oh=2274140343b58579778e152385a79aa3&oe=5B960335" class="login-city">
    </div>
    <div class="mdl-cell mdl-cell--6-col mdl-cell--1-col-phone login-container">
      <div class="login-form">
        <div class="login-button">
          <span class="login-facebook" v-on:click="fbLogin">
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
import firebase from '../../service/firebase'

export default {
  name: 'Login',
  methods: {
    fbLogin () {
      this.$store.commit('loginRequest')
      firebase.auth.signInWithPopup(firebase.providers.facebook)
        .then(result => {
          let info = result.additionalUserInfo
          let credential = result.credential
          let extra = result.user
          let user = {
            info: {
              name: info['first_name'],
              secondName: info.profile['second_name'],
              middleName: info.profile['middle_name'],
              lastName: info.profile['last_name'],
              fullName: info.profile.name,
              email: info.profile.email,
              id: info.profile.id,
              isNew: info.isNewUser,
              providerId: credential.providerId,
              method: credential.signInMethdo,
              created: extra.metadata.creationTime,
              picture: {
                url: info.profile.picture.data.url,
                height: info.profile.picture.data.height,
                width: info.profile.picture.data.width
              }
            },
            session: {
              accessToken: credential.accessToken,
              refreshToken: extra.refreshToken
            }
          }
          this.$session.start()
          this.$session.set('user', user)
          this.$store.commit('successLogin', user)
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
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
