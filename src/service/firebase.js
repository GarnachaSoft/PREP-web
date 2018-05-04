import firebase from 'firebase'

var config = process.env.firebase

firebase.initializeApp(config)
firebase.auth().lenguageCode = 'es_MX'

let fbProvider = new firebase.auth.FacebookAuthProvider()
fbProvider.addScope('email')

export default {
  database: firebase.database(),
  auth: firebase.auth(),
  providers: {
    facebook: fbProvider
  }
}
