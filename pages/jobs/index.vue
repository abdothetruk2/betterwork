<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Find Jobs</h1>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Discover opportunities that match your skills and interests</p>
        </div>
        
        <!-- Search and filters -->
        <div class="card mb-6 p-4">
          <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex-grow">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="heroicons:magnifying-glass" class="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search jobs by title, skill, or keyword"
                  class="form-input w-full pl-10"
                  v-model="searchQuery"
                  @input="filterJobs"
                />
              </div>
            </div>
            
            <div class="flex space-x-2">
              <HeadlessMenu as="div" class="relative inline-block text-left">
                <HeadlessMenuButton class="btn btn-outline">
                  <Icon name="heroicons:funnel" class="h-5 w-5 mr-1" />
                  Filters
                </HeadlessMenuButton>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <HeadlessMenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="p-4">
                      <h3 class="font-medium text-gray-900 dark:text-white mb-2">Job Type</h3>
                      <div class="space-y-2">
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.jobTypes" value="Full-time" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Full-time</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.jobTypes" value="Part-time" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Part-time</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.jobTypes" value="Contract" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Contract</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.jobTypes" value="Hourly" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Hourly</span>
                        </label>
                      </div>
                      
                      <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>
                      
                      <h3 class="font-medium text-gray-900 dark:text-white mb-2">Experience Level</h3>
                      <div class="space-y-2">
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.experienceLevels" value="Entry level" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Entry level</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.experienceLevels" value="Intermediate" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Intermediate</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.experienceLevels" value="Expert" class="text-primary-600 rounded" @change="filterJobs" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Expert</span>
                        </label>
                      </div>
                      
                      <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>
                      
                      <button @click="resetFilters" class="btn btn-outline w-full">Reset Filters</button>
                    </div>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>
              
              <HeadlessMenu as="div" class="relative inline-block text-left">
                <HeadlessMenuButton class="btn btn-outline">
                  <Icon name="heroicons:arrows-up-down" class="h-5 w-5 mr-1" />
                  Sort
                </HeadlessMenuButton>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <HeadlessMenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <HeadlessMenuItem v-slot="{ active }">
                        <a 
                          href="#" 
                          @click.prevent="sortBy('latest')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Newest first
                        </a>
                      </HeadlessMenuItem>
                      <HeadlessMenuItem v-slot="{ active }">
                        <a 
                          href="#" 
                          @click.prevent="sortBy('oldest')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Oldest first
                        </a>
                      </HeadlessMenuItem>
                      <HeadlessMenuItem v-slot="{ active }">
                        <a 
                          href="#" 
                          @click.prevent="sortBy('highest')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Highest budget
                        </a>
                      </HeadlessMenuItem>
                      <HeadlessMenuItem v-slot="{ active }">
                        <a 
                          href="#" 
                          @click.prevent="sortBy('lowest')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Lowest budget
                        </a>
                      </HeadlessMenuItem>
                    </div>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>
            </div>
          </div>
          
          <!-- Applied filters -->
          <div v-if="hasActiveFilters" class="mt-4 flex flex-wrap gap-2">
            <div v-for="jobType in filters.jobTypes" :key="`jt-${jobType}`" 
                 class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {{ jobType }}
              <button @click="removeFilter('jobTypes', jobType)" class="ml-1 text-primary-500 hover:text-primary-600">
                <Icon name="heroicons:x-mark" class="h-3 w-3" />
              </button>
            </div>
            <div v-for="level in filters.experienceLevels" :key="`el-${level}`" 
                 class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300">
              {{ level }}
              <button @click="removeFilter('experienceLevels', level)" class="ml-1 text-secondary-500 hover:text-secondary-600">
                <Icon name="heroicons:x-mark" class="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
        
        <!-- Results count and saved searches -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <p class="text-gray-600 dark:text-gray-300">
            Showing <span class="font-medium">{{ filteredJobs.length }}</span> results
          </p>
          <button class="mt-2 sm:mt-0 btn btn-outline text-sm">
            <Icon name="heroicons:bookmark" class="h-4 w-4 mr-1" />
            Save this search
          </button>
        </div>
        
        <!-- Jobs list -->
        <div v-if="loading" class="flex justify-center py-12">
          <svg class="animate-spin h-10 w-10 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        
        <div v-else-if="filteredJobs.length === 0" class="card p-12 text-center">
          <Icon name="heroicons:document-magnifying-glass" class="h-16 w-16 mx-auto text-gray-400" />
          <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">No jobs found</h3>
          <p class="mt-2 text-gray-500 dark:text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button @click="resetFilters" class="mt-4 btn btn-primary">
            Clear filters
          </button>
        </div>
        
        <div v-else class="space-y-6">
          <div v-for="job in filteredJobs" :key="job.id" class="card p-6 hover:shadow-md transition-shadow duration-200 animate-fade-in">
            <div class="flex flex-col md:flex-row md:items-start">
              <div class="flex-grow">
                <div class="flex items-start">
                  <div class="flex-shrink-0 hidden md:block">
                    <img :src="job.clientAvatar" :alt="job.clientName" class="h-12 w-12 rounded-full" />
                  </div>
                  <div class="md:ml-4 flex-grow">
                    <NuxtLink :to="`/jobs/${job.id}`" class="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                      {{ job.title }}
                    </NuxtLink>
                    <div class="mt-1 flex flex-wrap gap-2">
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
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-medium text-gray-900 dark:text-white">
                        {{ job.budget }}
                      </span>
                      <span class="mx-1">•</span>
                      <span>{{ job.location }}</span>
                      <span class="mx-1">•</span>
                      <span>Posted {{ job.postedDate }}</span>
                    </p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {{ job.description }}
                    </p>
                    <div class="mt-3 flex flex-wrap gap-1">
                      <span v-for="(skill, index) in job.skills" :key="index" 
                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:ml-6 flex flex-col items-center md:items-end space-y-2">
                <div class="flex space-x-2">
                  <button class="btn btn-primary">
                    Apply Now
                  </button>
                  <button class="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <Icon name="heroicons:bookmark" class="h-5 w-5" />
                  </button>
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ job.proposals }} proposals so far
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="mt-8 flex justify-center">
          <nav class="inline-flex rounded-md shadow">
            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
              <span class="sr-only">Previous</span>
              <Icon name="heroicons:chevron-left" class="h-5 w-5" />
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              1
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-primary-50 dark:bg-primary-900 text-sm font-medium text-primary-600 dark:text-primary-300">
              2
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              3
            </a>
            <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200">
              ...
            </span>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              8
            </a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              9
            </a>
            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
              <span class="sr-only">Next</span>
              <Icon name="heroicons:chevron-right" class="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

const searchQuery = ref('');
const loading = ref(true);
const jobs = ref([]);
const filteredJobs = ref([]);

const filters = reactive({
  jobTypes: [],
  experienceLevels: [],
});

const hasActiveFilters = computed(() => {
  return filters.jobTypes.length > 0 || filters.experienceLevels.length > 0;
});

const sampleJobs = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: 'UX/UI Designer for E-commerce Website Redesign',
    clientName: 'Global Retail Solutions',
    clientAvatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Seeking a talented UX/UI designer to redesign our e-commerce platform. Must have experience with e-commerce websites and be proficient in Figma.',
    budget: '$4,000 - $7,000',
    jobType: 'Fixed-price',
    experienceLevel: 'Intermediate',
    location: 'Remote',
    postedDate: '4 days ago',
    proposals: 25,
    isUrgent: false,
    skills: ['UI Design', 'UX Design', 'Figma', 'Shopify', 'E-commerce', 'Wireframing'],
  },
  {
    id: 3,
    title: 'WordPress Developer for Blog Customization',
    clientName: 'Content Creator Inc',
    clientAvatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Looking for a WordPress developer to customize our blog theme and implement additional features. Experience with custom WordPress development required.',
    budget: '$1,000 - $2,000',
    jobType: 'Hourly',
    experienceLevel: 'Entry level',
    location: 'Remote',
    postedDate: 'Yesterday',
    proposals: 12,
    isUrgent: false,
    skills: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'Theme Customization'],
  },
  {
    id: 4,
    title: 'Mobile App Developer for Fitness App',
    clientName: 'HealthTech Solutions',
    clientAvatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'We need a mobile app developer to create a fitness tracking app for iOS and Android. Experience with React Native or Flutter preferred.',
    budget: '$15,000 - $25,000',
    jobType: 'Full-time',
    experienceLevel: 'Expert',
    location: 'Remote',
    postedDate: '1 week ago',
    proposals: 35,
    isUrgent: true,
    skills: ['React Native', 'Flutter', 'Mobile Development', 'API Integration', 'Redux'],
  },
  {
    id: 5,
    title: 'Content Writer for Tech Blog',
    clientName: 'Tech News Network',
    clientAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Seeking an experienced content writer to create engaging articles for our tech blog. Must have knowledge of current tech trends and good SEO practices.',
    budget: '$50 - $150 per article',
    jobType: 'Part-time',
    experienceLevel: 'Intermediate',
    location: 'Remote',
    postedDate: '3 days ago',
    proposals: 42,
    isUrgent: false,
    skills: ['Content Writing', 'SEO', 'Tech Knowledge', 'Blogging', 'Research'],
  },
  {
    id: 6,
    title: 'Data Scientist for Machine Learning Project',
    clientName: 'AI Research Labs',
    clientAvatar: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Looking for a data scientist to help develop machine learning models for our predictive analytics platform. Strong Python skills required.',
    budget: '$30 - $50 per hour',
    jobType: 'Contract',
    experienceLevel: 'Expert',
    location: 'Remote',
    postedDate: '5 days ago',
    proposals: 15,
    isUrgent: false,
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis', 'Pandas', 'NumPy'],
  },
  {
    id: 7,
    title: 'Social Media Manager for Fashion Brand',
    clientName: 'Trendy Styles',
    clientAvatar: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'We are looking for a social media manager to handle our Instagram, TikTok, and Facebook accounts. Experience in the fashion industry is a plus.',
    budget: '$2,500 - $3,500 per month',
    jobType: 'Part-time',
    experienceLevel: 'Entry level',
    location: 'Remote',
    postedDate: 'Today',
    proposals: 28,
    isUrgent: true,
    skills: ['Social Media Management', 'Content Creation', 'Instagram', 'TikTok', 'Copywriting'],
  },
  {
    id: 8,
    title: 'DevOps Engineer for Cloud Infrastructure',
    clientName: 'Cloud Solutions Inc',
    clientAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Seeking a DevOps engineer to maintain and optimize our cloud infrastructure. Experience with AWS, Docker, and CI/CD pipelines is essential.',
    budget: '$70 - $90 per hour',
    jobType: 'Full-time',
    experienceLevel: 'Expert',
    location: 'Remote',
    postedDate: '6 days ago',
    proposals: 10,
    isUrgent: false,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
  },
];

onMounted(async () => {
  // Simulate data loading
  await new Promise(resolve => setTimeout(resolve, 1000));
  jobs.value = sampleJobs;
  filteredJobs.value = [...jobs.value];
  loading.value = false;
});

const filterJobs = () => {
  // Reset to all jobs
  let result = [...jobs.value];
  
  // Apply search query filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(job => 
      job.title.toLowerCase().includes(query) || 
      job.description.toLowerCase().includes(query) ||
      job.skills.some(skill => skill.toLowerCase().includes(query))
    );
  }
  
  // Apply job type filter
  if (filters.jobTypes.length > 0) {
    result = result.filter(job => filters.jobTypes.includes(job.jobType));
  }
  
  // Apply experience level filter
  if (filters.experienceLevels.length > 0) {
    result = result.filter(job => filters.experienceLevels.includes(job.experienceLevel));
  }
  
  filteredJobs.value = result;
};

const removeFilter = (filterType, value) => {
  filters[filterType] = filters[filterType].filter(item => item !== value);
  filterJobs();
};

const resetFilters = () => {
  searchQuery.value = '';
  filters.jobTypes = [];
  filters.experienceLevels = [];
  filterJobs();
};

const sortBy = (option) => {
  switch (option) {
    case 'latest':
      filteredJobs.value.sort((a, b) => {
        if (a.postedDate.includes('Today')) return -1;
        if (b.postedDate.includes('Today')) return 1;
        if (a.postedDate.includes('Yesterday')) return -1;
        if (b.postedDate.includes('Yesterday')) return 1;
        return 0;
      });
      break;
    case 'oldest':
      filteredJobs.value.sort((a, b) => {
        if (a.postedDate.includes('Today')) return 1;
        if (b.postedDate.includes('Today')) return -1;
        if (a.postedDate.includes('Yesterday')) return 1;
        if (b.postedDate.includes('Yesterday')) return -1;
        return 0;
      });
      break;
    case 'highest':
      filteredJobs.value.sort((a, b) => {
        const aBudget = parseFloat(a.budget.replace(/[^0-9.-]+/g, ''));
        const bBudget = parseFloat(b.budget.replace(/[^0-9.-]+/g, ''));
        return bBudget - aBudget;
      });
      break;
    case 'lowest':
      filteredJobs.value.sort((a, b) => {
        const aBudget = parseFloat(a.budget.replace(/[^0-9.-]+/g, ''));
        const bBudget = parseFloat(b.budget.replace(/[^0-9.-]+/g, ''));
        return aBudget - bBudget;
      });
      break;
  }
};
</script>