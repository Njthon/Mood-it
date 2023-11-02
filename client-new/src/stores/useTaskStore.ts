import { defineStore } from 'pinia'
import axios from 'axios'
import type { ITask, INewtask } from "../types/Task"
import {
    getFirestore, collection,
    addDoc, deleteDoc, doc,
    onSnapshot, query, where,
    orderBy, serverTimestamp,
    updateDoc
} from 'firebase/firestore'
import { Fireapp } from '@/main'
import { getAuth } from 'firebase/auth'


interface ITaskStoreState {
    tasks: ITask[]
    editedTask: ITask | INewtask
    isEditedTaskOpen: boolean
    isXClicked: boolean
}

export default defineStore('task-store', {
    state: (): ITaskStoreState => {
        return {
            tasks: [],
            editedTask: {
                title: "",
                text: "",
                scoring: {
                    pleasure: 1,
                    stress: 1,
                    time: 1
                },
                plannedDate: "",
                isDone: false
            },
            isEditedTaskOpen: false,
            isXClicked: false,
        }
    },
    actions: {
        resetNewTask() {
            this.editedTask = {
                title: "",
                text: "",
                scoring: {
                    pleasure: 1,
                    stress: 1,
                    time: 1
                },
                plannedDate: "",
                isDone: false
            }
        },
        openEditTask(task: ITask) {
            this.editedTask = {
                ...task
            }
            this.isEditedTaskOpen = true
        },
        clickX() {
            this.isXClicked = true
            this.isEditedTaskOpen = false
            this.isXClicked = !this.isXClicked

        },
        async createTask() {
            try {
                const db = getFirestore(Fireapp)
                const colRef = collection(db, 'tasks')
                const auth = getAuth()
                const user = auth.currentUser

                if (user) {
                    const userId = user.uid
                    addDoc(colRef, {
                        title: this.editedTask.title,
                        text: this.editedTask.text,
                        scoring: this.editedTask.scoring,
                        plannedDate: this.editedTask.plannedDate,
                        createdAt: serverTimestamp(),
                        userId: userId,
                    })
                }
            } catch (error) {
                console.error(error)
            }
        },
        async fetchTasks() {
            try {
                const db = getFirestore(Fireapp)
                const colRef = collection(db, 'tasks')
                const auth = getAuth()
                const user = auth.currentUser

                if (user) {
                    const userId = user.uid
                    const q = query(colRef, where('userId', '==', userId), orderBy('createdAt'))

                    onSnapshot(q, (snapshot) => {
                        this.tasks = snapshot.docs.map((doc) => {
                            const data = doc.data()
                            data.id = doc.id
                            return data as ITask
                        })
                    })
                }
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
            const db = getFirestore(Fireapp)
            const docRef = doc(db, 'tasks', task.id)

            deleteDoc(docRef)
                .then(() => {
                    console.log("deleted")
                })
        },
        async updateTask() {
            try {
                const db = getFirestore(Fireapp)

                const docRef = doc(db, 'tasks', this.editedTask.id)

                await updateDoc(docRef, {
                    title: this.editedTask.title,
                    text: this.editedTask.text
                })
            } catch (error) {
                console.error(error)
            }
        }
    }
})