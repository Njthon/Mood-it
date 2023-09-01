<template>
    <footer>
        <ButtonApp
            @btn-click="$emit('toggle-add-task')"
            :text="showAddTask ? 'Close' : 'AddTask'"
            :color="showAddTask ? 'red' : '#1ab3cc'"
        />
    </footer>
</template>

<script setup lang="ts">
import ButtonApp from './ButtonApp.vue'

defineProps<{
    showAddTask: boolean
}>()
</script>
<style scoped>
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