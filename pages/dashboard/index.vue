<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <!-- Profile Section -->
        <div class="mb-8 card p-6">
          <div class="flex items-start space-x-6">
            <div class="relative group">
              <img 
                :src="user?.avatarUrl || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'" 
                alt="Profile" 
                class="w-24 h-24 rounded-full object-cover"
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
            <div>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {{ user?.firstName || 'User' }}</h1>
              <p class="mt-2 text-gray-600 dark:text-gray-300">Manage your profile, projects, and activities</p>
            </div>
          </div>
        </div>

        <!-- Stats Overview -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div v-for="(stat, index) in stats" :key="index" 
               class="card p-6 flex items-center">
            <div class="rounded-full p-3 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
              <Icon :name="stat.icon" class="h-6 w-6" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ stat.value }}</p>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Projects Section -->
          <div class="lg:col-span-2 space-y-6">
            <div class="card">
              <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900 dark:text-white">My Projects</h2>
                <button 
                  @click="showProjectModal = true"
                  class="btn btn-primary"
                >
                  <Icon name="heroicons:plus" class="h-5 w-5 mr-2" />
                  Add Project
                </button>
              </div>
              
              <div class="divide-y divide-gray-200 dark:divide-gray-700">
                <div v-for="(project, index) in projects" :key="index" class="p-6">
                  <div class="flex items-start space-x-4">
                    <img :src="project.image" :alt="project.title" class="h-24 w-24 rounded-lg object-cover" />
                    <div class="flex-1 min-w-0">
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ project.title }}</h3>
                      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ project.description }}</p>
                      <div class="mt-2 flex items-center space-x-4">
                        <button class="text-sm text-primary-600 hover:text-primary-700 dark:hover:text-primary-400">
                          Edit
                        </button>
                        <button 
                          @click="removeProject(index)"
                          class="text-sm text-error-600 hover:text-error-700 dark:hover:text-error-400"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-if="projects.length === 0" class="p-6 text-center">
                  <Icon name="heroicons:folder-plus" class="h-12 w-12 mx-auto text-gray-400" />
                  <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No projects</h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Get started by creating a new project
                  </p>
                  <div class="mt-6">
                    <button
                      @click="showProjectModal = true"
                      class="btn btn-primary"
                    >
                      <Icon name="heroicons:plus" class="h-5 w-5 mr-2" />
                      New Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <QuickActions :user-type="user?.role || 'freelancer'" />

            <!-- Upcoming Deadlines/Meetings -->
            <div class="card p-6">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Upcoming</h2>
              <div class="space-y-4">
                <div v-for="(event, index) in upcomingEvents" :key="index" 
                     class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 rounded bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Icon :name="event.icon" class="h-5 w-5" />
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900 dark:text-white">{{ event.title }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ event.time }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings Overview -->
            <div class="card p-6">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {{ isFreelancer ? 'Earnings Overview' : 'Spending Overview' }}
              </h2>
              <div class="space-y-4">
                <div class="flex justify-between items-baseline">
                  <p class="text-sm text-gray-500 dark:text-gray-400">This Month</p>
                  <p class="text-2xl font-semibold text-gray-900 dark:text-white">$2,450.00</p>
                </div>
                <div class="flex justify-between items-baseline">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Last Month</p>
                  <p class="text-lg text-gray-700 dark:text-gray-300">$1,850.00</p>
                </div>
                <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button class="btn btn-outline w-full justify-center">
                    View Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
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
import { ref, computed, reactive } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { storeToRefs } from 'pinia';

const toast = useToast();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const isFreelancer = computed(() => user.value?.role === 'freelancer');
const showProjectModal = ref(false);
const projects = ref([]);

const newProject = reactive({
  title: '',
  description: '',
  image: '',
});

const isValidProject = computed(() => {
  return newProject.title && newProject.description && newProject.image;
});

// Stats data
const stats = computed(() => [
  {
    label: isFreelancer.value ? 'Active Projects' : 'Active Jobs',
    value: '4',
    icon: 'heroicons:briefcase',
  },
  {
    label: isFreelancer.value ? 'Completed Projects' : 'Total Hires',
    value: '23',
    icon: 'heroicons:check-circle',
  },
  {
    label: 'Messages',
    value: '12',
    icon: 'heroicons:chat-bubble-left-ellipsis',
  },
  {
    label: isFreelancer.value ? 'Earned' : 'Spent',
    value: '$2,450',
    icon: 'heroicons:currency-dollar',
  },
]);

// Upcoming events
const upcomingEvents = [
  {
    icon: 'heroicons:video-camera',
    title: 'Client Meeting - Project Review',
    time: 'Today at 3:00 PM',
  },
  {
    icon: 'heroicons:clock',
    title: 'Project Deadline - Mobile App',
    time: 'Tomorrow at 12:00 PM',
  },
  {
    icon: 'heroicons:presentation-chart-bar',
    title: 'Team Presentation',
    time: 'Thursday at 10:00 AM',
  },
];

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

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
      user.value.avatarUrl = e.target.result;
    };
    reader.readAsDataURL(file);
    
    toast.success('Profile picture updated successfully');
  } catch (error) {
    toast.error('Failed to upload image');
    console.error('Upload error:', error);
  }
};

const handleProjectImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    toast.error('Please upload an image file');
    return;
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    toast.error('Image size should be less than 10MB');
    return;
  }

  try {
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

const addProject = () => {
  if (!isValidProject.value) return;

  projects.value.push({
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
  projects.value.splice(index, 1);
  toast.success('Project removed successfully');
};
</script>