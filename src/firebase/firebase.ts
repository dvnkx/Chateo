import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCVQXVAhc8XzjvpDIk8SexRzKe-FcTkyvE',
  authDomain: 'chat-app-firebase-9f913.firebaseapp.com',
  projectId: 'chat-app-firebase-9f913',
  storageBucket: 'chat-app-firebase-9f913.appspot.com',
  messagingSenderId: '897686176545',
  appId: '1:897686176545:web:e4a20265e388f8ffb63460',
};

export const app = initializeApp(firebaseConfig);
console.log('FIREBASE');