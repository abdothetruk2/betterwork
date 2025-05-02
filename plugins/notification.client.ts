// plugins/notification.client.ts
import { defineNuxtPlugin } from '#app'
import Notifications from '@kyvg/vue3-notification'

// Remove the direct CSS import
// import '@kyvg/vue3-notification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // register the plugin
  nuxtApp.vueApp.use(Notifications)

  // expose the notify function as $notify
  // (Vue3 Notification registers `app.config.globalProperties.$notify`)
  nuxtApp.provide('notify', nuxtApp.vueApp.config.globalProperties.$notify)
})
