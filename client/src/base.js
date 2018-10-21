import Rebase from 're-base'
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCnYipDdOIUb7fyCV2cLe9eQpmVUMjvS0U',
  authDomain: 'movie-tracker-3985f.firebaseapp.com',
  databaseURL: 'https://movie-tracker-3985f.firebaseio.com'
})
const base = Rebase.createClass(app.database())
export default base
