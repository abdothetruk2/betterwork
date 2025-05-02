<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to Hire on BetterWork</h1>
        
        <div class="prose dark:prose-invert max-w-none">
          <h2>Getting Started</h2>
          <p>Follow these simple steps to find and hire the perfect talent for your project:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div class="card p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">1</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Post a Job</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Create a detailed job posting describing your project requirements, budget, and timeline.
                  </p>
                </div>
              </div>
              <NuxtLink to="/post-job" class="btn btn-primary w-full justify-center">
                Post a Job
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
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Review Proposals</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Receive and evaluate proposals from qualified freelancers interested in your project.
                  </p>
                </div>
              </div>
              <NuxtLink to="/talents" class="btn btn-outline w-full justify-center">
                Browse Talents
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
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Interview & Select</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Chat with potential candidates and choose the best fit for your project.
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
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Work & Pay</h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Collaborate through our platform and pay securely using milestone payments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Tips for Successful Hiring</h2>
          <ul>
            <li>Write clear and detailed job descriptions</li>
            <li>Set realistic budgets and timelines</li>
            <li>Review portfolios and past work carefully</li>
            <li>Communicate expectations clearly</li>
            <li>Use milestone payments for larger projects</li>
          </ul>

          <h2>Why Choose BetterWork</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="card p-6">
              <Icon name="heroicons:shield-check" class="h-8 w-8 text-primary-500 mb-4" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Verified Talents</h3>
              <p class="text-gray-500 dark:text-gray-400">
                All freelancers are thoroughly vetted to ensure quality and professionalism.
              </p>
            </div>

            <div class="card p-6">
              <Icon name="heroicons:banknotes" class="h-8 w-8 text-primary-500 mb-4" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Secure Payments</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Payment protection and milestone-based releases for peace of mind.
              </p>
            </div>

            <div class="card p-6">
              <Icon name="heroicons:chat-bubble-left-right" class="h-8 w-8 text-primary-500 mb-4" />
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Our dedicated team is always here to help with any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>