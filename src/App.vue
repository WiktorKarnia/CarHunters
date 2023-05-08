<template>
    <navbar-component :isloggedin="isLoggedIn"></navbar-component>
    <div class="ps-4 text-center">
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  import NavbarComponent from './components/NavbarComponent1.vue';
  import { onMounted, ref } from 'vue';
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';


  const isLoggedIn = ref(false);
  let auth;

  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged")
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
        console.log("not logged")
      }
    });
  });
</script>
  
  <style>
  body {
    text-align: center;
    background-color: #f5f5f5;

  }
  </style>