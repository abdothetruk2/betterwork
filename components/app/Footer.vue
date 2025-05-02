<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <AppLogo />
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Connecting talents with opportunities worldwide.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">Facebook</span>
              <Icon name="logos:facebook" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">Instagram</span>
              <Icon name="logos:instagram-icon" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">X / Twitter</span>
              <Icon name="logos:twitter" class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span class="sr-only">LinkedIn</span>
              <Icon name="logos:linkedin-icon" class="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">For Clients</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(link, index) in clientLinks" :key="index">
              <NuxtLink :to="link.to" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">For Freelancers</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(link, index) in freelancerLinks" :key="index">
              <NuxtLink :to="link.to" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Resources</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(link, index) in resourceLinks" :key="index">
              <NuxtLink :to="link.to" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col md:flex-row justify-between">
          <p class="text-base text-gray-500 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} BetterWork. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0 flex space-x-6">
            <NuxtLink to="/privacy" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/cookies" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Cookie Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const clientLinks = [
  { label: 'Post a Job', to: '/post-job' },
  { label: 'Find Talent', to: '/talents' },
  { label: 'How to Hire', to: '/how-to-hire' },
  { label: 'Enterprise Solutions', to: '/enterprise' },
];

const freelancerLinks = [
  { label: 'Find Jobs', to: '/jobs' },
  { label: 'Create Profile', to: '/create-profile' },
  { label: 'How to Find Work', to: '/how-to-find-work' },
  { label: 'Success Stories', to: '/success-stories' },
];

const resourceLinks = [
  { label: 'Help Center', to: '/help' },
  { label: 'Blog', to: '/blog' },
  { label: 'Community', to: '/community' },
  { label: 'Contact Us', to: '/contact' },
];
</script>