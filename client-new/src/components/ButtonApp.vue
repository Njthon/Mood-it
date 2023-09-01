<template>
    <button
        @click="onClick()"
        :style="{ background: color }"
        class="btn"
    >
        Create
    </button>
</template>

<script setup lang="ts">

const emit = defineEmits(['btn-click'])

defineProps<{
    color: string,
}>()

const onClick = () => {
    emit('btn-click')
}
</script>

<style scoped>
.btn {
    display: inline-block;
    background: #000;
    color: #fff;
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
</style>
