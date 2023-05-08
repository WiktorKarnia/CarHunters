<template>
    <div id="welcome" class="px-5 border border-danger">
        <h1>Welcome</h1>
        <button type="button" class="btn btn-outline-primary" style="float:right">
            <router-link to="/login">Login</router-link>
        </button>
        <button type="button" class="btn btn-outline-primary" style="float:left">
            <router-link to="/register">Register</router-link>
        </button>
    </div>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth';
import router from '../router/router.js'


</script>
<style scoped>

</style>