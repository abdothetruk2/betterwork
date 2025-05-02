<template>
  <div class="card p-6">
    <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h2>
    <div class="space-y-3">
      <template v-if="userType === 'freelancer'">
        <NuxtLink to="/jobs" class="btn btn-primary w-full justify-center">
          <Icon name="heroicons:magnifying-glass" class="h-5 w-5 mr-2" />
          Find Jobs
        </NuxtLink>
        <NuxtLink to="/proposals" class="btn btn-outline w-full justify-center">
          <Icon name="heroicons:document-text" class="h-5 w-5 mr-2" />
          View Proposals
        </NuxtLink>
        <NuxtLink to="/messages" class="btn btn-outline w-full justify-center">
          <Icon name="heroicons:chat-bubble-left-ellipsis" class="h-5 w-5 mr-2" />
          Messages
        </NuxtLink>
        <NuxtLink to="/profile" class="btn btn-outline w-full justify-center">
          <Icon name="heroicons:user-circle" class="h-5 w-5 mr-2" />
          Update Profile
        </NuxtLink>
      </template>
      
      <template v-else>
        <NuxtLink to="/post-job" class="btn btn-primary w-full justify-center">
          <Icon name="heroicons:plus" class="h-5 w-5 mr-2" />
          Post a Job
        </NuxtLink>
        <NuxtLink to="/talents" class="btn btn-outline w-full justify-center">
          <Icon name="heroicons:user-group" class="h-5 w-5 mr-2" />
          Browse Talents
        </NuxtLink>
        <NuxtLink to="/messages" class="btn btn-outline w-full justify-center">
          <Icon name="heroicons:chat-bubble-left-ellipsis" class="h-5 w-5 mr-2" />
          Messages
        </NuxtLink>
        <NuxtLink to="/jobs/manage" class="btn btn-outline w-full justify-center">
          <Icon name="heroicons:briefcase" class="h-5 w-5 mr-2" />
          Manage Jobs
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userType: {
    type: String,
    default: 'freelancer',
    validator: (value) => ['freelancer', 'client'].includes(value),
  },
});
</script>