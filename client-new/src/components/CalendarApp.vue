<template>
    <div class="calendar-container">
        <div
            class="prev-day"
            @click="prvClick()"
        >
            <h5>{{ formPrevDay.value }}</h5>
            <div class="arrowL-container">
                <h2 id="arrow-icon">⮞
                </h2>
            </div>

        </div>
        <div id="date-div">
            <h4>{{ formattedDate }}</h4>
        </div>
        <div
            c
            lass="next-day"
            @click="nxtClick()"
        >
            <h5> {{ formNextDay.value }}</h5>
            <div class="arrowR-container">
                <h2>
                    ⮞
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { subDays, addDays } from 'date-fns'
import { reactive } from 'vue'
import { useDateStore } from '@/stores/date'
import { storeToRefs } from 'pinia'


const store = useDateStore()

const { date, formattedDate } = storeToRefs(store)

let nextDay = addDays(new Date(), 1)

let formNextDay = reactive({
    value: format(nextDay, 'dd-MMM-yyyy')
})
let prevDay = subDays(new Date(), 1)

let formPrevDay = reactive({
    value: format(prevDay, 'dd-MMM-yyyy')
})

const nxtClick = () => {
    let newDate = addDays(date.value, 1)
    date.value = newDate
    formattedDate.value = format(newDate, 'dd-MMM-yyyy')
    nextDay = addDays(nextDay, 1)
    formNextDay.value = format(nextDay, 'dd-MMM-yyyy')
    prevDay = addDays(prevDay, 1)
    formPrevDay.value = format(prevDay, 'dd-MMM-yyyy')
}
const prvClick = () => {
    let newDate = subDays(date.value, 1)
    date.value = newDate
    formattedDate.value = format(newDate, 'dd-MMM-yyyy')
    nextDay = subDays(nextDay, 1)
    formNextDay.value = format(nextDay, 'dd-MMM-yyyy')
    prevDay = subDays(prevDay, 1)
    formPrevDay.value = format(prevDay, 'dd-MMM-yyyy')
}

</script>

<style scoped>
.calendar-container {
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: space-between;
    border: 2px groove rgba(141, 141, 141, 0.2);
    border-top: 0;
    border-top-color: rgba(141, 141, 141, 0);
    border-left: 0;
    border-right: 0;
}

button {
    background-color: rgba(255, 255, 255, 0.1);
    width: 50px;
    margin-bottom: 10px;
    margin-left: 10px;
    border: none;
}

#date-div {
    display: flex;
    align-items: center;
}

#arrow-icon {
    transform: scale(-1, 1);

}

.arrowR-container {
    display: flex;
    justify-content: center;
}

.arrowL-container {
    display: flex;
    justify-content: center;
}

.next-day h5 {
    margin-right: 5px;
}

.prev-day h5 {
    margin-left: 5px;
}
</style>