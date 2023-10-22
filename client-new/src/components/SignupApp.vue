<template>
    <div class="auth-inputs">
        <div
            v-if="!toggleSignUp"
            @click="signUpClick()"
            class="register-btn"
        >
            Register
        </div>
        <div
            v-else
            class="auth-inputs"
            @submit.prevent="authStore.signUp(email, password)"
        >
            <label>email</label>
            <input
                type="email"
                name="email"
                v-model="email"
            >
            <label>password</label>
            <input
                type="password"
                name="password"
                v-model="password"
            >
            <button
                class="signup-button"
                type="submit"
            >Signup
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from "@/stores/auth"

const authStore = useAuthStore()

const email = ref('')
const password = ref('')
let toggleSignUp = ref(false)

const signUpClick = () => {
    toggleSignUp.value = true
    console.log(toggleSignUp)
}


</script>

<style>
.signup-button {
    height: 5vh;
    border: 0 solid rgba(3, 3, 3, 0.05);
    border-radius: 4px;
    background-color: rgba(3, 3, 3, 0.05);
}

.register-btn {
    align-self: center;
}
</style>