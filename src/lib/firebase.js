import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-90f31.firebaseapp.com",
  projectId: "reactchatapp-90f31",
  storageBucket: "reactchatapp-90f31.appspot.com",
  messagingSenderId: "604362023135",
  appId: "1:604362023135:web:a793ad713b66167061c96a",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const stroage = getStorage()
