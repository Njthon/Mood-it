<template>
    <div class="chat-login-container">
        <ChatApp v-if="chatStore.currentChatRoom" />
        <div
            class="chat-login-form"
            v-else
        >
            <form>
                <div class="chat-room-div">
                    <h4>Create a Chat Room</h4>
                    <input
                        type="text"
                        v-model="chatStore.chatRoom.createChatName"
                        name="chatName"
                        placeholder="Insert chat room name"
                    >
                    <button @click.prevent="chatStore.CreateChatRoom()">Create Room</button>
                </div>
            </form>
            <form>
                <div class="chat-room-div">
                    <h4>Join a Room</h4>
                    <input
                        type="text"
                        v-model="chatStore.joinChatName"
                        name="chatName"
                        placeholder="Insert chat room name"
                    >
                    <button @click.prevent="chatStore.JoinChatRoom(chatStore.joinChatName)">Join Room</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup lang="ts">
import useChatStore from '@/stores/chat'
import ChatApp from './ChatApp.vue'

const chatStore = useChatStore()
</script>

<style>
.chat-login-container button {
    border: 2px black solid;
    border-radius: 10px;
    background-color: #ff66d1;
    margin: 5px 5px 5px 0;
    padding: 2px;
    width: 50%;
    height: 50px;
    font-weight: 500;
}

.chat-login-container input {
    border-bottom: 3px black solid;
    background-color: #ff66d1;
    margin: 5px;
    padding: 2px;
    font-size: medium;

}

.chat-login-container input:focus {
    border-bottom: 1px black solid;
    background-color: #ff66d1;
    outline: none;
}

.chat-login-container input:hover {
    border-bottom: 2px black solid;
    background-color: #ff66d1;
    outline: none;
}

.chat-login-container button:hover {
    filter: brightness(150%);
    transition: all 0.5s;
}


.chat-login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.chat-room-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chat-room-div h4 {
    margin-bottom: 2vw;
}
</style>