<template>
    <canvas id="background-canvas" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as klouds from 'klouds'
import LoginApp from './LoginApp.vue'
import SignupApp from './SignupApp.vue'

onMounted(() => {
    var mySky = klouds.create({
        selector: '#background-canvas',
        layerCount: 5,
        speed: 0.5,
        cloudColor1: '#A076F9',
        cloudColor2: '#D7BBF5',
        bgColor: '#6528F7'
    })
})
</script>

<style>
#background-canvas {
    position: absolute;
    z-index: -1;
}
</style>