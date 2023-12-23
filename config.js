// firebase config setup
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "@firebase/app";

// firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyDLzWb_NBDZPD7iG3wk_-NCYGLUdERIB0M",
	authDomain: "travelbuddyauth.firebaseapp.com",
	projectId: "travelbuddyauth",
	storageBucket: "travelbuddyauth.appspot.com",
	messagingSenderId: "550238383289",
	appId: "1:550238383289:web:87ef25462cead2ca287f68",
	measurementId: "G-6GHK3JG5R9",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
