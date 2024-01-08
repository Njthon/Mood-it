<template>
    <div class="navbar">
        <!-- <div id="canvas-container"> -->
        <!-- <canvas id="my-canvas-title" /> -->
        <h2>Mood It</h2>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as klouds from 'klouds'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// let cloudColor1 = '#e6e4eb'
// let cloudColor2 = '#FFFFFF'
// let bgColor = '#0092e8'


// // if (authStore.isAnonymous) {
// //     cloudColor1 = "#850101"
// //     cloudColor2 = "#222222"
// //     bgColor = "#000000"
// // }

// onMounted(() => {
//     var mySky = klouds.create({
//         selector: '#my-canvas-title',
//         layerCount: 3,
//         speed: 1,
//         // @ts-ignore
//         cloudColor1: cloudColor1,
//         // @ts-ignore
//         cloudColor2: cloudColor2,
//         // @ts-ignore
//         bgColor: bgColor
//     })
// })
</script>

<style scoped>
.navbar {
    margin: 5px 0 3px;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}


h2 {
    text-align: center;
    z-index: 1;
    margin: 0 0 2px 5px;

}

#canvas-container {
    position: relative;
    width: 100%;
    height: 70px;
    position: relative;
    z-index: -1;
    transition: all 1s;
}
</style>