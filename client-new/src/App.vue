<template>
  <div class="container">
    <TitleApp />
    <CalendarApp />
    <HeaderApp />
    <div v-show="showAddTask">
      <AddTaskApp />

    </div>
    <div class="tasks">
      <TaskApp
        v-for="task in taskStore.tasks"
        :key="task._id"
        :task="task"
      />
    </div>
    <FooterApp
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import CalendarApp from "./components/CalendarApp.vue"
import TitleApp from "./components/TitleApp.vue"
import FooterApp from "./components/FooterApp.vue"
import TaskApp from "./components/TaskApp.vue"
import useTaskStore from "./stores/useTaskStore"
import HeaderApp from "../src/components/HeaderApp.vue"
import AddTaskApp from "./components/AddTaskApp.vue"

const showAddTask = ref(false)
const taskStore = useTaskStore()

taskStore.fetchTasks()

function toggleAddTask() {
  showAddTask.value = !showAddTask.value
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

}

.container {
  align-content: space-between;
  flex-direction: column;
  border: 1px solid steelblue;
  border-radius: 5px;
  height: 100%;
  margin: 2px;
}

.tasks {
  padding: 10px
}
</style>
