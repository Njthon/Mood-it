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
    <div
        v-if="showAddTask"
        class="container"
    >
        <AddTaskApp ref="addTaskRef" />
    </div>
</template>

<script setup lang="ts">
import AddTaskApp from './AddTaskApp.vue'
import { ref } from 'vue'

let buttonText = "Create"
const showAddTask = ref(false)
const addTaskRef = ref(null)

defineProps<{
    color: string
}>()

const onClick = () => {
    buttonText = buttonText === "Create" ? "Save" : "Create"
    console.log(addTaskRef.value)

    if (buttonText === "Save") {
        //@ts-ignore child is not typed
        addTaskRef.value?.submitForm()
        console.log(showAddTask.value)
    }
    showAddTask.value = !showAddTask.value


}
</script>

<style scoped>
.btn {
    display: inline-block;
    color: #000000;
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
