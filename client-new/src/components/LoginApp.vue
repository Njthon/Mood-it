<template>
    <div
        @submit.prevent="authStore.login"
        class="auth-inputs"
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
            class="login-button"
            type="submit"
            @click="authStore.login(email, password)"
        >Login</button>
        <p class="auth-inputs"></p>
        <h5>or</h5>
    </div>

    <div class="external-auth">
        <div
            class="external-login-button"
            @click="authStore.loginWithGoogle"
        ><img
                class="auth-logos"
                src="/imgs/Google__G__Logo.svg.webp"
            >Login with Google</div>
        <div
            class="external-login-button"
            @click="authStore.loginWithFacebook"
        ><img
                class="auth-logos"
                src="/imgs/675cafde751be69ba38a16504cb93e39.jpg"
            >Login with Facebook</div>
        <div
            class="external-login-button"
            @click="authStore.loginWithGithub"
        ><img
                class="auth-logos"
                src="/imgs/GitHub_Invertocat_Logo.svg"
            >Login with Github</div>
        <h5>or</h5>
        <div
            style="display:flex; align-items: center; justify-content: center;"
            class="external-login-button"
            @click="authStore.loginAnonymously"
        >Go for Ninja Mode!</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const email = ref("")
const password = ref("")
const authStore = useAuthStore()


</script>

<style>
.logout-icon {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 1%;
    left: 90%;
    opacity: 0.3;
    z-index: 2;
}


.auth-card {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-content: start;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    z-index: 0;
    transform: translate(-50%, -50%);
}

.auth-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 9px;
    z-index: 1;
}

input,
input:-webkit-autofill,
input:-webkit-autofill:focus {
    padding: 6px;
    height: 5vh;
    border: 0 solid rgba(87, 81, 74, 0.2);
    border-radius: 4px;
    background-color: -internal-light-dark(rgba(87, 81, 74, 0.2))
}

.login-button {
    height: 5vh;
    border: 0 solid rgba(3, 3, 3, 0.05);
    border-radius: 4px;
    background-color: rgba(3, 3, 3, 0.05);

}

.external-login-button {
    height: 5vh;
    border: 0 solid rgba(3, 3, 3, 0.05);
    border-radius: 4px;
    background-color: rgba(3, 3, 3, 0.05);
    display: flex;
    align-items: center;
    gap: 5px;
}

.login-button:hover {
    background-color: rgba(215, 187, 245, 0.);
}

.auth-logos {
    width: inherit;
    height: inherit;
}

.external-auth {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 5px;
}

.external-auth h5 {
    text-align: center;
    font-weight: normal;
}

.auth-inputs h5 {
    text-align: center;
    font-weight: normal;
}
</style>

