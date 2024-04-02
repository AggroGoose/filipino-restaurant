import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
	PUBLIC_FB_API,
	PUBLIC_FB_APPID,
	PUBLIC_FB_AUTH,
	PUBLIC_FB_PROJECT,
	PUBLIC_FB_SENDER,
	PUBLIC_FB_STORAGE
} from '$env/static/public';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: PUBLIC_FB_API,
	authDomain: PUBLIC_FB_AUTH,
	projectId: PUBLIC_FB_PROJECT,
	storageBucket: PUBLIC_FB_STORAGE,
	messagingSenderId: PUBLIC_FB_SENDER,
	appId: PUBLIC_FB_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
