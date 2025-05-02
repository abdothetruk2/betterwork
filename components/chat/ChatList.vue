<template>
  <div class="fixed bottom-0 right-4 w-72 bg-white dark:bg-gray-800 rounded-t-lg shadow-xl border border-gray-200 dark:border-gray-700">
    <!-- Header -->
    <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">Messages</h3>
      <button @click="isMinimized = !isMinimized" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
        <Icon :name="isMinimized ? 'heroicons:chevron-up' : 'heroicons:minus'" class="h-5 w-5" />
      </button>
    </div>

    <!-- Chat List -->
    <div v-show="!isMinimized" class="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
      <div v-for="chat in chats" :key="chat.id" 
           class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
           @click="openChat(chat)">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <img :src="chat.avatar" :alt="chat.name" class="h-10 w-10 rounded-full" />
            <span v-if="chat.online" class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-success-500 ring-2 ring-white dark:ring-gray-800"></span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
              {{ chat.name }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
              {{ chat.lastMessage }}
            </p>
          </div>
          <div class="flex flex-col items-end">
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ chat.time }}</p>
            <span v-if="chat.unread" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {{ chat.unread }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Chats -->
    <div class="fixed bottom-0 right-80 flex space-x-4">
      <ChatWindow 
        v-for="chat in activeChats" 
        :key="chat.id"
        :recipient="chat"
        @close="closeChat(chat)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMinimized = ref(false);
const activeChats = ref([]);

const chats = ref([
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    lastMessage: 'Thanks for the update!',
    time: '2m ago',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    lastMessage: 'The project is coming along nicely',
    time: '1h ago',
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    lastMessage: 'Let me know when you're free to discuss',
    time: '3h ago',
    unread: 1,
    online: false,
  },
]);

const openChat = (chat) => {
  if (!activeChats.value.find(c => c.id === chat.id)) {
    activeChats.value.push(chat);
  }
};

const closeChat = (chat) => {
  activeChats.value = activeChats.value.filter(c => c.id !== chat.id);
};
</script>