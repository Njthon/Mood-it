import { defineStore } from 'pinia'
import axios from 'axios'
import type { ITask } from "../types/Task"
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc,
    onSnapshot, query, where,
    orderBy, serverTimestamp, getDoc,
    updateDoc
} from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
import { getAuth } from 'firebase/auth'



interface ITaskStoreState {
    tasks: ITask[]
}

export default defineStore('task-store', {
    state: (): ITaskStoreState => {
        return {
            tasks: [],
        }
    },
    actions: {
        async addTask(title: string, text: string, scoring: string, plannedDate: string) {
            try {
                const db = getFirestore()
                const colRef = collection(db, 'tasks')

                addDoc(colRef, {
                    title: title,
                    text: text,
                    scoring: scoring,
                    plannedDate: plannedDate,
                    createdAt: serverTimestamp()
                })
            } catch (error) {
                console.error(error)
            }
        },

        async fetchTasks() {
            try {
                const db = getFirestore()
                const colRef = collection(db, 'tasks')
                const q = query(colRef, orderBy('createdAt'))

                onSnapshot(colRef, (snapshot) => {
                    this.tasks = snapshot.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id } as ITask
                        console.log(this.tasks)

                    })
                })
            } catch (error) {
                console.error('cannot fetch without a ball', error)
            }
        },
        async fetchTask(task: ITask) {
            try {
                const response = await axios.get(`api/tasks/${task.id}`)
                const data = response.data
                this.tasks = [...this.tasks, data]
            } catch (error) {
                console.error(error)
            }
        }, async deleteTask(task: ITask) {
            const db = getFirestore()
            const docRef = doc(db, 'tasks', task.id)

            deleteDoc(docRef)
                .then(() => {
                })
        },
        async updateTask(task: ITask) {
            try {
                const db = getFirestore()

                const docRef = doc(db, 'tasks', task.id)

                await updateDoc(docRef, {
                    title: task.title,
                    text: task.text
                })
            } catch (error) {
                console.error(error)
            }
        }
    }
})