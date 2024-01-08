<template>
    <div class="chat-app-container">
        <div class="chat-container">
            <div> --Chat-- </div>
            <div>
                <h4>{{ chatStore.chatRoom.createChatName }}</h4>
            </div>
            <div>
                <h4>{{ chatStore.joinChatName }}</h4>
            </div>
            <h4>Messages:</h4>
            <div
                class="messages-history"
                ref="messagesContainer"
            >
                <div
                    v-for="(message, index) in chatStore.currentChatRoom?.messages"
                    :key="message.id"
                >
                    {{ authStore.user?.displayName }} {{ message.messages }}
                    <h6> {{ message.timestamp?.toDate().toLocaleString() }}</h6>
                </div>
            </div>
        </div>
        <form class="chat-input">
            <input
                type="text"
                v-model="chatStore.messageInput"
                name="messages"
                placeholder="write something..."
            >
            <button @click.prevent="chatStore.SendMessage()">Send</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import useChatStore from '@/stores/chat'
import { onMounted, watch, nextTick, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const chatStore = useChatStore()
const messagesContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    chatStore.ListenChanges()
    // document.getElementsByClassName("chat-app-container")[0].scroll({

    //     top: 2000000,
    //     left: 0,
    //     behavior: "smooth",
    // })
    // document.getElementsByClassName("chat-container")[0].scroll({
    //     top: 2000000,
    //     left: 0,
    //     behavior: "smooth",
    // })
})



watch(() => chatStore.currentChatRoom?.messages, async (messages) => {
    await nextTick()
    messagesContainer.value?.scroll &&
        messagesContainer.value?.scroll({
            top: 2000000,
            left: 0,
            behavior: 'smooth',
        })
})
</script>

<style>
.chat-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    font-size: medium;


}

.messages-history h6 {
    font-weight: normal;
    font-size: medium;

}

.chat-app-container {
    display: flex;
    flex-direction: column;

}
</style>