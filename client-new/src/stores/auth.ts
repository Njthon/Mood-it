import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import useTaskStore from '@/stores/useTaskStore'


export const useAuthStore = defineStore('auth-store', () => {
    const taskStore = useTaskStore()

    const auth = getAuth()
    const user = ref(auth.currentUser)

    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        taskStore.fetchTasks()

    })

    const logout = () => {
        signOut(auth)
            .then(() => {
                user.value = null
                console.log('User logged out')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const login = (email: string, password: string) => {
        setPersistence(auth, browserSessionPersistence)
        return signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                user.value = auth.currentUser
                console.log('User logged in')
            })
            .catch((error) => {
                console.error('Loggin error', error)
            })
    }

    const signUp = (email: string, password: string) => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                console.log('User signed up:', credential.user)
            })
            .catch((error) => {
                console.error('Signup error:', error)
            })
    }

    return { user, login, logout, signUp }
})