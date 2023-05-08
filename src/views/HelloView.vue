<template>
    <div id="welcome">
        <br>
        <br>
        <h1 class="title">Welcome</h1>
        <button class="login-button btn btn-primary">
            <router-link to="/login" style="text-decoration: none; color: white;">Login</router-link>
        </button>
        <button class="register-button btn btn-primary">
            <router-link to="/register" style="text-decoration: none; color: white;">Register</router-link>
        </button>
        <div class="space">
        </div>
    </div>
    <br>
</template>

<script setup>
    import { getAuth, signOut } from 'firebase/auth';
    import router from '../router/router.js'
</script>

<style scoped>
#welcome{
    background-image: url('./public/img/Chiron4.jpg');
    background-repeat: no-repeat;
    background-size: auto;
    opacity: 0.8;
}
.title{
    color: #4b1a83;
    margin: 100;
    font-weight: bolder;
}

.register-button, .login-button{
  display: inline-block;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  margin: 1rem auto;
  padding: 0.7rem 2rem;
  border-style: none;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: black;
  box-shadow: 1px 1px 12px #000000;
  margin:150px;
  opacity: 1;
  margin-bottom: 300px;
  width: 150px;
  height: 60px;
}

.register-button::before, .login-button::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(90, 3, 172);
  transform: translateX(-101%);
  transition: all .3s ease;
  z-index: -1;
}

.register-button:hover, .login-button:hover {
  text-decoration-color: #272727;
  transition: all .3s ease;
}

.register-button:hover::before, .login-button:hover::before {
  transform: translateX(0);
}
</style>