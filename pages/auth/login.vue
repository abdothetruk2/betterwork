<template>
  <div>
    <NuxtLayout name="auth">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-slide-up">
        <div class="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <h2 class="text-center text-3xl font-bold mb-6 text-gray-900 dark:text-white">Log in to your account</h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="form-input w-full"
                  :class="{ 'border-error-500 focus:border-error-500 focus:ring-error-500': errors.email }"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-error-500">{{ errors.email }}</p>
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  v-model="form.password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="form-input w-full"
                  :class="{ 'border-error-500 focus:border-error-500 focus:ring-error-500': errors.password }"
                />
                <p v-if="errors.password" class="mt-1 text-sm text-error-500">{{ errors.password }}</p>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="form.rememberMe"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <NuxtLink to="/auth/forgot-password" class="font-medium text-primary-600 hover:text-primary-500">
                  Forgot your password?
                </NuxtLink>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full btn btn-primary py-3"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
                <span v-else>Sign in</span>
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button
                  type="button"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span class="sr-only">Sign in with Google</span>
                  <Icon name="logos:google-icon" class="h-5 w-5" />
                </button>
              </div>

              <div>
                <button
                  type="button"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span class="sr-only">Sign in with LinkedIn</span>
                  <Icon name="logos:linkedin-icon" class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?
              <NuxtLink to="/auth/signup" class="font-medium text-primary-600 hover:text-primary-500">
                Sign up for free
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useToast } from 'vue-toastification'

// Get the toast from the plugin
const toast = useToast()
const authStore = useAuthStore();

const form = reactive({
  email: '',
  password: '',
  rememberMe: false,
});

const errors = reactive({
  email: '',
  password: '',
});

const isLoading = ref(false);

const handleSubmit = async () => {
  // Reset errors
  errors.email = '';
  errors.password = '';
  
  // Basic validation
  if (!form.email) {
    errors.email = 'Email is required';
    return;
  }
  
  if (!form.password) {
    errors.password = 'Password is required';
    return;
  }
  
  isLoading.value = true;
  
  try {
    const result = await authStore.login({
      email: form.email,
      password: form.password,
      rememberMe: form.rememberMe,
    });

    if (result.success) {
      toast.success('Successfully logged in');
      await navigateTo('/dashboard');
    } else {
      toast.error(result.error || 'Failed to login. Please check your credentials.');
    }
  } catch (error) {
    toast.error('Failed to login. Please try again.');
  } finally {
    isLoading.value = false;
  }
};
</script>