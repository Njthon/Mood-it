<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div
      v-for="task in filteredTasks"
      :key="task.id"
    >
      <form
        class="update-form"
        @submit.prevent="saveTask(task)"
      >
        <div v-if="!task.isEditing">
          <div
            class="task-container"
            @click="() => editTask(task)"
          >{{ task.title }}<input
              class="isDone"
              type="checkbox"
              v-model="task.isDone"
            />
          </div>
        </div>
        <div v-else>
          <div class="task-edit">
            <input
              class="task-container"
              type="text"
              v-model="task.title"
            />
            <input
              class="task-container"
              type="text"
              v-model="task.plannedDate"
            />
            <div class="form-control">
              <div class="range-container">
                <label for="pleasure">Pleasure</label>
                <input
                  class="range-input"
                  type="range"
                  v-model="task.scoring.pleasure"
                  name="pleasure"
                  min="1"
                  max="3"
                  step="1"
                />
              </div>
            </div>
            <div class="form-control">
              <div class="range-container">
                <label for="stress">Stress</label>
                <input
                  class="range-input"
                  type="range"
                  v-model="task.scoring.stress"
                  name="stress"
                  min="1"
                  max="3"
                  step="1"
                />
              </div>
            </div>
            <div class="form-control">
              <div class="range-container">
                <label for="time">Time</label>
                <input
                  class="range-input"
                  type="range"
                  v-model="task.scoring.time"
                  name="time"
                  min="1"
                  max="3"
                  step="1"
                />
              </div>
            </div>

            <div class="form-control">
              <div class="save-delete-cntr">
                <button
                  class="save-delete-btn"
                  @click="() => saveTask(task)"
                >Save</button>
                <button
                  class="save-delete-btn"
                  @click="() => deleteTask(task)"
                >Delete</button>
              </div>
            </div>
          </div>
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
import { useDateStore } from '@/stores/date'
const taskStore = useTaskStore()
const dateStore = useDateStore()
import { getAuth } from 'firebase/auth'

const props = defineProps<{
  task: ITask
}>()

const tasks = computed(() => taskStore.tasks)

const filteredTasks = computed(() => {
  return tasks.value.filter((task) => task.plannedDate === dateStore.formattedDate)
})

const editTask = (task: ITask) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.task.isEditing = true

}

const saveTask = (task: ITask) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.task.isEditing = false
  taskStore.updateTask(props.task)
}

const deleteTask = (task: ITask) => {
  taskStore.deleteTask(props.task)
  console.log('deleted')
}
</script>

<style>
.task-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  margin-left: 0;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: background-color 1s;
  padding: 15px;
  width: 90%;
}


.task-container:hover {
  background-color: #f9eeff;

}

.task-edit {
  display: flex;
  flex-direction: column;
  background-color: rgba(147, 147, 147, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-content: start;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 0;
}

input[type='checkbox'] {
  -webkit-appearance: none;
  appearance: none;
  background-color: rgba(147, 147, 147, 0.2);
  width: 21px;
  height: 21px;
  border: 1px solid black;
  margin-right: 10px;
}

input[type='checkbox']:checked {
  background-color: green;
}

.isDone {
  width: 21px;
}

.range-input {
  height: 50px;
  background-color: black;
}

input[type="range"] {
  accent-color: #6528F7;
}


.save-delete-btn {
  height: 5vh;
  width: 15vh;
  border: 0 solid rgba(3, 3, 3, 0.05);
  border-radius: 4px;
  background-color: rgba(3, 3, 3, 0.05);
  margin: 20px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s;

}

.save-delete-btn:hover {
  background-color: #f9eeff;

}

.save-delete-cntr {
  display: flex;
}

.range-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px
}
</style>