<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">My Proposals</h1>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Track and manage your submitted proposals</p>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div class="card p-4 flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Active Proposals</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
            </div>
            <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3">
              <Icon name="heroicons:document-text" class="h-6 w-6 text-primary-600 dark:text-primary-300" />
            </div>
          </div>

          <div class="card p-4 flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Interviews</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">3</p>
            </div>
            <div class="rounded-full bg-secondary-100 dark:bg-secondary-900 p-3">
              <Icon name="heroicons:user-group" class="h-6 w-6 text-secondary-600 dark:text-secondary-300" />
            </div>
          </div>

          <div class="card p-4 flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Success Rate</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">68%</p>
            </div>
            <div class="rounded-full bg-accent-100 dark:bg-accent-900 p-3">
              <Icon name="heroicons:chart-bar" class="h-6 w-6 text-accent-600 dark:text-accent-300" />
            </div>
          </div>

          <div class="card p-4 flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Earned</p>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">$8.2k</p>
            </div>
            <div class="rounded-full bg-success-100 dark:bg-success-900 p-3">
              <Icon name="heroicons:currency-dollar" class="h-6 w-6 text-success-600 dark:text-success-300" />
            </div>
          </div>
        </div>

        <!-- Proposals List -->
        <div class="card">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Recent Proposals</h2>
            <div class="flex items-center space-x-2">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search proposals..."
                  class="form-input pl-8 pr-4 py-2 text-sm"
                />
                <Icon name="heroicons:magnifying-glass" class="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <select class="form-input py-2 text-sm">
                <option>All Status</option>
                <option>Pending</option>
                <option>Interviewing</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>

          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div v-for="proposal in proposals" :key="proposal.id" class="p-6">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                      {{ proposal.jobTitle }}
                    </h3>
                    <span :class="[
                      'ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium',
                      statusClasses[proposal.status]
                    ]">
                      {{ proposal.status }}
                    </span>
                  </div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Submitted {{ proposal.submittedDate }} • Budget: {{ proposal.budget }}
                  </p>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {{ proposal.coverLetter }}
                  </p>
                  <div class="mt-4 flex items-center space-x-4">
                    <button class="text-sm text-primary-600 hover:text-primary-700 dark:hover:text-primary-400">
                      View Details
                    </button>
                    <button class="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      <Icon name="heroicons:chat-bubble-left-ellipsis" class="h-5 w-5" />
                      Message Client
                    </button>
                    <button class="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      <Icon name="heroicons:document-duplicate" class="h-5 w-5" />
                      Duplicate
                    </button>
                  </div>
                </div>
                <div class="ml-6">
                  <img :src="proposal.clientAvatar" :alt="proposal.clientName" class="h-12 w-12 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Showing 1-10 of 45 proposals
            </p>
            <nav class="flex items-center space-x-2">
              <button class="btn btn-outline py-1 px-2">
                Previous
              </button>
              <button class="btn btn-outline py-1 px-2">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const statusClasses = {
  'Pending': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  'Interviewing': 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
  'Accepted': 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300',
  'Rejected': 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-300',
};

const proposals = [
  {
    id: 1,
    jobTitle: 'Senior Full Stack Developer for Fintech Platform',
    status: 'Interviewing',
    submittedDate: '2 days ago',
    budget: '$8,000 - $12,000',
    coverLetter: "I have extensive experience in building fintech platforms using React and Node.js. I've successfully delivered similar projects...",
    clientName: 'FinTech Innovations',
    clientAvatar: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    jobTitle: 'UI/UX Designer for E-commerce App',
    status: 'Pending',
    submittedDate: '1 day ago',
    budget: '$4,000 - $6,000',
    coverLetter: "As a UI/UX designer with 5+ years of experience in e-commerce, I can help create an intuitive and conversion-focused design...",
    clientName: 'Global Shop',
    clientAvatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    jobTitle: 'WordPress Developer for Blog Customization',
    status: 'Accepted',
    submittedDate: '1 week ago',
    budget: '$1,000 - $2,000',
    coverLetter: "I specialize in WordPress development and have extensive experience in customizing themes and implementing advanced features...",
    clientName: 'Blog Masters',
    clientAvatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 4,
    jobTitle: 'Mobile App Developer for Fitness App',
    status: 'Rejected',
    submittedDate: '2 weeks ago',
    budget: '$15,000 - $20,000',
    coverLetter: "With my background in React Native and experience in building fitness applications, I can help bring your vision to life...",
    clientName: 'FitTech',
    clientAvatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];
</script>