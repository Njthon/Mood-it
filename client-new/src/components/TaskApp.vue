<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div
      v-for="task in tasks"
      :key="task.id"
    >
      <form
        class="update-form"
        @submit.prevent="saveTask()"
      >
        <div v-if="!task.isEditing">
          <div @click="editTask">{{ task.title }}</div>
        </div>
        <div v-else>
          <input
            type="text"
            v-model="task.title"
          />
          <button @click="saveTask">Save</button>
          <button @click="deleteTask">Delete</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITask } from "../types/Task"
import useTaskStore from '@/stores/useTaskStore'
import { computed } from 'vue'

const taskStore = useTaskStore()

const props = defineProps<{
  task: ITask
}>()

const tasks = computed(() => taskStore.tasks)

const editTask = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.task.isEditing = true
}

const saveTask = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.task.isEditing = false
  taskStore.updateTask(props.task)
}

const deleteTask = () => {
  taskStore.deleteTask(props.task)
  console.log('deleted')
}
</script>

<style scoped lang="scss">
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