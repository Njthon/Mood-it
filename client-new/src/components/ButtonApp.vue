<template>
    <footer>
        <button
            @click="onClick()"
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
    border: 2px black solid;
    border-radius: 10px;
    background-color: #5ce5e1;
    margin: 5px 5px 5px 0;
    padding: 2px;
    width: 50%;
    height: 50px;
    font-weight: 500;

}

.btn:hover {
    filter: brightness(150%);
    transition: all 0.5s;
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
    text-align: center;
}
</style>
