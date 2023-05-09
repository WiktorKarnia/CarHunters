<template>
    <div class="row mx-2 px-1 py-5" style="overflow: auto;">
      <div class="col-sm">
        <div v-if="username">
          <img src="img/user.png" width="50" height="50" alt="">
          <h2>{{ username }}</h2>
          <p v-if="description">{{ description }}</p>
          <p v-else>No description found.</p>
        </div>
        <div v-else>
          <p>No username found.</p>
        </div>
      </div>

      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <h2>{{ postCount }}</h2>
            <p>Posts</p>
          </div>
          <div class="col-sm">
            <h1>|</h1>
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
            <button class="btn btn-primary" style="width:30vh;" v-if="!admin">
              <router-link class="text-light" to="/edit">Edit profile</router-link>
            </button>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-sm">
            <button class="btn btn-primary" style="width:30vh;"  v-if="!admin">
              <router-link class="text-light" to="/deleted">Deleted Posts</router-link>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <button class="btn btn-danger text-light" style="width:30vh;" v-if="admin">
              <router-link class="text-light" to="/admin">Moderation mode</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr style="height:3px;color:#1D1D1F;width:80%;margin: auto;">
    <div>
      <profile-posts-component></profile-posts-component>
    </div>
  </template>
  
  <script setup>
    import ProfilePostsComponent from '../components/ProfilePostsComponent.vue' 
    import { reactive } from 'vue';
    import { getAuth } from 'firebase/auth'
    import { ref } from 'vue'
    import { query as dbQuery, where, collection, getDocs } from 'firebase/firestore';
    import { db } from '../main.js'
  
    const auth = getAuth()
    const currentUser = auth.currentUser;
    const username = currentUser?.displayName || null;
    const description = ref('');
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
    const admin = (currentUser.uid === 'XECmcugKcdhxvEiruG1H7ARg9hu1') ? true : false;


</script>
<style>
</style>