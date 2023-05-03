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
    <button class="btn btn-primary" v-if="!admin">
      <router-link class="text-light" to="/edit">Edit profile</router-link>
    </button>
    <button class="btn btn-primary" v-if="!admin">
      <router-link class="text-light" to="/deleted">Deleted Posts</router-link>
    </button>
    <button class="btn btn-danger text-light" v-if="admin">
      <router-link class="text-light" to="/admin">Moderation mode</router-link>
    </button>
  </template>
  
  <script setup>
    import { getAuth } from 'firebase/auth'
    import { ref } from 'vue'
    import { collection, query, where, getDocs } from 'firebase/firestore'
    import { db } from '../main.js'
  
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
    const admin = (currentUser.uid === 'XECmcugKcdhxvEiruG1H7ARg9hu1') ? true : false;
</script>