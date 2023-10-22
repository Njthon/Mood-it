<template>
  <div v-if="authStore.user">
    <div @click="authStore.logout">
      <img
        class="logout-icon"
        src="../public/imgs/logout.svg"
      >
    </div>
    <TitleApp />
    <CalendarApp />
    <div>
    </div>
    <EditTaskApp
      v-show="showEditTask"
      :task="taskStore.tasks.find(task => task.id === editingTaskId)"
    />
    <div class="tasks">
      <TaskApp
        @edit-click="toggleEditTask"
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
      />
    </div>
    <ButtonApp :color="showAddTask ? 'rgba(194, 161, 246, 1)' : 'rgba(194, 161, 246, 0.1)'" />
  </div>
  <div v-else>
    <AuthPageAppVue />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ButtonApp from "./components/ButtonApp.vue"
import AuthPageAppVue from "./components/AuthPageApp.vue"
import CalendarApp from "./components/CalendarApp.vue"
import TitleApp from "./components/TitleApp.vue"
import FooterApp from "./components/FooterApp.vue"
import TaskApp from "./components/TaskApp.vue"
import useTaskStore from "./stores/useTaskStore"
import AddTaskApp from "./components/AddTaskApp.vue"
import EditTaskApp from "./components/EditTaskApp.vue"
import LoginApp from "./components/LoginApp.vue"
import { onMounted } from 'vue'
import { useDateStore } from "./stores/date"
import { useAuthStore } from '@/stores/auth'
import type LoginAppVue from "./components/LoginApp.vue"

const authStore = useAuthStore()
const showAddTask = ref(false)
const showEditTask = ref(false)
const editingTaskId = ref(null)
const taskStore = useTaskStore()
const dateStore = useDateStore()

onMounted(() => {
  dateStore

})

function onSaveClicked() {

}

function toggleEditTask(taskId: null) {
  if (taskId !== null) {
    editingTaskId.value = taskId
    showEditTask.value = !showEditTask.value
  }
}
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
  // background-color: #A076F9;
  // background: linear-gradient(0deg, #6628F7, #E5CCF4 60%);

}

.tasks {
  padding: 10px;
  margin: 10px
}
</style>
