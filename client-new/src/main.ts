// Import the functions you need from the SDKs you need
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import axios from 'axios'
import App from './App.vue'
import {
    getFirestore, collection, getDocs, addDoc,
    deleteDoc, doc, onSnapshot,
    query, where, orderBy, serverTimestamp, getDoc
} from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import useTaskStore from './stores/useTaskStore'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(createPinia())




import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAriz0LJhzv8JzJ4Aqf8R7JL7LW2B544V8",
    authDomain: "mood-it-a1b50.firebaseapp.com",
    projectId: "mood-it-a1b50",
    storageBucket: "mood-it-a1b50.appspot.com",
    messagingSenderId: "532450859800",
    appId: "1:532450859800:web:c16ff93f8b67ad99e29c6d",
    measurementId: "G-6850TY6T9Z"
}

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig)
export { Fireapp }

const analytics = getAnalytics(Fireapp)

const db = getFirestore()
const auth = getAuth()

const colRef = collection(db, 'tasks')

const q = query(colRef, orderBy('createdAt'))

useTaskStore()

app.mount('#app')
