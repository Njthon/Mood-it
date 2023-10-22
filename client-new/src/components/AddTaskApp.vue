<!-- eslint-disable vue/no-mutating-props -->
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
            <label for="pleasure">Pleasure</label>
            <input
                type="range"
                v-model="scoring.pleasure"
                name="pleasure"
                min="1"
                max="3"
                step="1"
            />
        </div>
        <div class="form-control">
            <label for="stress">Stress</label>
            <input
                type="range"
                v-model="scoring.stress"
                name="stress"
                min="1"
                max="3"
                step="1"
            />
        </div>
        <div class="form-control">
            <label for="time">Time</label>
            <input
                type="range"
                v-model="scoring.time"
                name="time"
                min="1"
                max="3"
                step="1"
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
import { ref, watch } from 'vue'
import useTaskStore from '@/stores/useTaskStore'

const text = ref('')
const title = ref('')
const scoring = ref({
    pleasure: 1,
    stress: 1,
    time: 1
})

const plannedDate = ref('')

const taskStore = useTaskStore()

const submitForm = () => {
    console.log(title.value, text.value, scoring.value, plannedDate.value)
    taskStore.addTask(title.value, text.value, scoring.value, plannedDate.value)
}

defineExpose({
    submitForm
})

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

.form-control input[type="range"] {
    width: 100%;
    margin: 5px 0;
}

.form-control span {
    display: inline-block;
    font-size: 17px;
    margin-left: 10px;
    min-width: 30px;
}
</style>