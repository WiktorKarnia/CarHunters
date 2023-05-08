<template>
<nav class="border-bottom navbar navbar-expand-lg navbar-light" style="background-color: #f5f5f5" v-if="isloggedin">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
      <ul class="navbar-nav ms-4 mb-2">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/posts">
            <img src="img/home.png" width="35" height="35" alt="">
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-4 mb-2">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/add-post">
            <img src="img/addition.png" width="35" height="35" alt="">
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-4 mb-2">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/account">
            <img src="img/user.png" width="35" height="35" alt="">
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-4 mb-2">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/liked">
            <img src="img/heart-black.png" width="35" height="35" alt="">
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-4 mb-2">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/search">
            <img src="img/pin.png" width="35" height="35" alt="">
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-4 mb-2">
        <li class="nav-item">
          <button type="button" @click="handleSignOut" class="btn btn-outline-dark">
            <a>
              <img src="img/logout.png" width="35" height="35" alt="">
            </a>
          </button>
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