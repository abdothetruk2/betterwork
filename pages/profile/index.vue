<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg">
        <!-- Profile Header -->
        <div class="relative h-32 bg-primary-600 rounded-t-lg">
          <div class="absolute -bottom-16 left-8">
            <div class="relative group">
              <img 
                :src="profileImage || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'" 
                alt="Profile" 
                class="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 object-cover"
              />
              <button 
                @click="$refs.imageInput.click()" 
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Icon name="heroicons:camera" class="h-8 w-8 text-white" />
              </button>
              <input
                ref="imageInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleImageUpload"
              />
            </div>
          </div>
        </div>

        <!-- Profile Form -->
        <div class="pt-20 p-8">
          <form @submit.prevent="saveProfile" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  First name
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  class="mt-1 form-input block w-full"
                  :class="{ 'border-error-500': errors.firstName }"
                />
                <p v-if="errors.firstName" class="mt-1 text-sm text-error-500">{{ errors.firstName }}</p>
              </div>

              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Last name
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  class="mt-1 form-input block w-full"
                  :class="{ 'border-error-500': errors.lastName }"
                />
                <p v-if="errors.lastName" class="mt-1 text-sm text-error-500">{{ errors.lastName }}</p>
              </div>
            </div>

            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Professional Title
              </label>
              <input
                id="title"
                v-model="form.title"
                type="text"
                class="mt-1 form-input block w-full"
                placeholder="e.g. Senior Full Stack Developer"
              />
            </div>

            <div>
              <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Bio
              </label>
              <textarea
                id="bio"
                v-model="form.bio"
                rows="4"
                class="mt-1 form-input block w-full"
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>

            <div>
              <label for="skills" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Skills
              </label>
              <div class="mt-1">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="skill in form.skills" 
                    :key="skill"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                  >
                    {{ skill }}
                    <button 
                      type="button"
                      @click="removeSkill(skill)" 
                      class="ml-2 text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <Icon name="heroicons:x-mark" class="h-4 w-4" />
                    </button>
                  </span>
                </div>
                <div class="mt-2 flex">
                  <input
                    v-model="newSkill"
                    type="text"
                    class="form-input block w-full"
                    placeholder="Add a skill (press Enter)"
                    @keyup.enter="addSkill"
                  />
                </div>
              </div>
            </div>

            <div>
              <label for="hourlyRate" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Hourly Rate ($)
              </label>
              <input
                id="hourlyRate"
                v-model="form.hourlyRate"
                type="number"
                min="0"
                class="mt-1 form-input block w-full"
                placeholder="Your hourly rate"
              />
            </div>

            <!-- Portfolio Projects Section -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Portfolio Projects</h3>
              
              <!-- Project List -->
              <div class="space-y-4 mb-4">
                <div v-for="(project, index) in form.projects" :key="index" class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <div class="flex items-center space-x-4">
                        <img :src="project.image" :alt="project.title" class="h-20 w-20 object-cover rounded-lg" />
                        <div>
                          <h4 class="text-base font-medium text-gray-900 dark:text-white">{{ project.title }}</h4>
                          <p class="text-sm text-gray-500 dark:text-gray-400">{{ project.description }}</p>
                        </div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      @click="removeProject(index)"
                      class="text-gray-400 hover:text-error-500"
                    >
                      <Icon name="heroicons:trash" class="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Add Project Button -->
              <button 
                type="button" 
                @click="showProjectModal = true"
                class="btn btn-outline w-full flex items-center justify-center"
              >
                <Icon name="heroicons:plus" class="h-5 w-5 mr-2" />
                Add Project
              </button>
            </div>

            <div class="flex justify-end space-x-3">
              <button 
                type="button" 
                class="btn btn-outline"
                @click="resetForm"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                class="btn btn-primary"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
                <span v-else>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Add Project Modal -->
    <HeadlessTransitionRoot appear :show="showProjectModal" as="template">
      <HeadlessDialog as="div" @close="showProjectModal = false" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <HeadlessDialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Add New Project
                </HeadlessDialogTitle>

                <div class="mt-4">
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Project Title
                      </label>
                      <input
                        v-model="newProject.title"
                        type="text"
                        class="mt-1 form-input block w-full"
                        placeholder="Enter project title"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Description
                      </label>
                      <textarea
                        v-model="newProject.description"
                        rows="3"
                        class="mt-1 form-input block w-full"
                        placeholder="Describe your project"
                      ></textarea>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Project Image
                      </label>
                      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                          <div v-if="newProject.image" class="mb-4">
                            <img :src="newProject.image" alt="Preview" class="mx-auto h-32 w-32 object-cover rounded-lg" />
                          </div>
                          <div v-else class="flex text-sm text-gray-600 dark:text-gray-400">
                            <label
                              for="project-image"
                              class="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="project-image"
                                type="file"
                                accept="image/*"
                                class="sr-only"
                                @change="handleProjectImageUpload"
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    class="btn btn-outline"
                    @click="showProjectModal = false"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addProject"
                    :disabled="!isValidProject"
                  >
                    Add Project
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const profileImage = ref(null);
const newSkill = ref('');
const isLoading = ref(false);
const showProjectModal = ref(false);

const form = reactive({
  firstName: '',
  lastName: '',
  title: '',
  bio: '',
  skills: [],
  hourlyRate: '',
  projects: [],
});

const errors = reactive({
  firstName: '',
  lastName: '',
});

const newProject = reactive({
  title: '',
  description: '',
  image: '',
});

const isValidProject = computed(() => {
  return newProject.title && newProject.description && newProject.image;
});

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Validate file type and size
  if (!file.type.startsWith('image/')) {
    toast.error('Please upload an image file');
    return;
  }

  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    toast.error('Image size should be less than 5MB');
    return;
  }

  try {
    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

    // Here you would typically upload the file to your storage
    // For now, we'll just simulate an upload
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Profile picture updated successfully');
  } catch (error) {
    toast.error('Failed to upload image');
    console.error('Upload error:', error);
  }
};

const handleProjectImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Validate file type and size
  if (!file.type.startsWith('image/')) {
    toast.error('Please upload an image file');
    return;
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    toast.error('Image size should be less than 10MB');
    return;
  }

  try {
    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      newProject.image = e.target.result;
    };
    reader.readAsDataURL(file);
  } catch (error) {
    toast.error('Failed to upload image');
    console.error('Upload error:', error);
  }
};

const addSkill = () => {
  const skill = newSkill.value.trim();
  if (skill && !form.skills.includes(skill)) {
    form.skills.push(skill);
    newSkill.value = '';
  }
};

const removeSkill = (skill) => {
  form.skills = form.skills.filter(s => s !== skill);
};

const addProject = () => {
  if (!isValidProject.value) return;

  form.projects.push({
    title: newProject.title,
    description: newProject.description,
    image: newProject.image,
  });

  // Reset form
  Object.assign(newProject, {
    title: '',
    description: '',
    image: '',
  });

  showProjectModal.value = false;
  toast.success('Project added successfully');
};

const removeProject = (index) => {
  form.projects.splice(index, 1);
  toast.success('Project removed successfully');
};

const validateForm = () => {
  let isValid = true;
  errors.firstName = '';
  errors.lastName = '';

  if (!form.firstName) {
    errors.firstName = 'First name is required';
    isValid = false;
  }

  if (!form.lastName) {
    errors.lastName = 'Last name is required';
    isValid = false;
  }

  return isValid;
};

const saveProfile = async () => {
  if (!validateForm()) return;

  isLoading.value = true;

  try {
    // Here you would typically save the profile data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Profile updated successfully');
  } catch (error) {
    toast.error('Failed to update profile');
    console.error('Save error:', error);
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  // Reset form to original values
  Object.assign(form, {
    firstName: '',
    lastName: '',
    title: '',
    bio: '',
    skills: [],
    hourlyRate: '',
    projects: [],
  });
  errors.firstName = '';
  errors.lastName = '';
};
</script>