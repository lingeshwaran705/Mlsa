import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsVuuFTtGeqj1NGMoaq9A-oKAo36HDPYY",
  authDomain: "mlsasrec-d303d.firebaseapp.com",
  databaseURL:
    "https://mlsasrec-d303d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mlsasrec-d303d",
  storageBucket: "mlsasrec-d303d.appspot.com",
  messagingSenderId: "415467943433",
  appId: "1:415467943433:web:e52660707ae896813d6ad8",
  measurementId: "G-VSXT3B45QG",
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
