<template>
  <button
    class="relative inline-flex items-center p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    @click="toggleColorMode"
    aria-label="Toggle dark mode"
  >
    <Icon v-if="colorMode === 'dark'" name="heroicons:sun" class="h-5 w-5" />
    <Icon v-else name="heroicons:moon" class="h-5 w-5" />
  </button>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>