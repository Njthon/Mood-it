<template>
    <header>
        <button
            class="show-someday"
            @click="showCalendarApp = false"
        >
            <h3>Someday</h3>
        </button>
        <button
            class="show-calendar"
            @click="showCalendarApp = true"
        >
            <h3>Calendar</h3>
        </button>
    </header>
    <div v-if="!showCalendarApp">
        <div
            class="tasks"
            v-show="!taskStore.isEditedTaskOpen"
            v-for="task in filteredTasks"
            :key="task.id"
        >
            <div
                class="task-container"
                @click="taskStore.openEditTask(task)"
            >{{ task.title }}<input
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
        </div>
    </div>
    <div v-if="showCalendarApp">
        <CalendarApp v-show="!taskStore.isEditedTaskOpen" />
        <div
            class="tasks"
            v-show="!taskStore.isEditedTaskOpen"
        >
            <TasksDashboard />
        </div>

    </div>
</template>

<script setup lang="ts">
import CalendarApp from "./CalendarApp.vue"
import useTaskStore from '@/stores/useTaskStore'
import { computed } from 'vue'
import { useDateStore } from '@/stores/date'
import { Fireapp } from '@/main'
import { getFirestore } from "firebase/firestore"
import { ref } from "vue"
import TasksDashboard from "./TasksDashboard.vue"

const showCalendarApp = ref(false)
const taskStore = useTaskStore()
const db = getFirestore(Fireapp)

const filteredTasks = computed(() => {
    return taskStore.tasks.filter((task) => task.plannedDate === "" && task.title !== "")
})

</script>

<style>
header {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 100%;
    border: 2px groove rgba(141, 141, 141, 0.2);
    border-top: 0;
    border-top-color: rgba(141, 141, 141, 0);
    border-left: 0;
    border-right: 0;
}

header button {
    flex: 1;
    text-align: center;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-bottom: 1px black solid;
}

.delete-btn {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.show-someday :hover {
    border-right: 1px solid black;
}

.show-calendar :hover {
    border-left: 1px solid black;

}
</style>