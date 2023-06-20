// Import the functions you need from the SDKs you need
import { initializeApp }  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { v4 } from 'uuid'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG7Xqjlmjr3dFxrwdPap3r1IhcBm1F8bI",
  authDomain: "vue-crud-95ad2.firebaseapp.com",
  projectId: "vue-crud-95ad2",
  storageBucket: "vue-crud-95ad2.appspot.com",
  messagingSenderId: "434276135815",
  appId: "1:434276135815:web:4fe971eac1d4ebaf231922"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Acciones de firebase
export const db = getFirestore(app)
export const storage = getStorage(app)

export async function uploadFile(file){
 const storageRef = ref(storage, v4())
 await uploadBytes(storageRef, file)
 const url = await getDownloadURL(storageRef)
 return url
}

