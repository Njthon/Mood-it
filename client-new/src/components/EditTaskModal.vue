<template>
    <form
        class="add-form"
        @submit.prevent=""
    >
        <div class="close-btn-add-task-container">
            <div class="close-btn">
                <div @click="taskStore.clickX()">
                    <h2>X</h2>
                </div>
            </div>
            <div class="add-task">
                <label for="title"></label>
                <input
                    type="text"
                    v-model="taskStore.editedTask.title"
                    name="title"
                    placeholder="Add Task"
                />
            </div>
        </div>
        <div class="scoring-div">
            <div class="pst-div">
                <h5>Pleasure<h6>of doing it</h6>
                </h5>

                <div class="inputs">
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.pleasure >= 1 }"
                    >
                        <input
                            type="radio"
                            v-model="taskStore.editedTask.scoring.pleasure"
                            value="1"
                            name="pleasure"
                        />
                    </div>
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.pleasure >= 2 }"
                    >
                        <input
                            type="radio"
                            value="2"
                            v-model="taskStore.editedTask.scoring.pleasure"
                            name="pleasure"
                        />
                    </div>
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.pleasure >= 3 }"
                    >
                        <input
                            type="radio"
                            value="3"
                            v-model="taskStore.editedTask.scoring.pleasure"
                            name="pleasure"
                        />
                    </div>
                </div>
            </div>
            <div class="pst-div">
                <h5>Stress<h6>about it</h6>
                </h5>

                <div class="inputs">
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.stress >= 1 }"
                    >
                        <input
                            type="radio"
                            v-model="taskStore.editedTask.scoring.stress"
                            value="1"
                            name="stress"
                        />
                    </div>
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.stress >= 2 }"
                    >
                        <input
                            type="radio"
                            value="2"
                            v-model="taskStore.editedTask.scoring.stress"
                            name="stress"
                        />
                    </div>
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.stress >= 3 }"
                    >
                        <input
                            type="radio"
                            value="3"
                            v-model="taskStore.editedTask.scoring.stress"
                            name="stress"
                        />
                    </div>
                </div>
            </div>
            <div class="pst-div">
                <h5>Time<h6>to do it</h6>
                </h5>

                <div class="inputs">
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.time >= 1 }"
                    >
                        <input
                            type="radio"
                            v-model="taskStore.editedTask.scoring.time"
                            value="1"
                            name="time"
                        />
                    </div>
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.time >= 2 }"
                    >
                        <input
                            type="radio"
                            value="2"
                            v-model="taskStore.editedTask.scoring.time"
                            name="time"
                        />
                    </div>
                    <div
                        class="square"
                        :class="{ active: taskStore.editedTask.scoring.time >= 3 }"
                    >
                        <input
                            type="radio"
                            value="3"
                            v-model="taskStore.editedTask.scoring.time"
                            name="time"
                        />
                    </div>
                </div>
            </div>
        </div>
        <button @click="openPlannedDate">Add Plan Date</button>
        <div
            class="planned-date-div"
            v-show="isPlannedDate"
        >
            <input
                class="date"
                type="date"
                v-model="inputDate"
                name="date"
                placeholder="add a date"
            />
        </div>
    </form>
</template>
  
<script setup lang="ts">
import useTaskStore from '@/stores/useTaskStore'
import { watch, ref } from 'vue'
import { format, parseISO } from 'date-fns'

const isPlannedDate = ref(false)

const taskStore = useTaskStore()

const inputDate = ref(taskStore.editedTask.plannedDate)

function openPlannedDate() {
    isPlannedDate.value = !isPlannedDate.value
}
watch(inputDate, (newDate) => {
    taskStore.editedTask.plannedDate = format(parseISO(newDate), 'dd-MMM-yyyy')
})
</script>
  
<style scoped>
.add-task {
    display: flex;
    justify-content: flex-start;
    transition: all 1s;
}

.add-task input {
    height: 30px;
    width: 200px;
    border-bottom: 3px black solid;
    background-color: #5ce5e1;
    margin: 5px;
    padding: 2px;
    outline: none;
    font-size: large;

}

.add-task input:focus {
    border-bottom: 1px black solid;
    background-color: #5ce5e1;
    outline: none;
}

.add-task input:hover {
    border-bottom: 2px black solid;
    background-color: #5ce5e1;
    outline: none;
}

.add-form {
    padding: 10px;
    padding-top: 0;
    overflow: auto;

    transition: all 1s;
}

.add-form button {
    border: 2px black solid;
    border-radius: 10px;
    background-color: #5ce5e1;
    margin: 5px 5px 5px 0;
    padding: 2px;
    width: 30%;
    font-weight: 500;
}

.planned-date-div {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

form button {
    margin: 25px;
    margin-bottom: 0;
    margin-top: 0;
}

.date {
    height: 40px;
    width: 100px;
    border: 1px black solid;
}

.close-btn {
    display: flex;
    justify-content: flex-end;
}

.inputs {
    display: flex;
    gap: 20px;
}

input[type="range"] {
    accent-color: #0092e8;

}

input[type="radio"] {
    appearance: none;
    width: 30px;
    height: 30px;

}

input[type="radio"]:checked {
    background: #0092e8;
    border: 1px solid #000;
    border-radius: 50%;

}

.square {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 0;
    display: inline-block;
    transition: all 0.5s;

}

.square.active {
    background: #0092e8;
    border-radius: 50%;

}

.pst-div {
    display: flex;
    justify-content: space-between;
    margin: 15px;
}

h6 {
    margin-left: 3px;
}

.close-btn-add-task-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

}
</style>