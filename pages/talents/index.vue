<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Find Talent</h1>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Discover skilled professionals for your projects</p>
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
                  placeholder="Search by skill, title, or keyword"
                  class="form-input w-full pl-10"
                  v-model="searchQuery"
                  @input="filterTalents"
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
                      <h3 class="font-medium text-gray-900 dark:text-white mb-2">Experience Level</h3>
                      <div class="space-y-2">
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.experienceLevels" value="Entry" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Entry Level</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.experienceLevels" value="Intermediate" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Intermediate</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.experienceLevels" value="Expert" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">Expert</span>
                        </label>
                      </div>

                      <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>

                      <h3 class="font-medium text-gray-900 dark:text-white mb-2">Hourly Rate</h3>
                      <div class="space-y-2">
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.hourlyRates" value="0-25" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">$0 - $25</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.hourlyRates" value="25-50" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">$25 - $50</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.hourlyRates" value="50-100" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">$50 - $100</span>
                        </label>
                        <label class="flex items-center">
                          <input type="checkbox" v-model="filters.hourlyRates" value="100+" class="text-primary-600 rounded" @change="filterTalents" />
                          <span class="ml-2 text-gray-700 dark:text-gray-300">$100+</span>
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
                          @click.prevent="sortBy('rating')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Highest Rated
                        </a>
                      </HeadlessMenuItem>
                      <HeadlessMenuItem v-slot="{ active }">
                        <a 
                          href="#" 
                          @click.prevent="sortBy('experience')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Most Experienced
                        </a>
                      </HeadlessMenuItem>
                      <HeadlessMenuItem v-slot="{ active }">
                        <a 
                          href="#" 
                          @click.prevent="sortBy('hourlyRate')"
                          :class="[active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300', 'block px-4 py-2 text-sm']"
                        >
                          Lowest Rate
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
            <div v-for="level in filters.experienceLevels" :key="`el-${level}`" 
                 class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {{ level }}
              <button @click="removeFilter('experienceLevels', level)" class="ml-1 text-primary-500 hover:text-primary-600">
                <Icon name="heroicons:x-mark" class="h-3 w-3" />
              </button>
            </div>
            <div v-for="rate in filters.hourlyRates" :key="`hr-${rate}`" 
                 class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300">
              ${{ rate }}
              <button @click="removeFilter('hourlyRates', rate)" class="ml-1 text-secondary-500 hover:text-secondary-600">
                <Icon name="heroicons:x-mark" class="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        <!-- Results count -->
        <div class="flex justify-between items-center mb-6">
          <p class="text-gray-600 dark:text-gray-300">
            Showing <span class="font-medium">{{ filteredTalents.length }}</span> talents
          </p>
        </div>

        <!-- Talents grid -->
        <div v-if="loading" class="flex justify-center py-12">
          <svg class="animate-spin h-10 w-10 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <div v-else-if="filteredTalents.length === 0" class="card p-12 text-center">
          <Icon name="heroicons:user-group" class="h-16 w-16 mx-auto text-gray-400" />
          <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">No talents found</h3>
          <p class="mt-2 text-gray-500 dark:text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button @click="resetFilters" class="mt-4 btn btn-primary">
            Clear filters
          </button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="talent in filteredTalents" :key="talent.id" 
               class="card hover:shadow-lg transition-shadow duration-200 animate-fade-in">
            <div class="p-6">
              <div class="flex items-start">
                <img :src="talent.avatar" :alt="talent.name" class="h-16 w-16 rounded-full object-cover" />
                <div class="ml-4">
                  <NuxtLink :to="`/talents/${talent.id}`" class="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                    {{ talent.name }}
                  </NuxtLink>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.title }}</p>
                  <div class="mt-1 flex items-center">
                    <div class="flex text-accent-500">
                      <Icon name="heroicons:star" class="h-4 w-4" v-for="i in Math.floor(talent.rating)" :key="i" />
                    </div>
                    <span class="ml-1 text-sm text-gray-500 dark:text-gray-400">
                      ({{ talent.reviewCount }} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {{ talent.bio }}
                </p>
              </div>

              <div class="mt-4 flex flex-wrap gap-1">
                <span v-for="(skill, index) in talent.skills" :key="index" 
                      class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  {{ skill }}
                </span>
              </div>

              <div class="mt-4 flex items-center justify-between">
                <div>
                  <span class="text-lg font-semibold text-gray-900 dark:text-white">${{ talent.hourlyRate }}</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">/hr</span>
                </div>
                <button class="btn btn-primary">
                  Contact
                </button>
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
const talents = ref([]);
const filteredTalents = ref([]);

const filters = reactive({
  experienceLevels: [],
  hourlyRates: [],
});

const hasActiveFilters = computed(() => {
  return filters.experienceLevels.length > 0 || filters.hourlyRates.length > 0;
});

const sampleTalents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Experienced full stack developer with 8+ years of experience in React, Node.js, and Python. Specialized in building scalable web applications.',
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 85,
    experienceLevel: 'Expert',
    skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Creative UI/UX designer focused on creating beautiful and functional user experiences. Expertise in Figma and Adobe Creative Suite.',
    rating: 4.8,
    reviewCount: 93,
    hourlyRate: 65,
    experienceLevel: 'Intermediate',
    skills: ['UI Design', 'UX Design', 'Figma', 'Adobe XD', 'Prototyping'],
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Mobile App Developer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Mobile app developer specializing in iOS and Android development. Strong background in React Native and Flutter.',
    rating: 4.7,
    reviewCount: 78,
    hourlyRate: 75,
    experienceLevel: 'Expert',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'DevOps Engineer',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'DevOps engineer with expertise in cloud infrastructure, CI/CD pipelines, and container orchestration.',
    rating: 4.9,
    reviewCount: 112,
    hourlyRate: 95,
    experienceLevel: 'Expert',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  },
  {
    id: 5,
    name: 'Lisa Wang',
    title: 'Data Scientist',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Data scientist with a focus on machine learning and predictive analytics. Experience with Python, TensorFlow, and scikit-learn.',
    rating: 4.8,
    reviewCount: 86,
    hourlyRate: 90,
    experienceLevel: 'Expert',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Data Analysis'],
  },
  {
    id: 6,
    name: 'James Wilson',
    title: 'WordPress Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'WordPress expert specializing in custom theme development and plugin creation. Strong PHP and JavaScript skills.',
    rating: 4.6,
    reviewCount: 143,
    hourlyRate: 45,
    experienceLevel: 'Intermediate',
    skills: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'WooCommerce'],
  },
];

onMounted(async () => {
  // Simulate data loading
  await new Promise(resolve => setTimeout(resolve, 1000));
  talents.value = sampleTalents;
  filteredTalents.value = [...talents.value];
  loading.value = false;
});

const filterTalents = () => {
  // Reset to all talents
  let result = [...talents.value];
  
  // Apply search query filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(talent => 
      talent.name.toLowerCase().includes(query) || 
      talent.title.toLowerCase().includes(query) ||
      talent.bio.toLowerCase().includes(query) ||
      talent.skills.some(skill => skill.toLowerCase().includes(query))
    );
  }
  
  // Apply experience level filter
  if (filters.experienceLevels.length > 0) {
    result = result.filter(talent => filters.experienceLevels.includes(talent.experienceLevel));
  }
  
  // Apply hourly rate filter
  if (filters.hourlyRates.length > 0) {
    result = result.filter(talent => {
      return filters.hourlyRates.some(range => {
        const [min, max] = range.split('-').map(Number);
        if (range.endsWith('+')) {
          return talent.hourlyRate >= parseInt(range);
        }
        return talent.hourlyRate >= min && talent.hourlyRate <= (max || Infinity);
      });
    });
  }
  
  filteredTalents.value = result;
};

const removeFilter = (filterType, value) => {
  filters[filterType] = filters[filterType].filter(item => item !== value);
  filterTalents();
};

const resetFilters = () => {
  searchQuery.value = '';
  filters.experienceLevels = [];
  filters.hourlyRates = [];
  filterTalents();
};

const sortBy = (option) => {
  switch (option) {
    case 'rating':
      filteredTalents.value.sort((a, b) => b.rating - a.rating);
      break;
    case 'experience':
      filteredTalents.value.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
    case 'hourlyRate':
      filteredTalents.value.sort((a, b) => a.hourlyRate - b.hourlyRate);
      break;
  }
};
</script>