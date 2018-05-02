import firebase from 'firebase'

var config = process.env.firebase

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
