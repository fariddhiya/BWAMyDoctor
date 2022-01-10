import {initializeApp} from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkTJPpOSLLGoum4QXa7QVxbQpHpMl8-ZA',
  authDomain: 'mydoctor01-6bde2.firebaseapp.com',
  projectId: 'mydoctor01-6bde2',
  storageBucket: 'mydoctor01-6bde2.appspot.com',
  messagingSenderId: '986616168966',
  appId: '1:986616168966:web:b56253ee1f0c01d4157987',
  databaseURL:
    'https://mydoctor01-6bde2-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const Fire = initializeApp(firebaseConfig);

export default Fire;
