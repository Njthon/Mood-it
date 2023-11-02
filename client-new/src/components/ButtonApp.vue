<template>
    <footer>
        <button
            @click="onClick()"
            :style="{ background: color }"
            class="btn"
        >
            {{ buttonText }}
        </button>
    </footer>
</template>

<script setup lang="ts">
import useTaskStore from '@/stores/useTaskStore'
import { computed } from 'vue'

const taskStore = useTaskStore()

const color = computed(() => {
    return taskStore.isEditedTaskOpen ? 'rgba(0, 146, 232, 0.2)' : 'rgb(0, 146, 232)'
})

const buttonText = computed(() => {
    return taskStore.isEditedTaskOpen ? "Save" : "Create"
})

const onClick = () => {
    if (taskStore.isEditedTaskOpen) {
        if (taskStore.editedTask.id) {
            taskStore.updateTask()
        } else {
            taskStore.createTask()
        }
    } else {
        taskStore.resetNewTask()
    }
    taskStore.isEditedTaskOpen = !taskStore.isEditedTaskOpen
}
</script>

<style scoped>
.btn {
    display: inline-block;
    color: #ffffff;
    border: 1px black solid;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    width: 100%;
    height: 70px;
    z-index: 4;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.98);
}

.btn-block {
    display: block;
    width: 100%;
}

a {
    color: #333;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 30px;
    text-align: center;
}
</style>
