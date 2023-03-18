import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCW3qIWlwdAkD8y2vpDQNhwtZnbHMCTgr8",
    authDomain: "subhojyoti99.github.io",
    databaseURL: "https://tenant-cbe26-default-rtdb.firebaseio.com",
    projectId: "tenant-cbe26",
    storageBucket: "tenant-cbe26.appspot.com",
    messagingSenderId: "1019040645740",
    appId: "1:1019040645740:web:b27132bfbe8dcc7d48ce49"
  };

  const  app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  var db = getFirestore(app);

  export { app, firestore, storage, db};
