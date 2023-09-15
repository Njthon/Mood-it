<template>
  <div class="container">
    <TitleApp />
    <CalendarApp />
    <div v-show="showAddTask">
      <AddTaskApp />
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
    <FooterApp
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
    />
  </div>
</template>

<script setup lang="ts">
import type { ITask } from "../types/Task"
import { ref } from "vue"
import CalendarApp from "./components/CalendarApp.vue"
import TitleApp from "./components/TitleApp.vue"
import FooterApp from "./components/FooterApp.vue"
import TaskApp from "./components/TaskApp.vue"
import useTaskStore from "./stores/useTaskStore"
import AddTaskApp from "./components/AddTaskApp.vue"
import EditTaskApp from "./components/EditTaskApp.vue"

const showAddTask = ref(false)
const showEditTask = ref(false)
const editingTaskId = ref(null)
const taskStore = useTaskStore()

function toggleAddTask() {
  showAddTask.value = !showAddTask.value
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
