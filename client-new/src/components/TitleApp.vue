<template>
    <div id="canvas-container">
        <canvas id="my-canvas-title" />
        <h1>MOOD IT</h1>
    </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import * as klouds from 'klouds'

onMounted(() => {
    var mySky = klouds.create({
        selector: '#my-canvas-title',
        layerCount: 3,
        speed: 1,
        cloudColor1: '#e6e4eb',
        cloudColor2: '#FFFFFF',
        bgColor: '#0092e8'
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

