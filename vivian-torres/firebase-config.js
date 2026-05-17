/*
  KT IMÓVEIS — FIREBASE CONFIG
*/
const firebaseConfig = {
  apiKey: "AIzaSyAVjaLYEnrmsAN0nX4zMzlsKynVZNFCK8Y",
  authDomain: "kt-imoveis.firebaseapp.com",
  databaseURL: "https://kt-imoveis-default-rtdb.firebaseio.com",
  projectId: "kt-imoveis",
  storageBucket: "kt-imoveis.firebasestorage.app",
  messagingSenderId: "555690291296",
  appId: "1:555690291296:web:f8ffa8d1df512f11f35305"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
