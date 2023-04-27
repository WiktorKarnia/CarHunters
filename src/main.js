import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const vueApp = createApp(App);

//const analytics = getAnalytics(app);

vueApp.use(router)

vueApp.mount('#app')

export { db };