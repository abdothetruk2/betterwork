```vue
<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <!-- Job Details -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="card">
              <div class="p-6">
                <div class="flex items-center justify-between">
                  <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ job.title }}</h1>
                  <button class="btn btn-outline">
                    <Icon name="heroicons:bookmark" class="h-5 w-5" />
                  </button>
                </div>

                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {{ job.jobType }}
                  </span>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300">
                    {{ job.experienceLevel }}
                  </span>
                  <span v-if="job.isUrgent" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-300">
                    Urgent
                  </span>
                </div>

                <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <div class="flex items-center space-x-4">
                    <span class="flex items-center">
                      <Icon name="heroicons:currency-dollar" class="h-5 w-5 mr-1" />
                      {{ job.budget }}
                    </span>
                    <span class="flex items-center">
                      <Icon name="heroicons:map-pin" class="h-5 w-5 mr-1" />
                      {{ job.location }}
                    </span>
                    <span class="flex items-center">
                      <Icon name="heroicons:clock" class="h-5 w-5 mr-1" />
                      Posted {{ job.postedDate }}
                    </span>
                  </div>
                </div>

                <div class="mt-6 prose dark:prose-invert max-w-none">
                  <h2>Project Description</h2>
                  <p>{{ job.description }}</p>

                  <h2>Requirements</h2>
                  <ul>
                    <li>5+ years of experience in full stack development</li>
                    <li>Strong proficiency in React and Node.js</li>
                    <li>Experience with cloud platforms (AWS preferred)</li>
                    <li>Excellent communication skills</li>
                  </ul>

                  <h2>Responsibilities</h2>
                  <ul>
                    <li>Design and implement new features</li>
                    <li>Write clean, maintainable code</li>
                    <li>Collaborate with team members</li>
                    <li>Participate in code reviews</li>
                  </ul>
                </div>

                <div class="mt-6">
                  <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Required Skills</h2>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(skill, index) in job.skills" :key="index" 
                          class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit Proposal Section -->
            <div class="mt-8" v-if="isAuthenticated && !hasSubmittedProposal">
              <JobsProposalForm @submitted="handleProposalSubmitted" />
            </div>

            <div v-else-if="!isAuthenticated" class="mt-8 card p-6 text-center">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Want to apply for this job?</h3>
              <p class="text-gray-500 dark:text-gray-400 mb-4">Sign in or create an account to submit a proposal.</p>
              <div class="flex justify-center space-x-4">
                <NuxtLink to="/auth/login" class="btn btn-primary">Sign In</NuxtLink>
                <NuxtLink to="/auth/signup" class="btn btn-outline">Create Account</NuxtLink>
              </div>
            </div>

            <div v-else class="mt-8 card p-6 text-center bg-success-50 dark:bg-success-900/20">
              <Icon name="heroicons:check-circle" class="h-12 w-12 text-success-500 mx-auto" />
              <h3 class="mt-2 text-lg font-medium text-gray-900 dark:text-white">Proposal Submitted!</h3>
              <p class="mt-1 text-gray-500 dark:text-gray-400">
                Your proposal has been sent to the client. They will contact you if they're interested.
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- About the Client -->
            <div class="card p-6">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">About the Client</h2>
              <div class="flex items-center mb-4">
                <img :src="job.clientAvatar" :alt="job.clientName" class="h-12 w-12 rounded-full" />
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ job.clientName }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Member since 2022</p>
                </div>
              </div>
              <div class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <p class="flex items-center">
                  <Icon name="heroicons:map-pin" class="h-5 w-5 mr-2" />
                  United States
                </p>
                <p class="flex items-center">
                  <Icon name="heroicons:clock" class="h-5 w-5 mr-2" />
                  12:00 PM in client's timezone
                </p>
                <p class="flex items-center">
                  <Icon name="heroicons:briefcase" class="h-5 w-5 mr-2" />
                  15 jobs posted
                </p>
                <p class="flex items-center">
                  <Icon name="heroicons:currency-dollar" class="h-5 w-5 mr-2" />
                  $10k+ total spent
                </p>
              </div>
            </div>

            <!-- Job Activity -->
            <div class="card p-6">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Job Activity</h2>
              <div class="space-y-4 text-sm">
                <div class="flex justify-between items-baseline">
                  <span class="text-gray-500 dark:text-gray-400">Proposals</span>
                  <span class="font-medium text-gray-900 dark:text-white">{{ job.proposals }}</span>
                </div>
                <div class="flex justify-between items-baseline">
                  <span class="text-gray-500 dark:text-gray-400">Interviewing</span>
                  <span class="font-medium text-gray-900 dark:text-white">3</span>
                </div>
                <div class="flex justify-between items-baseline">
                  <span class="text-gray-500 dark:text-gray-400">Invites sent</span>
                  <span class="font-medium text-gray-900 dark:text-white">5</span>
                </div>
              </div>
            </div>

            <!-- Share Job -->
            <div class="card p-6">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Share Job</h2>
              <div class="flex space-x-4">
                <button class="flex-1 btn btn-outline justify-center">
                  <Icon name="logos:linkedin-icon" class="h-5 w-5" />
                </button>
                <button class="flex-1 btn btn-outline justify-center">
                  <Icon name="logos:twitter" class="h-5 w-5" />
                </button>
                <button class="flex-1 btn btn-outline justify-center">
                  <Icon name="heroicons:envelope" class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAuthenticated = ref(true); // This would come from your auth store
const hasSubmittedProposal = ref(false);

// This would typically come from your API
const job = ref({
  id: route.params.id,
  title: 'Senior Full Stack Developer Needed for Fintech Startup',
  clientName: 'FinTech Innovations',
  clientAvatar: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=300',
  description: 'We are looking for an experienced full stack developer to help build our financial technology platform. The ideal candidate will have experience with React, Node.js, and financial APIs.',
  budget: '$8,000 - $12,000',
  jobType: 'Contract',
  experienceLevel: 'Expert',
  location: 'Remote',
  postedDate: '2 days ago',
  proposals: 18,
  isUrgent: true,
  skills: ['React', 'Node.js', 'TypeScript', 'Express', 'MongoDB', 'AWS'],
});

const handleProposalSubmitted = () => {
  hasSubmittedProposal.value = true;
};
</script>
```