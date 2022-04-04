  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import {
      getFirestore, 
      collection,
      addDoc,
      getDocs,
      deleteDoc,
      getDoc,
      updateDoc,
      onSnapshot,
      doc
    } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARReBwrQTqNBKTCTShLReKs--MnGN2yuY",
    authDomain: "fireabse-javascript-crud.firebaseapp.com",
    projectId: "fireabse-javascript-crud",
    storageBucket: "fireabse-javascript-crud.appspot.com",
    messagingSenderId: "580204862138",
    appId: "1:580204862138:web:a764d1b5fbf5f12d580083"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore()

  export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), { title, description });

  export const getTasks = () => getDocs(collection(db, 'tasks'))

  export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

  export const deleteTask = id => deleteDoc(doc(db,'tasks', id))

  export const getTask = id => getDoc(doc(db, 'tasks', id))

  export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields) 
  
  