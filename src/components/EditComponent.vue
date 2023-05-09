<template>
  <div>
    <div v-if="!loading" class="row mx-2 px-1 py-5" style="overflow: auto;">
      <div class="col-sm">
        <div v-if="username">
          <img src="img/user.png" width="50" height="50" alt="">
          <h2>{{ username }}</h2>
        </div>
        <div v-else>
          <p>No username found.</p>
        </div>
        <div>
          <label for="newDescription">New Description</label>
          <textarea class="form-control" id="newDescription" cols="40" rows="5" maxlength="100" v-model="description"></textarea>
          <br>
          <button class="btn btn-primary" style="width:30vh;" @click="saveChanges">Save changes</button>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <h2>{{ postCount }}</h2>
            <p>Posts</p>
          </div>
          <div class="col-sm">
            <h1>-</h1>
          </div>
          <div class="col-sm">
            <h2>{{ likeCount }}</h2>
            <p>Likes</p>
          </div>
        </div>
      </div>
      <div class="col-sm py-2">
        <div class="row ">
          <div class="col-sm">
            <button class="btn btn-primary" style="width:30vh;" disabled>
              <router-link class="text-light" to="/edit">Edit profile</router-link>
            </button>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-sm">
            <button class="btn btn-primary" style="width:30vh;" disabled>
              <router-link class="text-light" to="/deleted">Deleted Posts</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Saving changes...</p>
      <div class="spinner-border text-primary" role="status"></div>
    </div>
    <hr style="height:3px;color:#1D1D1F;width:80%;margin: auto;">
  </div>
  </template>
  
  <script setup>
  import { getAuth } from 'firebase/auth'
  import { ref } from 'vue'
  import { collection, query as dbQuery, where, getDocs, doc, updateDoc } from 'firebase/firestore'
  import { db } from '../main.js'
  import { updateProfile } from 'firebase/auth'
  import router from '../router/router.js'
  
  const auth = getAuth()
  const currentUser = auth.currentUser
  const username = ref(currentUser?.displayName || null)
  const description = ref('')
  const loading = ref(false)
  const likeCount = ref(0);
  const postCount = ref(0);

    const countPosts = async (uid) => {
      const querySnapshot2 = await getDocs(dbQuery(collection(db, 'cars'), where('uid', '==', currentUser.uid)))
      for (const doc of querySnapshot2.docs) {
        postCount.value++
      }
    }

    const countLikes = async (posters_uid) => {
      const querySnapshot2 = await getDocs(dbQuery(collection(db, 'likes'), where('posters_uid', '==', currentUser.uid)))
      for (const doc of querySnapshot2.docs) {
        likeCount.value++
      }
    }
  
  const getAccountInfo = async () => {
    const q = dbQuery(
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
    countPosts(currentUser.uid)
    countLikes(currentUser.uid)
  }
  
  const saveChanges = async () => {
    if (currentUser) {
      if (username.value && description.value) {
        const q = dbQuery(
          collection(db, 'accounts'),
          where('UID', '==', currentUser.uid)
        )
        const querySnapshot = await getDocs(q)
        const docId = querySnapshot.docs[0].id
        const accountRef = doc(db, 'accounts', docId)
    
        try {
          await updateDoc(accountRef, { description: description.value })
          console.log('Description updated successfully')
          loading.value = true;
          router.push('/account')
        } catch (error) {
          console.error(error)
        }
      } else {
        console.error('Description cannot be empty')
      }
    }
  }
  </script>

<style>

</style>
  