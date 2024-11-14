import 'uno.css'

import { defineApp } from 'iles'
import pinia from '@/plugins/pinia'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
    app.use(primeVuePlugin, primeVueConfig)
  },
})