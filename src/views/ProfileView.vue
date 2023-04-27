<template>
    <h1>Account</h1>
    <h2>{{ username }}</h2>
</template>
<script setup>
import { getAuth } from 'firebase/auth'
const auth = getAuth()
const username = auth.currentUser.displayName

</script>