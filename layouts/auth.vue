<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <NuxtLink to="/" class="flex justify-center">
        <AppLogo class="h-12 w-auto" />
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>