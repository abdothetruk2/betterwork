<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <div class="page-container">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">How BetterWork Works</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're looking to hire top talent or find great projects, BetterWork makes it simple and secure.
          </p>
        </div>

        <!-- Process Steps -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <!-- For Clients -->
          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">For Clients</h2>
            
            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">1</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Post Your Job</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Describe your project, set your budget, and specify the skills you're looking for.
                </p>
              </div>
            </div>

            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">2</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Review Proposals</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Receive detailed proposals from qualified freelancers. Compare their profiles, portfolios, and reviews.
                </p>
              </div>
            </div>

            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">3</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hire & Work Together</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Select the best fit, set milestones, and collaborate seamlessly through our platform.
                </p>
              </div>
            </div>

            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <span class="text-xl font-semibold text-primary-600 dark:text-primary-300">4</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pay Securely</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Only release payments when you're satisfied with the work. Our escrow system protects both parties.
                </p>
              </div>
            </div>

            <div class="mt-8">
              <NuxtLink to="/post-job" class="btn btn-primary">
                Post a Job
              </NuxtLink>
            </div>
          </div>

          <!-- For Freelancers -->
          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">For Freelancers</h2>
            
            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900">
                <span class="text-xl font-semibold text-secondary-600 dark:text-secondary-300">1</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create Your Profile</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Showcase your skills, experience, and portfolio to stand out to potential clients.
                </p>
              </div>
            </div>

            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900">
                <span class="text-xl font-semibold text-secondary-600 dark:text-secondary-300">2</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Find Relevant Jobs</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Browse projects that match your skills and interests. Our AI matching helps you find the best opportunities.
                </p>
              </div>
            </div>

            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900">
                <span class="text-xl font-semibold text-secondary-600 dark:text-secondary-300">3</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submit Strong Proposals</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Send personalized proposals that highlight your expertise and explain how you can help the client succeed.
                </p>
              </div>
            </div>

            <div class="relative pl-16">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900">
                <span class="text-xl font-semibold text-secondary-600 dark:text-secondary-300">4</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get Paid Reliably</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Receive payments securely through our platform. Set up milestones for larger projects.
                </p>
              </div>
            </div>

            <div class="mt-8">
              <NuxtLink to="/create-profile" class="btn btn-primary">
                Create Profile
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-20">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Why Choose BetterWork</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="flex justify-center mb-4">
                <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3">
                  <Icon name="heroicons:shield-check" class="h-6 w-6 text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Payments</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Our escrow system ensures safe transactions and protects both parties.
              </p>
            </div>

            <div class="text-center">
              <div class="flex justify-center mb-4">
                <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3">
                  <Icon name="heroicons:user-group" class="h-6 w-6 text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quality Talent</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Access a global pool of pre-vetted professionals across various skills.
              </p>
            </div>

            <div class="text-center">
              <div class="flex justify-center mb-4">
                <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3">
                  <Icon name="heroicons:chat-bubble-left-right" class="h-6 w-6 text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Our dedicated team is always here to help you succeed.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center bg-primary-600 rounded-lg p-12">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p class="text-xl text-primary-100 mb-8">
            Join thousands of successful freelancers and businesses on BetterWork.
          </p>
          <div class="flex justify-center space-x-4">
            <NuxtLink to="/auth/signup?type=client" class="btn bg-white text-primary-600 hover:bg-primary-50">
              I'm a Client
            </NuxtLink>
            <NuxtLink to="/auth/signup?type=freelancer" class="btn bg-primary-700 text-white hover:bg-primary-800 border border-primary-500">
              I'm a Freelancer
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>