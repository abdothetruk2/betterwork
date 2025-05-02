<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how freelancers and clients are achieving their goals with BetterWork.
          </p>
        </div>

        <!-- Featured Success Story -->
        <div class="card p-8 mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                class="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span class="text-primary-600 dark:text-primary-400 font-medium">Featured Story</span>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                "BetterWork helped us scale our development team globally"
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Learn how TechStart increased their development capacity by 300% while reducing costs by leveraging BetterWork's global talent pool.
              </p>
              <div class="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="John Smith" 
                  class="h-12 w-12 rounded-full"
                />
                <div class="ml-4">
                  <p class="font-medium text-gray-900 dark:text-white">John Smith</p>
                  <p class="text-gray-500 dark:text-gray-400">CTO at TechStart</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Stories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="card p-6">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Success story" 
              class="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              From Freelancer to Agency Owner
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Sarah's journey from solo designer to running her own creative agency through BetterWork.
            </p>
            <button class="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300">
              Read More →
            </button>
          </div>

          <div class="card p-6">
            <img 
              src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Success story" 
              class="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Building a Global Product Team
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              How StartupX built their MVP with remote talent and secured Series A funding.
            </p>
            <button class="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300">
              Read More →
            </button>
          </div>

          <div class="card p-6">
            <img 
              src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Success story" 
              class="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              $1M in Freelance Earnings
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Mike's story of becoming a top-rated developer and reaching $1M in earnings.
            </p>
            <button class="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300">
              Read More →
            </button>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-8 text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Our Impact</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p class="text-4xl font-bold text-primary-600 dark:text-primary-400">$250M+</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2">Paid to Freelancers</p>
            </div>
            <div>
              <p class="text-4xl font-bold text-primary-600 dark:text-primary-400">50k+</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2">Successful Projects</p>
            </div>
            <div>
              <p class="text-4xl font-bold text-primary-600 dark:text-primary-400">150+</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2">Countries Represented</p>
            </div>
            <div>
              <p class="text-4xl font-bold text-primary-600 dark:text-primary-400">98%</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Write Your Success Story?</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and businesses who are achieving their goals with BetterWork.
          </p>
          <div class="flex justify-center space-x-4">
            <NuxtLink to="/auth/signup?type=freelancer" class="btn btn-primary">
              Start Freelancing
            </NuxtLink>
            <NuxtLink to="/auth/signup?type=client" class="btn btn-outline">
              Hire Talent
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>