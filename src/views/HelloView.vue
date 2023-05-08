<template>
    <h1>CarHunters</h1>
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

.login-button {
  border: none;
  outline: none;
  background-color: #4b1a83;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #631c92;
  margin:150px;
  opacity: 1;
  margin-bottom: 300px;
  width: 150px;
  height: 60px;
}
.register-button {
  border: none;
  outline: none;
  background-color: #4b1a83;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #631c92;
  margin:150px;
  opacity: 1;
  margin-bottom: 300px;
  width: 150px;
  height: 60px;
}


.register-button:active , .login-button:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}


/*
.register-button, .login-button {
    text-decoration: none;
    --glow-color: rgb(217, 176, 255);
    --glow-spread-color: rgba(191, 123, 255, 0.781);
    --enhanced-glow-color: rgb(231, 206, 255);
    --btn-color: rgb(100, 61, 136);
    border: .25em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em .25em var(--glow-color),
            0 0 4em 1em var(--glow-spread-color),
            inset 0 0 .75em .25em var(--glow-color);
    text-shadow: 0 0 .5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
    margin:100px;
}

.register-button::after, .login-button::after {
 pointer-events: none;
 content: "";
 position: absolute;
 top: 120%;
 left: 0;
 height: 100%;
 width: 100%;
 background-color: var(--glow-spread-color);
 filter: blur(2em);
 opacity: .7;
 transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}

.register-button:hover , .login-button:hover {
 color: var(--btn-color);
 background-color: var(--glow-color);
 box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 2em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
 color: black;
}

.register-button:active , .login-button:active{
 box-shadow: 0 0 0.6em .25em var(--glow-color),
        0 0 2.5em 2em var(--glow-spread-color),
        inset 0 0 .5em .25em var(--glow-color);
}*/


</style>