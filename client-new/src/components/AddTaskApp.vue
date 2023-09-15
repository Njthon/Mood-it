<template>
    <form
        class="add-form"
        @submit.prevent="submitForm"
    >
        <div class="form-control">
            <label for="title">Task</label>
            <input
                type="text"
                v-model="title"
                name="title"
                placeholder="Add Task"
            />
        </div>
        <div class="form-control">
            <label for="text">Description</label>
            <input
                type="text"
                v-model="text"
                name="text"
                placeholder="Add Info"
            />
        </div>
        <div class="form-control">
            <label for="text">pleaseure</label>
            <input
                type="number"
                v-model="scoring"
                name="text"
                placeholder="Add Info"
            />
            <label for="text">stress</label>
            <input
                type="nu,ber"
                v-model="scoring"
                name="text"
                placeholder="Add Info"
            />
            <label for="text">time</label>
            <input
                type="text"
                v-model="scoring"
                name="text"
                placeholder="Add Info"
            />
        </div>
        <input
            type="submit"
            value="Save Task"
            class="btn btn-block"
        />
        <div class="form-control">
            <label for="title">Planned Date</label>
            <input
                type="date"
                v-model="plannedDate"
                name="date"
                placeholder="add a date"
                required
            />
            <div
                v-if="!plannedDate"
                class="error"
            >Planned date is required</div>
        </div>
        <input
            type="submit"
            value="Save Task"
            class="btn btn-block"
        />
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useTaskStore from '@/stores/useTaskStore'

const text = ref('')
const title = ref('')
const scoring = ref('')
const plannedDate = ref('')

const taskStore = useTaskStore()

const submitForm = () => {
    taskStore.addTask(title.value, text.value, scoring.value, plannedDate.value)
}
</script>


<style scoped>
.add-form {
    margin-bottom: 40px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>