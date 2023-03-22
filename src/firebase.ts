import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBXH7We5eoI_hTMacxFzntgFa5ibwljZko',
  authDomain: 'auth-tz-d8e4f.firebaseapp.com',
  projectId: 'auth-tz-d8e4f',
  storageBucket: 'auth-tz-d8e4f.appspot.com',
  messagingSenderId: '964506632716',
  appId: '1:964506632716:web:89b8646aaccb1969112429',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
