<!-- eslint-disable vue/no-parsing-error -->
<template>
  <SkillsApp v-if="navStore.toggleResume" />
  <div v-if="navStore.toggleMoodIt">
    <CalendarApp />
    <div
      v-for="task in filteredTasks"
      :key="task.id"
    >
      <div
        class="task-container"
        @click="taskStore.openEditTask(task)"
      >
        <div class="task-container-icons">
          <input
            class="isDone"
            type="checkbox"
            v-model="task.isDone"
            @click.stop
          />
          <button
            @click.stop="taskStore.deleteTask(task)"
            class="delete-btn"
          >🗑️</button>
        </div>
        <div class="task-text">{{ task.title }}</div>
        <div>
          <div class="pst-div">
            <p>
            <div class="scoring-text">
              Pleasure
            </div>
            <div class="scoring-container">
              <div
                class="scoring-inputs"
                v-for="n in Array.from({ length: task.scoring.pleasure }, (_, i) => i + 1)"
                :key="n"
              >
              </div>
            </div>
            </p>
          </div>
          <div class="pst-div">
            <p>
            <div class="scoring-text">Stress</div>
            <div class="scoring-container">
              <div
                class="scoring-inputs"
                v-for="n in Array.from({ length: task.scoring.stress }, (_, i) => i + 1)"
                :key="n"
              >
              </div>
            </div>
            </p>
          </div>
          <div class="pst-div">
            <p>
            <div class="scoring-text">Time</div>
            <div class="scoring-container">
              <div
                class="scoring-inputs"
                v-for="n in Array.from({ length: task.scoring.time }, (_, i) => i + 1)"
                :key="n"
              >
              </div>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FutureMoodItApp v-else-if="navStore.toggleConcept" />
</template>

<script setup lang="ts">
import useTaskStore from '@/stores/useTaskStore'
import { computed } from 'vue'
import { useDateStore } from '@/stores/date'
import CalendarApp from './CalendarApp.vue'
import SkillsApp from './SkillsApp.vue'
import useNavStore from '@/stores/navbar'
import FutureMoodItApp from './FutureMoodIt.app.vue'

const taskStore = useTaskStore()
const dateStore = useDateStore()
const navStore = useNavStore()
const filteredTasks = computed(() => {
  return taskStore.tasks.filter((task) => task.plannedDate === dateStore.formattedDate && task.title !== "")
})
</script>

<style>
.task-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 2px 20px;
  height: 67px;
  background-color: #f7f4f4;
  border: 2px solid black;
  border-radius: 8px;
  transition: background-color 1s;
  padding: 5px;
  width: 90%;
  overflow: auto;
  z-index: 1;
}

.tasks {
  position: relative;
  z-index: 1;
}

.tasks:before {
  content: "";
  background-image: linear-gradient(310deg, rgb(0, 0, 0) 11%, rgb(116, 116, 116) 84%);
  height: 100%;
  width: 90%;
  height: 100%;
  border-radius: 8px;
  border: 2px solid black;
  position: absolute;
  z-index: -4;
  transform: translate(23px, 4px);
}

.task-container:hover {
  /* transform: translate(12.5px, 12px); */


}

.task-container-icons {
  display: flex;
  margin-right: 25px;
}

.task-edit {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
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