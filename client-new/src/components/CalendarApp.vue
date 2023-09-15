<template>
    <div class="calendar-container">
        <button
            class="div-prev-day"
            @click="prvClick()"
        >
            <h4>{{ formPrevDay.value }}</h4>
            <h2 id="arrow-icon">⮞
            </h2>
        </button>
        <div id="date-div">{{ formattedDate }}</div>
        <button
            class="div-next-day"
            @click="nxtClick()"
        >
            <h4 class="next-date"> {{ formNextDay.value }}</h4>
            <h2>
                ⮞
            </h2>
        </button>
    </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { ref, watchEffect } from 'vue'
import { subDays, addDays } from 'date-fns'
import { reactive } from 'vue'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"

const date = reactive({ value: new Date() })

let formattedDate = ref(format(date.value, 'dd/MM/yyyy')
)
let nextDay = addDays(new Date(), 1)

let formNextDay = reactive({
    value: format(nextDay, 'dd/MM/yyyy')
})
let prevDay = subDays(new Date(), 1)

let formPrevDay = reactive({
    value: format(prevDay, 'dd/MM/yyyy')
})
const nxtClick = () => {
    let newDate = addDays(date.value, 1)
    date.value = newDate
    formattedDate.value = format(newDate, 'dd/MM/yyyy')
    nextDay = addDays(nextDay, 1)
    formNextDay.value = format(nextDay, 'dd/MM/yyyy')
    prevDay = addDays(prevDay, 1)
    formPrevDay.value = format(prevDay, 'dd/MM/yyyy')
}
const prvClick = () => {
    let newDate = subDays(date.value, 1)
    date.value = newDate
    formattedDate.value = format(newDate, 'dd/MM/yyyy')
    nextDay = subDays(nextDay, 1)
    formNextDay.value = format(nextDay, 'dd/MM/yyyy')
    prevDay = subDays(prevDay, 1)
    formPrevDay.value = format(prevDay, 'dd/MM/yyyy')
}

// watchEffect(async () => {
//     const db = getFirestore()
//     const q = query(collection(db, "tasks"), where("plannedDate", "==", formattedDate.value))
//     const querySnapshot = await getDocs(q)
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data())
//     })
// });


</script>

<style scoped>
.calendar-container {
    display: flex;
    height: 60px;
    width: 100%;
    background-color: #1ab3cc;
    justify-content: space-between;
}

button {
    background-color: #1ab3cc;
    width: 50px;
    margin: 10px;
    border: none;
}

#date-div {
    display: flex;
    align-items: center;
}

#arrow-icon {
    transform: scale(-1, 1);

}
</style>