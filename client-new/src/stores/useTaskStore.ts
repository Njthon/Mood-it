import { defineStore } from 'pinia'
import axios from 'axios'
import type { ITask } from '@/types/Task'

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
        async addTask(task: ITask) {
            try {
                const response = await axios.post(`api/tasks`, task)
                const data = response.data
                this.tasks = [...this.tasks, data]
            } catch (error) {
                console.error('OMG an error: ', error)
            }
        },
        async fetchTasks() {
            try {
                const response = await axios.get(`api/tasks`)
                this.tasks = response.data
                return response.data
            } catch (error) {
                console.error('cannot fetch without a ball', error)
            }
        },
        async fetchTask(task: ITask) {
            try {
                const response = await axios.get(`api/tasks/${task._id}`)
                const data = response.data
                this.tasks = [...this.tasks, data]
            } catch (error) {
                console.error(error)
            }
        }, async deleteTask(task: ITask) {
            if (confirm("Are you sure?")) {
                try {
                    await axios.delete(`api/tasks/${task._id}`)
                    this.tasks = this.tasks.filter((task) => task._id !== task._id)
                } catch (error) {
                    console.error(error)
                }
            }
        },
        async updateTask(task: ITask) {
            try {
                const response = await axios.put(`api/tasks/${task._id}`, task)
                const updatedTask = response.data

                this.tasks = this.tasks.map((t) =>
                    t._id === task._id ? updatedTask : t
                )
            } catch (error) {
                console.error(error)
            }


        }
    }
})