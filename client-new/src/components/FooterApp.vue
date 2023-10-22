<template>
    <footer>
        <ButtonApp
            @btn-click="$emit()"
            :color="showAddTask ? 'red' : 'rgba(255, 255, 255, 0.1)'"
        />
    </footer>
</template>

<script setup lang="ts">
import ButtonApp from './ButtonApp.vue'

defineProps<{
    showAddTask: boolean
}>()
</script>
<style scoped></style>