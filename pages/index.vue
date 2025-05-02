<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8 space-y-6 animate-slide-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover the Better Way to Work
          </h1>
          <p class="text-lg md:text-xl opacity-90 max-w-2xl">
            Connect with the world's best talent for your projects or find your dream jobs. BetterWork makes the process seamless, transparent, and rewarding.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
            <NuxtLink to="/auth/signup" class="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary-700 shadow-lg">
              Sign up for free
            </NuxtLink>
            <NuxtLink to="/how-it-works" class="btn bg-primary-800 text-white hover:bg-primary-900 border border-primary-600">
              How it works
            </NuxtLink>
          </div>
        </div>
        <div class="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
               alt="People working together" 
               class="rounded-lg shadow-2xl max-w-full mx-auto" />
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" 
                d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Why Choose BetterWork</h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our platform offers features designed to make freelancing and hiring simpler, faster, and more successful.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" 
               class="card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mb-4">
              <Icon :name="feature.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Success Stories</h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Hear from our community of freelancers and clients who've found success on BetterWork.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" 
               class="card p-6 flex flex-col h-full">
            <div class="flex-grow">
              <div class="flex items-center mb-4">
                <div class="text-accent-500">
                  <Icon name="heroicons:star" class="w-5 h-5 inline-block" v-for="i in 5" :key="i" />
                </div>
              </div>
              <blockquote class="text-gray-600 dark:text-gray-300 mb-6">
                {{ testimonial.quote }}
              </blockquote>
            </div>
            <div class="flex items-center mt-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="h-10 w-10 rounded-full mr-4" />
              <div>
                <p class="font-medium text-gray-900 dark:text-white">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Statistics -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in stats" :key="index" class="p-6">
            <div class="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">{{ stat.value }}</div>
            <div class="text-gray-500 dark:text-gray-400 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-accent-500 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p class="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of freelancers and businesses making work better every day.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <NuxtLink to="/auth/signup?type=client" class="btn bg-white text-accent-600 hover:bg-gray-100">
            I'm a Client
          </NuxtLink>
          <NuxtLink to="/auth/signup?type=freelancer" class="btn bg-accent-600 text-white hover:bg-accent-700 border border-accent-400">
            I'm a Freelancer
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'Smart Matching',
    description: 'Our AI-powered system connects you with the perfect talent or job opportunities based on your unique requirements.',
    icon: 'heroicons:puzzle-piece',
  },
  {
    title: 'Secure Payments',
    description: 'Get paid on time, every time with our secure payment protection system and milestone-based releases.',
    icon: 'heroicons:banknotes',
  },
  {
    title: 'Verified Talents',
    description: 'Every freelancer is thoroughly vetted to ensure quality, reliability, and professionalism.',
    icon: 'heroicons:check-badge',
  },
  {
    title: 'Transparent Fees',
    description: 'No hidden charges. Our fee structure is clear and competitive to maximize your earnings.',
    icon: 'heroicons:document-text',
  },
  {
    title: 'Collaborative Tools',
    description: 'Built-in tools for seamless communication, file sharing, and project management.',
    icon: 'heroicons:chat-bubble-bottom-center-text',
  },
  {
    title: 'Work Protection',
    description: 'Contracts, NDAs, and dispute resolution to ensure all parties are protected and satisfied.',
    icon: 'heroicons:shield-check',
  },
];

const testimonials = [
  {
    quote: 'BetterWork transformed how I find clients. The platform\'s clean design and intuitive workflow made it easy to showcase my portfolio and connect with quality clients.',
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote: 'As a startup founder, I needed to find specialized talent quickly. BetterWork\'s matching system found me the perfect developer within 48 hours. The quality exceeded my expectations.',
    name: 'Michael Chen',
    role: 'Startup Founder',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    quote: 'The milestone payment system gave me peace of mind. I could focus on the creative process knowing that my work and payment were secured by BetterWork\'s protection.',
    name: 'Elena Rodriguez',
    role: 'Content Strategist',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const stats = [
  { value: '5M+', label: 'Registered Users' },
  { value: '$250M', label: 'Paid to Freelancers' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '150+', label: 'Countries Served' },
];
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}
</style>