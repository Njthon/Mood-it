<template>
    <div class="player-container">
        <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 50px; top:20px;"
        >
            <circle
                r="30"
                cx="25"
                cy="25"
                fill="none"
                stroke="black"
                stroke-width="1"
            />
            <g
                class="move-area"
                ref="eyeRef"
            >
                <circle
                    class="circle-container"
                    r="20"
                    cx="25"
                    cy="25"
                    fill="none"
                    stroke="black"
                    stroke-width="1"
                />
                <rect
                    class="circle"
                    x="20"
                    y="10"
                    height="10"
                    width="10"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="black"
                    stroke-width="1"
                />
                <rect
                    class="circle"
                    x="22.5"
                    y="13"
                    height="3"
                    width="3"
                    rx="1"
                    ry="1"
                    fill="none"
                    stroke="black"
                    stroke-width="1"
                />
            </g>

        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const eyeRef = ref<null | any>(null)


document.addEventListener('mousemove', onMouseMove)

function onMouseMove(event: MouseEvent) {
    if (!eyeRef.value) { return }
    const boundingRect = eyeRef.value.getBoundingClientRect()
    const x = (boundingRect.left) + (boundingRect.width / 2)
    const y = (boundingRect.top) + (boundingRect.height / 2)
    const rad = Math.atan2(event.pageX - x, event.pageY - y)
    const rot = (rad * (180 / Math.PI) * -1) + 180
    eyeRef.value.style.transform = 'rotate(' + rot + 'deg)'
}

</script>

<style scoped lang="scss">
g {
    transform-origin: center;
    transition: all 1s;
}

.circle {
    /* animation: circle 3s infinite alternate; */

}

.external-circle {
    /* animation: external-circle 4s infinite alternate; */
}

.circle.container {}
</style>