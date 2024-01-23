<template>
    <div class="title-auth-container">
        <h1 class="mood-title">Mood It</h1>
        <div class="auth-card">
            <div>
                <LoginApp />
                <SignupApp />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import LoginApp from './LoginApp.vue'
import SignupApp from './SignupApp.vue'

</script>

<style>
#my-canvas {
    height: 100vh !important;
    width: 100vw !important;
    position: relative;
    z-index: -2;
    transition: all 2s;
}

.mood-title {
    color: black;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>