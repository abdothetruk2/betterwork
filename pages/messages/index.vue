<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Communicate with your clients and freelancers</p>
        </div>

        <!-- Messages List -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Conversations List -->
          <div class="card">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white">Conversations</h2>
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  class="form-input pl-8 pr-4 py-2 text-sm"
                  v-model="searchQuery"
                />
                <Icon name="heroicons:magnifying-glass" class="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <div v-for="chat in filteredChats" :key="chat.id" 
                   class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                   :class="{ 'bg-primary-50 dark:bg-primary-900/20': selectedChat?.id === chat.id }"
                   @click="selectChat(chat)">
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
          </div>

          <!-- Chat Window -->
          <div class="lg:col-span-2">
            <div v-if="selectedChat" class="card h-[calc(100vh-12rem)]">
              <!-- Chat Header -->
              <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div class="flex items-center">
                  <img :src="selectedChat.avatar" :alt="selectedChat.name" class="h-8 w-8 rounded-full" />
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ selectedChat.name }}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ selectedChat.online ? 'Online' : 'Offline' }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Icon name="heroicons:phone" class="h-5 w-5" />
                  </button>
                  <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Icon name="heroicons:video-camera" class="h-5 w-5" />
                  </button>
                  <button class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Icon name="heroicons:ellipsis-vertical" class="h-5 w-5" />
                  </button>
                </div>
              </div>

              <!-- Chat Messages -->
              <div ref="messagesContainer" class="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
                <div v-for="(message, index) in selectedChat.messages" :key="index" 
                     :class="[message.sender === 'user' ? 'flex justify-end' : 'flex justify-start']">
                  <div :class="[
                    'max-w-[70%] rounded-lg px-4 py-2 break-words',
                    message.sender === 'user' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  ]">
                    <p class="text-sm">{{ message.text }}</p>
                    <p class="text-xs mt-1 opacity-70">{{ message.time }}</p>
                  </div>
                </div>
              </div>

              <!-- Chat Input -->
              <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                <form @submit.prevent="sendMessage" class="flex items-center space-x-2">
                  <button type="button" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Icon name="heroicons:paper-clip" class="h-5 w-5" />
                  </button>
                  <input
                    v-model="newMessage"
                    type="text"
                    placeholder="Type a message..."
                    class="flex-1 form-input rounded-full py-2"
                  />
                  <button 
                    type="submit" 
                    class="text-primary-500 hover:text-primary-600 disabled:opacity-50"
                    :disabled="!newMessage.trim()"
                  >
                    <Icon name="heroicons:paper-airplane" class="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            <div v-else class="card h-[calc(100vh-12rem)] flex items-center justify-center">
              <div class="text-center">
                <Icon name="heroicons:chat-bubble-left-right" class="h-12 w-12 text-gray-400 mx-auto" />
                <h3 class="mt-2 text-lg font-medium text-gray-900 dark:text-white">No conversation selected</h3>
                <p class="mt-1 text-gray-500 dark:text-gray-400">Choose a conversation to start messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

const searchQuery = ref('');
const selectedChat = ref(null);
const newMessage = ref('');
const messagesContainer = ref(null);

const chats = ref([
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    lastMessage: 'Thanks for the update!',
    time: '2m ago',
    unread: 2,
    online: true,
    messages: [
      {
        text: 'Hi there! How can I help you today?',
        sender: 'other',
        time: '10:00 AM',
      },
      {
        text: 'I have a question about the project requirements.',
        sender: 'user',
        time: '10:01 AM',
      },
      {
        text: 'Of course! What would you like to know?',
        sender: 'other',
        time: '10:01 AM',
      },
    ],
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    lastMessage: 'The project is coming along nicely',
    time: '1h ago',
    unread: 0,
    online: true,
    messages: [
      {
        text: "Hey Sarah, how's the progress on the design?",
        sender: 'user',
        time: '9:30 AM',
      },
      {
        text: "It's going well! I've completed the main screens.",
        sender: 'other',
        time: '9:35 AM',
      },
    ],
  },
]);

const filteredChats = computed(() => {
  if (!searchQuery.value) return chats.value;
  
  const query = searchQuery.value.toLowerCase();
  return chats.value.filter(chat => 
    chat.name.toLowerCase().includes(query) || 
    chat.lastMessage.toLowerCase().includes(query)
  );
});

const selectChat = (chat) => {
  selectedChat.value = chat;
  chat.unread = 0;
  scrollToBottom();
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedChat.value) return;

  const message = {
    text: newMessage.value,
    sender: 'user',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  selectedChat.value.messages.push(message);
  selectedChat.value.lastMessage = message.text;
  selectedChat.value.time = 'Just now';
  newMessage.value = '';
  scrollToBottom();

  // Simulate reply
  setTimeout(() => {
    const reply = {
      text: "I'll get back to you on that shortly!",
      sender: 'other',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    selectedChat.value.messages.push(reply);
    selectedChat.value.lastMessage = reply.text;
    selectedChat.value.time = 'Just now';
    scrollToBottom();
  }, 2000);
};

onMounted(() => {
  if (chats.value.length > 0) {
    selectChat(chats.value[0]);
  }
});
</script>