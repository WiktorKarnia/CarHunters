<template>
    <div>
        <div v-if="!loading">
            <h1>Register</h1>
            <p><input type="text" placeholder="Email" v-model="email" /></p>
            <p><input type="text" placeholder="Username" v-model="username" /></p>
            <p><input type="password" placeholder="Password" v-model="password" /></p>
            <p><input type="password" placeholder="Repeat Password" v-model="repeat_password" /></p>
            <p><button @click="register">Submit</button></p>
            <p><button @click="signInWithGoogle">Sign in with Google</button></p>
        </div>
        <div v-else>
            <p>Creating your account...</p>
        <div class="spinner"></div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../main";
import { 
    doc, 
    addDoc, 
    collection 
} from "firebase/firestore";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const username = ref("")
const password = ref("");
const repeat_password = ref("");
const router = useRouter();
const loading = ref(false);

const collectionRef = collection(db, "accounts");

const register = () => {
    if (password.value != repeat_password.value){
        (alert("Passwords don't match, try again."));
    }
    else{
        loading.value = true;
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    return updateProfile(user, {
                        displayName: username.value
                    });
                }
            })
            .then(() => {
                console.log("Success")
                console.log(getAuth().currentUser.displayName);
                router.push('/posts');
                const auth = getAuth();
                const user = auth.currentUser;
                addDoc(collectionRef,{
                    UID: user.uid,
                    description: '',
                    })
                    .then((docRef) => {
                        console.log("New account added! With ID: " + docRef.id );
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            })
            .finally(() => {
                loading.value = false;
            });
    };
}
const signInWithGoogle = () => {
    loading.value = true;
    console.log("click")
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push('/posts');
            const auth = getAuth();
                const user = auth.currentUser;
                addDoc(collectionRef,{
                    UID: user.uid,
                    description: '',
                    })
                    .then((docRef) => {
                        console.log("New account added! With ID: " + docRef.id );
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
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
      animation: spin 0.8s ease-in-out infinite;
      margin: 10px auto;
    }
  
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>