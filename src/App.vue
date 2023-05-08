<template>
    <navbar-component id="nav" :isloggedin="isLoggedIn"></navbar-component>
    <div id="body" class="text-center">
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  import NavbarComponent from './components/NavbarComponent1.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
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
  
  <style soped>
  body {
    text-align: center;
    background-color: #e2e2e2;
  }

  header{
    width: 100%;
    position:fixed;
    background-color: #e2e2e2;
  }
  #body {
    padding-top: 14vh;
    padding-bottom: 3vh;
  }
  #nav{
    margin-top: 6vh;
    width: 100%;
    position:fixed;
   }

  </style>