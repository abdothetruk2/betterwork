<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Find Work on BetterWork</h1>
        
        <div class="prose dark:prose-invert max-w-none">
          <h2>Getting Started</h2>
          <p>Follow these steps to start your freelancing journey on BetterWork:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div class="card p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">1</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Create Your Profile</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Build a compelling profile showcasing your skills, experience, and portfolio.
                  </p>
                </div>
              </div>
              <NuxtLink to="/create-profile" class="btn btn-primary w-full justify-center">
                Create Profile
              </NuxtLink>
            </div>

            <div class="card p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">2</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Find Opportunities</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Browse and search for projects that match your skills and interests.
                  </p>
                </div>
              </div>
              <NuxtLink to="/jobs" class="btn btn-outline w-full justify-center">
                Browse Jobs
              </NuxtLink>
            </div>

            <div class="card p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">3</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Submit Proposals</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Send personalized proposals highlighting your expertise and approach.
                  </p>
                </div>
              </div>
            </div>

            <div class="card p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">4</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Deliver & Earn</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Complete projects successfully and build your reputation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Tips for Success</h2>
          <ul>
            <li>Keep your profile up-to-date with recent work</li>
            <li>Write compelling proposals tailored to each job</li>
            <li>Maintain clear communication with clients</li>
            <li>Deliver quality work on time</li>
            <li>Build long-term relationships with clients</li>
          </ul>

          <h2>Why Choose BetterWork</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="card p-6">
              <Icon name="heroicons:magnifying-glass" class="h-8 w-8 text-primary-500 mb-4" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Quality Projects</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Access a wide range of verified clients and exciting projects.
              </p>
            </div>

            <div class="card p-6">
              <Icon name="heroicons:banknotes" class="h-8 w-8 text-primary-500 mb-4" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Secure Payments</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Get paid on time with our secure payment protection system.
              </p>
            </div>

            <div class="card p-6">
              <Icon name="heroicons:chart-bar" class="h-8 w-8 text-primary-500 mb-4" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Career Growth</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Build your portfolio and grow your freelancing career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>