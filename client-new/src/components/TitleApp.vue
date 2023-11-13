<template>
    <div id="canvas-container">
        <canvas id="my-canvas-title" />
        <h1>MOOD IT</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as klouds from 'klouds'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

let cloudColor1 = '#e6e4eb'
let cloudColor2 = '#FFFFFF'
let bgColor = '#0092e8'


// if (authStore.isAnonymous) {
//     cloudColor1 = "#850101"
//     cloudColor2 = "#222222"
//     bgColor = "#000000"
// }

onMounted(() => {
    var mySky = klouds.create({
        selector: '#my-canvas-title',
        layerCount: 3,
        speed: 1,
        // @ts-ignore
        cloudColor1: cloudColor1,
        // @ts-ignore
        cloudColor2: cloudColor2,
        // @ts-ignore
        bgColor: bgColor
    })
})
</script>

<style scoped>
#canvas-container {
    width: 100%;
    height: 70px;
    position: relative;
    z-index: -1;
    transition: all 1s;
}

h1 {
    text-align: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    top: 10%;
    left: 35%;
}
</style>