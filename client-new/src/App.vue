<template>
  <div v-if="authStore.user">
    <div @click="authStore.logout">
      <img
        class="logout-icon"
        src="../public/imgs/logout.svg"
      >
    </div>
    <TitleApp />
    <div class="web-app">
      <HeaderMenuApp />
      <div>
      </div>
      <div v-if="!taskStore.isXClicked">
        <EditTaskModal v-show="taskStore.isEditedTaskOpen" />
      </div>
      <ButtonApp />
    </div>
  </div>
  <div v-else>
    <AuthPageAppVue />
  </div>
</template>

<script setup lang="ts">
import ButtonApp from "./components/ButtonApp.vue"
import AuthPageAppVue from "./components/AuthPageApp.vue"
import HeaderMenuApp from "./components/HeaderMenuApp.vue"
import TitleApp from "./components/TitleApp.vue"
import TasksDashboard from "./components/TasksDashboard.vue"
import useTaskStore from "./stores/useTaskStore"
import EditTaskModal from "./components/EditTaskModal.vue"
import { onMounted } from 'vue'
import { useDateStore } from "./stores/date"
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const taskStore = useTaskStore()
const dateStore = useDateStore()

onMounted(() => {
  dateStore
})
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

#app {
  height: 100%;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100%;
  background-color: #ffffff;
  font-weight: normal;

}

.tasks {
  padding: 10px;
  margin: 10px
}

@media (min-width: 650px) {
  #canvas-container {
    height: 100vh !important;
    width: 100vw !important;
    z-index: -5;
    transition: all 1s;
    overflow: hidden;
    position: absolute !important;

  }

  #canvas-container h1 {
    top: 30px;
    right: 35%;
  }

  .web-app {
    position: absolute;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 40%;
    border: 1px solid black;
    border-radius: 5px;
    backdrop-filter: blur(4px);
    margin-top: 50px;
  }
}
</style>
