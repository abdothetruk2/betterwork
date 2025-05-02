<template>
  <div class="flex items-center group">
    <div class="relative">
      <svg class="h-8 w-8 text-primary-500 transform transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              class="animate-pulse-slow" />
        <circle cx="12" cy="12" r="3" 
                fill="currentColor" 
                class="animate-pulse-slow" />
      </svg>
      <div class="absolute -inset-1 bg-primary-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <span class="ml-2 text-xl font-bold text-gray-900 dark:text-white relative overflow-hidden group-hover:after:translate-x-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-x-[-100%] after:bg-primary-500 after:transition-transform after:duration-300">
      BetterWork
    </span>
  </div>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>