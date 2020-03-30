import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyCvTf156C0J8VAluFr46ZhKDuIhFkLGE8g",
    authDomain: "weadviseapp.firebaseapp.com",
    databaseURL: "https://weadviseapp.firebaseio.com",
    projectId: "weadviseapp",
    storageBucket: "weadviseapp.appspot.com",
    messagingSenderId: "974451380210",
    appId: "1:974451380210:web:9639cea7595988a6dfe56b",
    measurementId: "G-VS18KKWY61"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const databaseRef = firebase.database().ref();
export { db, auth };
