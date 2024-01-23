import { defineStore } from 'pinia'
import axios from 'axios'
import type { ITask, INewtask } from "../types/Task"
import {
    getFirestore, collection,
    addDoc, deleteDoc, doc,
    onSnapshot, query, where,
    orderBy, serverTimestamp,
    updateDoc,
    arrayUnion,
    getDocs,
    setDoc
} from 'firebase/firestore'
import { Fireapp } from '@/main'
import { getAuth } from 'firebase/auth'
import { ref } from 'vue'
import type { DocumentData } from '@firebase/firestore'

export default defineStore('chat-store', {
    state: () => {
        return {
            chatRoom: {
                createChatName: "",
                messages: [],
            },
            messageInput: "",
            joinChatName: "",
            currentChatRoom: ref(null as DocumentData | null),
        }
    },
    actions: {
        async CreateChatRoom() {
            const db = getFirestore(Fireapp)
            const chatRoomCollection = collection(db, "chatRoom")
            const auth = getAuth()
            const user = auth.currentUser


            const newChatRoom = {
                createChatName: this.chatRoom.createChatName,
                messages: this.chatRoom.messages,
                users: []
            }

            const existingChatRooms = await getDocs(
                query(chatRoomCollection, where('createChatName', '==', newChatRoom.createChatName))
            )

            if (!existingChatRooms.empty) {
                console.error('Chat room with this name already exists')
                return
            }


            if (user) {
                const userId = user.uid
                addDoc(chatRoomCollection, {
                    createChatName: this.chatRoom.createChatName,
                    messages: this.chatRoom.messages,
                    users: []
                })
                    .then((docRef) => {
                        this.currentChatRoom = {
                            id: docRef.id,
                            createChatName: this.chatRoom.createChatName,
                            messages: this.chatRoom.messages,
                            users: []
                        }
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error)
                    })
            }
            console.log(newChatRoom.messages.length)
            this.currentChatRoom = newChatRoom

        },
        async JoinChatRoom(joinChatName: string): Promise<void> {
            if (!joinChatName) {
                console.error('Invalid chat room name:', joinChatName)
                return           //Update just the id of the chatRoom, to avoid re-rendering
            }

            const db = getFirestore(Fireapp)
            const chatRoomCollection = collection(db, 'chatRoom')

            try {
                const querySnapshot = await getDocs(
                    query(chatRoomCollection, where('createChatName', '==', joinChatName))
                )

                if (querySnapshot.empty) {
                    console.log(`No such document with: ${joinChatName}`)
                    return
                }

                const doc = querySnapshot.docs[0]
                const chatRoomData = doc.data() as DocumentData
                this.currentChatRoom = {
                    id: doc.id,           //Update just the id of the chatRoom, to avoid re-rendering

                }

            } catch (error) {
                console.error("Error joining chat room: ", error)
                throw error
            }
        },

        async SendMessage() {
            try {
                await this.JoinChatRoom(this.joinChatName)   //  TO Dooooo

                const db = getFirestore(Fireapp)
                const auth = getAuth()
                const user = ref(auth.currentUser)

                if (this.messageInput === "" || this.messageInput === null || !this.currentChatRoom) {
                    return
                }

                const chatRoomId = this.currentChatRoom ? this.currentChatRoom.id : null

                const newMessage = {
                    messages: this.messageInput,
                    timestamp: serverTimestamp(),
                    userId: user.value?.uid
                }

                const chatRoomDocRef = doc(db, 'chatRoom', chatRoomId)
                const messagesCollectionRef = collection(chatRoomDocRef, 'messages')

                await addDoc(messagesCollectionRef, newMessage)
                console.log("Message sent")
                this.messageInput = ""
            } catch (error) {
                console.error("Error sending message: ", error)
            }
        },

        ListenChanges() {
            const db = getFirestore(Fireapp)

            if (this.currentChatRoom && this.currentChatRoom.id) {
                const chatRoomDoc = doc(db, 'chatRoom', this.currentChatRoom.id)
                const messagesCollection = collection(db, 'chatRoom', this.currentChatRoom.id, 'messages')

                onSnapshot(messagesCollection, (snapshot) => {
                    const preMessages = snapshot.docs.map(doc => doc.data())
                    const messages = preMessages.sort((a, b) => {
                        return a.timestamp - b.timestamp
                    })
                    console.log(messages.length)
                    /* this.currentChatRoom.messages = messages*/
                })
            }
        }
    }
}
)