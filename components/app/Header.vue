<template>
  <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and main navigation -->
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <AppLogo />
            </NuxtLink>
          </div>
          <nav class="hidden md:ml-6 md:flex md:space-x-4">
            <NuxtLink to="/jobs" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Find Jobs
            </NuxtLink>
            <NuxtLink to="/talents" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Find Talent
            </NuxtLink>
            <NuxtLink to="/how-it-works" class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              How it Works
            </NuxtLink>
          </nav>
        </div>

        <!-- Right side navigation -->
        <div class="flex items-center">
          <ColorModeSwitch class="mr-2" />
          
          <!-- User dropdown when authenticated -->
          <template v-if="isAuthenticated">
            <button class="relative p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">View notifications</span>
              <div class="relative">
                <Icon name="heroicons:bell" class="h-6 w-6" />
                <span class="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-error-500 text-xs font-bold text-white">3</span>
              </div>
            </button>

            <HeadlessMenu as="div" class="ml-3 relative">
              <HeadlessMenuButton class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user?.avatarUrl || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'" :alt="user?.firstName" />
              </HeadlessMenuButton>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <HeadlessMenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 dark:divide-gray-700">
                  <div class="py-1">
                    <HeadlessMenuItem v-slot="{ active }">
                      <NuxtLink to="/dashboard" :class="[active ? 'bg-gray-100 dark:bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                        Dashboard
                      </NuxtLink>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <NuxtLink to="/profile" :class="[active ? 'bg-gray-100 dark:bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                        Profile
                      </NuxtLink>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <NuxtLink to="/proposals" :class="[active ? 'bg-gray-100 dark:bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                        Proposals
                      </NuxtLink>
                    </HeadlessMenuItem>
                  </div>
                  <div class="py-1">
                    <HeadlessMenuItem v-slot="{ active }">
                      <NuxtLink to="/messages" :class="[active ? 'bg-gray-100 dark:bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                        Messages
                      </NuxtLink>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 dark:bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">
                        Settings
                      </a>
                    </HeadlessMenuItem>
                  </div>
                  <div class="py-1">
                    <HeadlessMenuItem v-slot="{ active }">
                      <button
                        @click="handleLogout"
                        :class="[active ? 'bg-gray-100 dark:bg-gray-700' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200']"
                      >
                        Sign out
                      </button>
                    </HeadlessMenuItem>
                  </div>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>
          </template>

          <!-- Login/Signup buttons when not authenticated -->
          <template v-else>
            <NuxtLink to="/auth/login" class="btn btn-outline">
              Sign in
            </NuxtLink>
            <NuxtLink to="/auth/signup" class="ml-3 btn btn-primary">
              Sign up
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);

const handleLogout = async () => {
  await authStore.logout();
  navigateTo('/');
};
</script>