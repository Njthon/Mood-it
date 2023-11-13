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
        // @ts-ignore
        cloudColor1: '#FAF2EF',
        // @ts-ignore
        cloudColor2: '#e6e4eb',
        // @ts-ignore
        bgColor: '#0092e8'
    })
})
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
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>