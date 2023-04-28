<template>
    <h1>Edit</h1>
    <p>New username:</p>
    <input type="text" v-model="username">
    <p>New Description: </p>
    <textarea cols="40" rows="5" v-model="description"></textarea>
    <br>
    <button @click="saveChanges">Save changes</button>
  </template>
  
  <script setup>
  import { getAuth } from 'firebase/auth'
  import { ref } from 'vue'
  import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
  import { db } from '../main'
  import { updateProfile } from 'firebase/auth'
  
  const auth = getAuth()
  const currentUser = auth.currentUser
  const username = ref(currentUser?.displayName || null)
  const description = ref('')
  
  const getAccountInfo = async () => {
    const q = query(
      collection(db, 'accounts'),
      where('UID', '==', currentUser.uid)
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      description.value = doc.data().description
    })
  }
  
  if (currentUser) {
    getAccountInfo()
  }
  
  const saveChanges = async () => {
    if (currentUser) {
      if (username.value && description.value) {
        try {
          await updateProfile(currentUser, { displayName: username.value })
          console.log(currentUser)
        } catch (error) {
          console.error(error)
        }
    
        const q = query(
          collection(db, 'accounts'),
          where('UID', '==', currentUser.uid)
        )
        const querySnapshot = await getDocs(q)
        const docId = querySnapshot.docs[0].id
        const accountRef = doc(db, 'accounts', docId)
    
        try {
          await updateDoc(accountRef, { description: description.value })
          console.log('Description updated successfully')
        } catch (error) {
          console.error(error)
        }
      } else {
        console.error('Username and description cannot be empty')
      }
    }
  }
  </script>
  