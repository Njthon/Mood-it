<template>
  <div class="main-background">

    <TitleApp />
    <div v-if="authStore.user">
      <div @click="authStore.logout">
        <img
          class="logout-icon"
          src="../public/imgs/logout.svg"
        >
      </div>

      <div class="web-app">
        <div class="top-app">
          <div class="user-container">
            <h4> Welcome
              <input
                @blur="authStore.setUsername()"
                v-model="authStore.user.displayName"
              >
            </h4>
          </div>
          <PlayerApp />
        </div>

        <div class="bottom-app">
          <TasksDashboard />
          <div class="mood-it-app">
            <CalendarTasks />
            <div>
            </div>
            <EditTaskModal
              v-if="!taskStore.isXClicked"
              v-show="taskStore.isEditedTaskOpen"
            />
            <ButtonApp />
          </div>
        </div>
      </div>

      <div v-if="!authStore.user?.displayName && authStore.user">
      </div>
    </div>

    <div v-else>
      <AuthPageAppVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonApp from "./components/ButtonApp.vue"
import AuthPageAppVue from "./components/AuthPageApp.vue"
import TasksDashboard from "./components/TasksDashboard.vue"
import TitleApp from "./components/TitleApp.vue"
import useTaskStore from "./stores/useTaskStore"
import EditTaskModal from "./components/EditTaskModal.vue"
import ChatRoomListApp from "./components/ChatRoomListApp.vue"
import PlayerApp from "./components/PlayerApp.vue"
import CalendarTasks from "./components/CalendarTasks.vue"
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

body {
  --web-app-gap: 7px;
}

body {
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  height: 100%;
  font-weight: normal;
  color: #ffffff
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
/* Handle */
::-webkit-scrollbar-thumb {
  background: #0000007b;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}



.main-background {
  background-color: #191919;
  height: 100%;
  width: 100%;
  position: relative;
}

.web-app {
  color: black;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 65vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .top-app {
    display: flex;
    flex: 1;
    gap: var(--web-app-gap);

    .user-container {
      border-radius: 7px;

      color: black;
      overflow: hidden;
      height: 100%;
      background-color: #ffeb81;
      padding: 5px;
      position: sticky;
      flex-grow: 2;
    }

    .user-container h4 {
      font-size: 20px;
    }

    .user-container input {
      width: auto;
      font-size: 20px;
      font-weight: 500;
      background-color: #ffeb81;
      border-bottom: 3px black solid;
    }

    .user-container input:hover {
      border-bottom: 2px black solid;
      outline: none;
    }

    .user-container input:focus {
      border-bottom: 1px black solid;
      outline: none;
    }

    .player-container {
      background-color: #53ff59;
      border-radius: 5px;
      padding: 7px;
      flex-grow: 2;
    }

  }

  .bottom-app {
    display: flex;
    flex: 3;
    gap: 20px;
    overflow: hidden;

    .mood-it-app {
      top: 50%;
      left: 50%;
      padding: 5px;
      border-radius: 5px;
      backdrop-filter: blur(4px);
      border-radius: 7px;
      overflow: hidden;
      font-weight: 900;
      display: flex;
      flex-direction: column;
      flex: 1;
      background-color: #5ce5e1;
      justify-content: space-between;

    }


    .chat-login-container {
      background-color: #ff66d1;
      padding: 5px;
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      min-width: 50%;
    }

    .chat-login-container h3 {
      margin-bottom: 20%;
    }
  }
}
</style>
