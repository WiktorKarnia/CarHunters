<template>
    <h1>Welcome</h1>
    <div>
        <button>
            <router-link to="/login">Login</router-link>
        </button><br>
        <button>
            <router-link to="/register">Register</router-link>
        </button>
        <button @click="handleSignOut">
            Logout
        </button>
    </div>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth';
import router from '../router/router'

const auth = getAuth();

const handleSignOut = () => {
  signOut(auth).then(() => {
    console.log("Signed out")
    router.push("/login")
  })
};
</script>