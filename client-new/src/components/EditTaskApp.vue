<template>
    <div>
        <form class="update-form">
            <div class="form-control">
                <label for="title">Task</label>
                <input
                    type="text"
                    v-model="task.title"
                    name="title"
                />
            </div>
            <div class="form-control">
                <label for="text">Description</label>
                <input
                    type="text"
                    v-model="task.text"
                    name="text"
                >
            </div>
            <input
                type="submit"
                value="Save Task"
                class="btn btn-block"
            />
        </form>
        <button>Update</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITask } from "../types/Task"

const props = defineProps<{
    task: ITask | undefined
}>()

let task = props.task || { title: '', text: '' }
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