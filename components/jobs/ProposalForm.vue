
<template>
  <div class="card p-6">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Submit Proposal</h3>
    <form @submit.prevent="submitProposal" class="space-y-6">
      <div>
        <label for="coverLetter" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          v-model="form.coverLetter"
          rows="4"
          class="mt-1 form-input block w-full"
          placeholder="Introduce yourself and explain why you're the best fit for this job"
          :class="{ 'border-error-500': errors.coverLetter }"
        ></textarea>
        <p v-if="errors.coverLetter" class="mt-1 text-sm text-error-500">{{ errors.coverLetter }}</p>
      </div>

      <div>
        <label for="rate" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Hourly Rate ($)
        </label>
        <input
          id="rate"
          v-model="form.rate"
          type="number"
          min="1"
          class="mt-1 form-input block w-full"
          :class="{ 'border-error-500': errors.rate }"
        />
        <p v-if="errors.rate" class="mt-1 text-sm text-error-500">{{ errors.rate }}</p>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Message to Client
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="3"
          class="mt-1 form-input block w-full"
          placeholder="Ask any questions or clarify details about the project"
          :class="{ 'border-error-500': errors.message }"
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-error-500">{{ errors.message }}</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Attachments (Optional)
        </label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <Icon name="heroicons:document-plus" class="mx-auto h-12 w-12 text-gray-400" />
            <div class="flex text-sm text-gray-600 dark:text-gray-400">
              <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                <span>Upload files</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple @change="handleFileUpload" />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PDF, DOC, PNG, JPG up to 10MB
            </p>
          </div>
        </div>
        <div v-if="form.attachments.length > 0" class="mt-2">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="(file, index) in form.attachments" :key="index" class="py-2 flex justify-between items-center">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ file.name }}</span>
              <button type="button" @click="removeFile(index)" class="text-error-500 hover:text-error-600">
                <Icon name="heroicons:x-mark" class="h-5 w-5" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          <span v-if="isSubmitting" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
          <span v-else>Submit Proposal</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// Remove the import for vue-toastification
// import { useToast } from 'vue-toastification';

// Get the notify function from the plugin
const { $notify } = useNuxtApp();
const emit = defineEmits(['submitted']);

const form = reactive({
  coverLetter: '',
  rate: '',
  message: '',
  attachments: [],
});

const errors = reactive({
  coverLetter: '',
  rate: '',
  message: '',
});

const isSubmitting = ref(false);

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  
  files.forEach(file => {
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      $notify({
        title: 'Error',
        text: `File ${file.name} is too large. Maximum size is 10MB.`,
        type: 'error'
      });
      return;
    }
    
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      $notify({
        title: 'Error',
        text: `File ${file.name} is not supported. Please upload PDF, DOC, PNG, or JPG files.`,
        type: 'error'
      });
      return;
    }
    
    form.attachments.push(file);
  });
};

const removeFile = (index) => {
  form.attachments.splice(index, 1);
};

const validateForm = () => {
  let isValid = true;
  errors.coverLetter = '';
  errors.rate = '';
  errors.message = '';

  if (!form.coverLetter.trim()) {
    errors.coverLetter = 'Cover letter is required';
    isValid = false;
  }

  if (!form.rate || form.rate <= 0) {
    errors.rate = 'Please enter a valid hourly rate';
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

const submitProposal = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    // Here you would typically submit the proposal to your API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    $notify({
      title: 'Success',
      text: 'Proposal submitted successfully!',
      type: 'success'
    });
    emit('submitted');
    
    // Reset form
    form.coverLetter = '';
    form.rate = '';
    form.message = '';
    form.attachments = [];
  } catch (error) {
    $notify({
      title: 'Error',
      text: 'Failed to submit proposal. Please try again.',
      type: 'error'
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>
