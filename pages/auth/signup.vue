<template>
  <div>
    <NuxtLayout name="auth">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-slide-up">
        <div class="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <h2 class="text-center text-3xl font-bold mb-6 text-gray-900 dark:text-white">Create your account</h2>
          
          <div class="mb-6">
            <div class="flex justify-center mb-4">
              <div class="flex">
                <button @click="userType = 'freelancer'" 
                  class="py-2 px-4 border-b-2 text-sm font-medium flex items-center space-x-1"
                  :class="userType === 'freelancer' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
                >
                  <Icon name="heroicons:briefcase" class="h-5 w-5" />
                  <span>I'm a Freelancer</span>
                </button>
                <button @click="userType = 'client'" 
                  class="py-2 px-4 border-b-2 text-sm font-medium flex items-center space-x-1"
                  :class="userType === 'client' ? 'border-primary-500 text-primary-600 dark:text-primary-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
                >
                  <Icon name="heroicons:building-office" class="h-5 w-5" />
                  <span>I'm a Client</span>
                </button>
              </div>
            </div>
            <p class="text-sm text-center text-gray-500 dark:text-gray-400">
              {{ userType === 'freelancer' ? 'Find work and build your career' : 'Hire talent and grow your business' }}
            </p>
          </div>
          
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  First name
                </label>
                <div class="mt-1">
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    name="firstName"
                    type="text"
                    required
                    class="form-input w-full"
                    :class="{ 'border-error-500 focus:border-error-500 focus:ring-error-500': errors.firstName }"
                  />
                  <p v-if="errors.firstName" class="mt-1 text-sm text-error-500">{{ errors.firstName }}</p>
                </div>
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Last name
                </label>
                <div class="mt-1">
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    name="lastName"
                    type="text"
                    required
                    class="form-input w-full"
                    :class="{ 'border-error-500 focus:border-error-500 focus:ring-error-500': errors.lastName }"
                  />
                  <p v-if="errors.lastName" class="mt-1 text-sm text-error-500">{{ errors.lastName }}</p>
                </div>
              </div>
            </div>
            
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
              <div class="mt-1 relative">
                <input
                  id="password"
                  v-model="form.password"
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="new-password"
                  required
                  class="form-input w-full pr-10"
                  :class="{ 'border-error-500 focus:border-error-500 focus:ring-error-500': errors.password }"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
                  @click="showPassword = !showPassword"
                >
                  <Icon v-if="showPassword" name="heroicons:eye-slash" class="h-5 w-5" />
                  <Icon v-else name="heroicons:eye" class="h-5 w-5" />
                </button>
                <p v-if="errors.password" class="mt-1 text-sm text-error-500">{{ errors.password }}</p>
              </div>
              <div class="mt-2">
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Password must be at least 8 characters and include a number and special character.
                </p>
              </div>
            </div>

            <div class="flex items-center">
              <input
                id="terms"
                v-model="form.agreeToTerms"
                name="terms"
                type="checkbox"
                required
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                :class="{ 'border-error-500': errors.agreeToTerms }"
              />
              <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to the
                <NuxtLink to="/terms" class="text-primary-600 hover:text-primary-500">Terms of Service</NuxtLink>
                and
                <NuxtLink to="/privacy" class="text-primary-600 hover:text-primary-500">Privacy Policy</NuxtLink>
              </label>
            </div>
            <p v-if="errors.agreeToTerms" class="mt-1 text-sm text-error-500">{{ errors.agreeToTerms }}</p>

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
                  Creating account...
                </span>
                <span v-else>Create account</span>
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
                  Or sign up with
                </span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button
                  type="button"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span class="sr-only">Sign up with Google</span>
                  <Icon name="logos:google-icon" class="h-5 w-5" />
                </button>
              </div>

              <div>
                <button
                  type="button"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span class="sr-only">Sign up with LinkedIn</span>
                  <Icon name="logos:linkedin-icon" class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <NuxtLink to="/auth/login" class="font-medium text-primary-600 hover:text-primary-500">
                Sign in
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification'

const route = useRoute();
const toast = useToast();
const userType = ref('freelancer');

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeToTerms: false,
});

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeToTerms: '',
});

const isLoading = ref(false);
const showPassword = ref(false);

onMounted(() => {
  // Check for type in query params
  if (route.query.type === 'client') {
    userType.value = 'client';
  } else if (route.query.type === 'freelancer') {
    userType.value = 'freelancer';
  }
});

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, one number, and one special character
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return re.test(password);
};

const handleSubmit = async () => {
  // Reset errors
  errors.firstName = '';
  errors.lastName = '';
  errors.email = '';
  errors.password = '';
  errors.agreeToTerms = '';
  
  let hasErrors = false;
  
  // Validate first name
  if (!form.firstName) {
    errors.firstName = 'First name is required';
    hasErrors = true;
  }
  
  // Validate last name
  if (!form.lastName) {
    errors.lastName = 'Last name is required';
    hasErrors = true;
  }
  
  // Validate email
  if (!form.email) {
    errors.email = 'Email is required';
    hasErrors = true;
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address';
    hasErrors = true;
  }
  
  // Validate password
  if (!form.password) {
    errors.password = 'Password is required';
    hasErrors = true;
  } else if (!validatePassword(form.password)) {
    errors.password = 'Password must be at least 8 characters and include a number and special character';
    hasErrors = true;
  }
  
  // Validate terms
  if (!form.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the Terms of Service and Privacy Policy';
    hasErrors = true;
  }
  
  if (hasErrors) {
    return;
  }
  
  isLoading.value = true;
  
  try {
    // Here you would connect to your authentication API
    // For now, we'll simulate a signup request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate successful signup
    toast.success(`Account created successfully as a ${userType.value}!`, {
      timeout: 2000,
    });
    
    // Redirect to onboarding or dashboard
    if (userType.value === 'freelancer') {
      await navigateTo('/onboarding/freelancer');
    } else {
      await navigateTo('/onboarding/client');
    }
  } catch (error) {
    toast.error('Failed to create account. Please try again.', {
      timeout: 3000,
    });
  } finally {
    isLoading.value = false;
  }
};
</script>