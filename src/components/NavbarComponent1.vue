<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isloggedin">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
          </li>
        </ul>
        <ul class="navbar-nav text-center mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/add-post">Add Post</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/account">Account</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button @click="handleSignOut">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { getAuth, signOut } from 'firebase/auth';
  import router from '../router/router.js';

  const props = defineProps({
    isloggedin: Boolean,
  });

  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Signed out")
      router.push("/hello")
    })
  };
</script> 