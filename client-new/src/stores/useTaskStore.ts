import { defineStore } from 'pinia'
import axios from 'axios'
import type { ITask, IScoring } from "../types/Task"
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc,
    onSnapshot, query, where,
    orderBy, serverTimestamp, getDoc,
    updateDoc
} from 'firebase/firestore'
import { Fireapp } from '@/main'
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

        async addTask(title: string, text: string, scoring: IScoring, plannedDate: string) {
            try {
                const db = getFirestore(Fireapp)
                const colRef = collection(db, 'tasks')
                const auth = getAuth()
                const user = auth.currentUser

                if (user) {
                    const userId = user.uid

                    addDoc(colRef, {
                        title: title,
                        text: text,
                        scoring: scoring,
                        plannedDate: plannedDate,
                        createdAt: serverTimestamp(),
                        userId: userId,
                    })
                }
            } catch (error) {
                console.error(error)
            }
        },
        async changeText(text: string) {

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
                })
        },
        async updateTask(task: ITask) {
            try {
                const db = getFirestore(Fireapp)

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