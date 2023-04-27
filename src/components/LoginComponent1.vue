<template>
    <h1>Log into your account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signIn">Log In</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const signIn = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
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
}
const signInWithGoogle = () => {
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
        });
};

</script>