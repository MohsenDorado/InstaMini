// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instaminiclone.firebaseapp.com",
  projectId: "instaminiclone",
  storageBucket: "instaminiclone.appspot.com",
  messagingSenderId: "947297760568",
  appId: "1:947297760568:web:7f549a60b175bc8955fdcd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



//!firebase storage rules.....................................................................................
// service firebase.storage {
//     7
//       match /b/{bucket}/o {
//     8
//         match /{allPaths=**} {
//     9
//           allow read;
//     10
//           allow write: if
//     11
//           request.resource.size<2*1024*1024 && request.resource.contentType.matches('image/.*')
//     12
//         }
//     13
//       }
//     14
//     }
    