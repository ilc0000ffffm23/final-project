<template>
    <v-container fluid class="">
        <h1 class="text-center mt-16 mb-10 text-blue-grey-darken-3">
            Register
        </h1>
        <v-card color="brown-lighten-5" class="border-rounded mx-auto" style="width: 600px">
            <v-container>
                <p class="mb-5 ml-2">You are one step away!</p>
                <v-text-field type="text" placeholder="Email" v-model="email"></v-text-field>
                <v-text-field type="password" placeholder="Password" v-model="password"></v-text-field>
                <p class="ml-2">Already have an account?<a href="/signin" style="text-decoration: none;"> Sign in here.</a></p>
                <br>
                <v-btn @click="register" class="text-white me-3 mr-20" color="blue-grey-darken-1">Register</v-btn>
                <v-btn @click="signInWithGoogle" class="text-blue me-3" color="">Google Sign in</v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";

const email = ref("");
const password = ref("");
const router = useRouter();
const db = getFirestore();
const userRef = collection(db, "users");

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // addDoc(userRef, { email: email.value, score: 0 });
            setDoc(doc(db, "users", email.value), { email: email.value, score: 0 });
            // registerSuccess();
            alert("Successfully registered!");
            router.push("/");
        })
        .catch((error) => {
            alert("Your email or password is invalid!");
        });
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/");
        })
        .catch((error) => {
        });
}
</script>
<style scoped>
h1 {
    font-size: 80px;
}
</style>