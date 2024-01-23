<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="chat-login-container">
        <ResumeApp v-if="navStore.toggleResume" />
        <div v-else-if="navStore.toggleMoodIt">
            <h3>Someday</h3>
            <div class="chat-app-container">
                <div>
                    <TransitionGroup name="list">

                        <div
                            class="tasks"
                            v-for="task in filteredTasks"
                            :key="task.id"
                        >
                            <div>
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
                    </TransitionGroup>
                </div>
            </div>
        </div>
        <AboutMoodItApp v-else />
    </div>
</template>

<script setup lang="ts">
import CalendarApp from "./CalendarApp.vue"
import useTaskStore from '@/stores/useTaskStore'
import useNavStore from '@/stores/navbar'
import { computed } from 'vue'
import { useDateStore } from '@/stores/date'
import { Fireapp } from '@/main'
import { getFirestore } from "firebase/firestore"
import { ref } from "vue"
import CalendarTasks from "./CalendarTasks.vue"
import ResumeApp from "./ResumeApp.vue"
import AboutMoodItApp from "./AboutMoodItApp.vue"

const showCalendarApp = ref(false)
const taskStore = useTaskStore()
const navStore = useNavStore()
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

.task-container h3 {
    font-weight: normal;
}

.task-container p {
    display: flex;
    font-size: smaller;
}

.scoring-inputs {
    width: 12px;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 1px
}

.scoring-container {
    display: flex;
    width: 48px;
}

.scoring-text {
    width: 50px;
    font-size: smaller;
}

.task-text {
    flex-grow: 3;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>