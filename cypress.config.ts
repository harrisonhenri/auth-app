import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: true,
    baseUrl: 'http://localhost:5173',
  },
})
