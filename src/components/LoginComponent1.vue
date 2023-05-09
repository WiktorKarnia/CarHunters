<template>
    <div>
      <div class="cont">
          <div v-if="!loading">
            <br>
            <br>
            <div class="form-container">
              <p class="title">Login into your account</p>
              <form class="form">
                <div class="input-group">
                  <label for="username">E-mail</label>
                  <input type="text" v-model="email">
                </div>
                <div class="input-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="password">
                  <div class="forgot">
                    <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                  </div>
                </div>
                <p v-if="errMsg">{{ errMsg }}</p>
                <button class="sign" @click="signIn" :disabled="loading">{{ loading ? 'Loading...' : 'Log In' }}</button>
              </form>
              <div class="social-message">
                <div class="line"></div>
                <p class="message">Login with Google</p>
                <div class="line"></div>
              </div>
              <div class="social-icons">
                <button aria-label="Log in with Google" class="icon"  @click="signInWithGoogle" :disabled="loading">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
              </div>
              <br>
              <button class="sign" @click="goBack" :disabled="loading">{{ loading ? 'Loading...' : 'Go back' }}</button>
            </div>
            <br>
            <br>
          </div>
          <div v-else>
            <div class="load">
              <!--<p>Logging In...</p>-->
              <br>
              <div class="spinner-border text-primary" role="status"></div>
              <!--
              <div class="spinner">
                  <div class="spinner1"></div>
              </div>-->
            </div>
          </div>
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
        router.push('/posts');
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
        router.push('/posts');
      })
      .catch((error) => {
        console.log("Error");
        alert(error.message);
      })
      .finally(() => {
        loading.value = false;
      });
  };
  const goBack = () => {
    router.push('/hello')
  }
  
</script>
  
<style scoped>
.load{
  height: 620px;
}
.cont{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./public/img/Chiron4.jpg');
  background-repeat: no-repeat;
  background-size: auto;
  opacity: 0.8;
}
.form-container {
  width: 100%;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
  border-color: rgba(167, 139, 250);
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline rgba(167, 139, 250, 1);
}

.sign {
  display: block;
  width: 100%;
  background-color: #7843e6;
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}

.social-message {
  display: flex;
  align-items: center;
  padding-top: 1rem;
}

.line {
  height: 1px;
  flex: 1 1 0%;
  background-color: rgba(55, 65, 81, 1);
}

.social-message .message {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(156, 163, 175, 1);
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons .icon {
  border-radius: 0.125rem;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  margin-left: 8px;
}

.social-icons .icon svg {
  height: 1.25rem;
  width: 1.25rem;
  fill: #fff;
}

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}





.spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 100px;
  height: 100px;
  animation: spinning82341 0.5s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  background-color: rgb(182, 182, 182);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}

</style>
  