<template>
    <canvas id="my-canvas" />
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
import * as klouds from 'klouds'
import LoginApp from './LoginApp.vue'
import SignupApp from './SignupApp.vue'

onMounted(() => {
    var mySky = klouds.create({
        selector: '#my-canvas',
        layerCount: 5,
        speed: 0.5,
        cloudColor1: '#A076F9',
        cloudColor2: '#D7BBF5',
        bgColor: '#6528F7'
    })
})
</script>

<style>
#my-canvas {
    height: 100vh !important;
    position: relative;
    z-index: -2;
}

.mood-title {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>