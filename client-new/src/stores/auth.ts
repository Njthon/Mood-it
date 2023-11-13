import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import {
    getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, signOut, signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import useTaskStore from '@/stores/useTaskStore'
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInAnonymously } from "firebase/auth"


export const useAuthStore = defineStore('auth-store', () => {
    const taskStore = useTaskStore()
    const isAnonymous = reactive({ value: false })

    const auth = getAuth()
    auth.languageCode = 'it'
    const user = ref(auth.currentUser)


    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        taskStore.fetchTasks()

    })

    const logout = () => {
        signOut(auth)
            .then(() => {
                user.value = null
                isAnonymous.value = false
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

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()

        return signInWithPopup(auth, provider)
            .then((result) => {
                user.value = result.user
                console.log('User logged in with Google')
            })
            .catch((error) => {
                console.error('Google login error', error)
            })
    }

    const loginWithFacebook = () => {
        const provider = new FacebookAuthProvider()
        return signInWithPopup(auth, provider)
            .then((result) => {
                user.value = result.user
                console.log('User logged in with Facebook')
            })
            .catch((error) => {
                console.error('Facebook login error', error)
            })
    }

    const loginWithGithub = () => {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
            .then((result) => {
                user.value = result.user
                console.log('User logged in with GitHub')
            })
            .catch((error) => {
                console.error('GitHub login error', error)
            })
    }

    const loginAnonymously = () => {
        signInAnonymously(auth)
            .then(() => {
                isAnonymous.value = true
                console.log('Ninja mode on!')
            })
            .catch((error) => {
                console.error('Ninja mode error')
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

    return { user, isAnonymous, login, logout, signUp, loginWithGoogle, loginWithFacebook, loginWithGithub, loginAnonymously }
})