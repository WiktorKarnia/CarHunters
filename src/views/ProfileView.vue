<template>
    <h1>Account</h1>
    <div v-if="username">
      <h2>{{ username }}</h2>
      <p v-if="description">{{ description }}</p>
      <p v-else>No description found.</p>
    </div>
    <div v-else>
      <p>No username found.</p>
    </div>
    <button>
      <router-link to="/edit">Edit profile</router-link>
    </button>
  </template>
  
  <script setup>
    import { getAuth } from 'firebase/auth'
    import { ref } from 'vue'
    import { collection, query, where, getDocs } from 'firebase/firestore'
    import { db } from '../main'
  
    const auth = getAuth()
    const currentUser = auth.currentUser
    const username = currentUser?.displayName || null
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
  </script>