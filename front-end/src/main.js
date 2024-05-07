import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
// firebase api keys
};

// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).use(router).mount('#app')
