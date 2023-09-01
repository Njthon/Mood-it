<template>
  <div class="task-container">
    <h3>{{ task?.text }}</h3>
    <p>{{ task?.day }}</p>
    <i
      @click="taskStore.deleteTask(task)"
      class="fas fa-times"
    ></i>
  </div>
</template>

<script setup lang="ts">
import type { ITask } from "../types/Task"
import useTaskStore from '@/stores/useTaskStore'

defineProps<{
  task: ITask
}>()

const taskStore = useTaskStore()
</script> 

<style scoped lang="scss">
.body-container {}

.fas {
  color: red;
}

.tasks {
  display: flex;

}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #1ab3cc;
}

.task-container {
  background-color: rgba(72, 214, 236, 0.6);
  border-radius: 3px;
  border: 1px black solid;
}

.task h3 {
  margin: 2px;
  display: flex;
  justify-content: space-between;

}
</style>