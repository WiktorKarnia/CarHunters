<template>
    <div>
        <div v-if="!loading">
            <h1>Log into your account</h1>
            <p><input type="text" placeholder="Email" v-model="email" /></p>
            <p><input type="password" placeholder="Password" v-model="password" /></p>
            <p v-if="errMsg">{{ errMsg }}</p>
            <p>
                <button @click="signIn" :disabled="loading">{{ loading ? 'Loading...' : 'Log In' }}</button>
            </p>
            <p>
                <button @click="signInWithGoogle" :disabled="loading">{{ loading ? 'Loading...' : 'Sign in with Google' }}</button>
            </p>
        </div>
        <div v-else>
            <p>Logging In...</p>
            <div class="spinner"></div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { 
    getAuth,
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider 
    } from "firebase/auth";
  import { useRouter } from "vue-router";
  const email = ref("");
  const password = ref("");
  const errMsg = ref();
  const loading = ref(false);
  const router = useRouter();
  
  const signIn = () => {
    loading.value = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully logged in!");
        console.log(auth.currentUser);
        console.log(auth.currentUser.displayName);
        router.push('/home');
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Incorrect password"
            break;
          default:
            errMsg.value = "Email or password are incorrect";
            break;
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };
  const signInWithGoogle = () => {
    loading.value = true;
    console.log("click")
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push('/home');
      })
      .catch((error) => {
        console.log("Error");
        alert(error.message);
      })
      .finally(() => {
        loading.value = false;
      });
  };
  
  </script>
  
  <style>
    .spinner {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 4px solid #ccc;
      border-top-color: #333;
      animation: spin 1.8s ease-in-out infinite;
      margin: 10px auto;
    }
  
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
  