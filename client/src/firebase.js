import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOHK0u5oA4PIdscfzFtfKjvc5qUZBmQmI",
    authDomain: "movie-tracker-3985f.firebaseapp.com",
    databaseURL: "https://movie-tracker-3985f.firebaseio.com",
    projectId: "movie-tracker-3985f",
    messagingSenderId: "509335286653"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();