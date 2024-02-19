// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-auth-a7819.firebaseapp.com',
  projectId: 'mern-auth-a7819',
  storageBucket: 'mern-auth-a7819.appspot.com',
  messagingSenderId: '583361150717',
  appId: '1:583361150717:web:a8f02b072cbfb344128894',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
