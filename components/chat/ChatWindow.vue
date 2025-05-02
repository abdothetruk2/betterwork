<template>
  <div class="fixed bottom-0 right-4 w-96 bg-white dark:bg-gray-800 rounded-t-lg shadow-xl border border-gray-200 dark:border-gray-700">
    <!-- Chat Header -->
    <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <div class="flex items-center">
        <img :src="recipient.avatar" :alt="recipient.name" class="h-8 w-8 rounded-full" />
        <div class="ml-3">
          <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ recipient.name }}</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            {{ recipient.online ? 'Online' : 'Offline' }}
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
        <button @click="minimizeChat" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <Icon :name="isMinimized ? 'heroicons:chevron-up' : 'heroicons:minus'" class="h-5 w-5" />
        </button>
        <button @click="closeChat" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <Icon name="heroicons:x-mark" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Chat Messages -->
    <div v-show="!isMinimized" ref="messagesContainer" class="h-96 overflow-y-auto p-4 space-y-4">
      <div v-for="(message, index) in messages" :key="index" 
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
      <div v-if="isTyping" class="flex justify-start">
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div v-show="!isMinimized" class="p-4 border-t border-gray-200 dark:border-gray-700">
      <form @submit.prevent="sendMessage" class="flex items-center space-x-2">
        <button type="button" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <Icon name="heroicons:paper-clip" class="h-5 w-5" />
        </button>
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type a message..."
          class="flex-1 form-input rounded-full py-2"
          :disabled="isTyping"
        />
        <button 
          type="submit" 
          class="text-primary-500 hover:text-primary-600 disabled:opacity-50"
          :disabled="!newMessage.trim() || isTyping"
        >
          <Icon name="heroicons:paper-airplane" class="h-5 w-5" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  recipient: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      online: true,
    }),
  },
});

const emit = defineEmits(['close']);

const isMinimized = ref(false);
const newMessage = ref('');
const isTyping = ref(false);
const messagesContainer = ref(null);

const messages = ref([
  {
    text: 'Hi there! How can I help you today?',
    sender: 'recipient',
    time: '10:00 AM',
  },
  {
    text: 'I have a question about the project requirements.',
    sender: 'user',
    time: '10:01 AM',
  },
  {
    text: 'Of course! What would you like to know?',
    sender: 'recipient',
    time: '10:01 AM',
  },
]);

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const minimizeChat = () => {
  isMinimized.value = !isMinimized.value;
};

const closeChat = () => {
  emit('close');
};

const simulateTyping = () => {
  isTyping.value = true;
  setTimeout(() => {
    isTyping.value = false;
    messages.value.push({
      text: 'I understand. Could you please provide more details about your specific requirements?',
      sender: 'recipient',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    scrollToBottom();
  }, 2000);
};

const sendMessage = () => {
  if (!newMessage.value.trim() || isTyping.value) return;

  const message = {
    text: newMessage.value,
    sender: 'user',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  messages.value.push(message);
  newMessage.value = '';
  scrollToBottom();
  simulateTyping();
};

onMounted(() => {
  scrollToBottom();
});
</script>