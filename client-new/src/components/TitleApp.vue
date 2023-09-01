<template>
    <div id="canvas-container">
        <canvas id="my-canvas" />
        <h1>MOOD IT</h1>
    </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import * as klouds from 'klouds'

onMounted(() => {
    var mySky = klouds.create({
        selector: '#my-canvas',
        layerCount: 5,
        speed: 1,
        cloudColor1: '#1ab3cc',
        cloudColor2: '#c11ed4',
        bgColor: '#c11ed4'
    })
})
</script>

<style scoped>
#canvas-container {
    width: 100%;
    height: 70px;
    position: relative;
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

