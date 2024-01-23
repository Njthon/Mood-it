<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="navbar">
        <div class="mood-it">
            <transition name="fade-mood">

                <h1
                    class="mood-it-text"
                    v-if="authStore.user"
                    :class="{ active: navStore.activeElement === 'mood-it' }"
                    @click="navStore.openMoodIt()"
                > Mood It</h1>
            </transition>

        </div>

        <div class="resume-about">
            <transition name="fade-concept">
                <h2
                    v-if="authStore.user && isConceptVisible"
                    class="resume-about-text"
                    :class="{ active: navStore.activeElement === 'concept' }"
                    @click="navStore.openConcept()"
                >Concept</h2>
            </transition>
        </div>

        <div class="resume-about">
            <transition name="fade-resume">
                <h2
                    v-if="authStore.user && isResumeVisible"
                    class="resume-about-text"
                    :class="{ active: navStore.activeElement === 'resume' }"
                    @click="navStore.openResume()"
                >About me</h2>
            </transition>
        </div>
        <div @click="authStore.logout">
            <img
                class="logout-icon"
                src="/imgs/logout.svg"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import PlayerApp from "@/components/PlayerApp.vue"
import useNavStore from '@/stores/navbar'

const authStore = useAuthStore()
const navStore = useNavStore()
const isConceptVisible = ref(false)
const isResumeVisible = ref(false)

watch(() => !!authStore.user, isUserLoggedIn => {
    if (isUserLoggedIn) {
        startAnimation()
    } else {
        isConceptVisible.value = false
        isResumeVisible.value = false

    }
}, { immediate: true })

function startAnimation() {
    setTimeout(() => {
        isConceptVisible.value = true
    }, 1200)

    setTimeout(() => {
        isResumeVisible.value = true
    }, 1700)
}
</script>

<style scoped>
.navbar {
    margin: 5px 0 3px;
    height: 70%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    color: black;
}

.mood-it {
    flex: 2;
}

.mood-it-text:hover {
    border-bottom: 3px black solid;
    border-radius: 3px;

}

.mood-it-text:focus {
    border-bottom: 1px black solid;
    border-radius: 3px;

}

.resume-about {
    flex: 1;
    margin-left: 15px;
    cursor: pointer;
}

.resume-about-text:hover {
    border-bottom: 3px black solid;
    border-radius: 3px;
}

.active {
    border-bottom: 1px black solid;
    border-radius: 2px;
}

.logout-icon {
    background-color: white;
    height: 30px;
    width: 30px;
    opacity: 0.3;
    align-self: center;
    margin-left: 15px;
}

.fade-mood-enter-from,
.fade-mood-leave-to {
    opacity: 0;
}

.fade-mood-enter-active,
.fade-mood-leave-active {
    transition: opacity 3.5s;
}

.fade-concept-enter-from,
.fade-concept-leave-to {
    opacity: 0;
}

.fade-concept-enter-active,
.fade-concept-leave-active {
    transition: opacity 3s;
}

.fade-resume-enter-from,
.fade-resume-leave-to {
    opacity: 0;
}

.fade-resume-enter-active,
.fade-resume-leave-active {
    transition: opacity 3s;
}

h1 {
    text-align: center;
    z-index: 1;
    margin: 0 0 -30px 15px;
    font-size: -webkit-xxx-large;

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