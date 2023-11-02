import { defineStore } from 'pinia'
import { ref } from 'vue'
import format from 'date-fns/format'

export const useDateStore = defineStore('formattedDate', () => {
    const date = ref(new Date())
    const formattedDate = ref(format(date.value, 'dd-MMM-yy'))
    return { date, formattedDate }
})