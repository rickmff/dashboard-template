import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
    hasCompletedOnboarding: localStorage.getItem('hasCompletedOnboarding') === 'true' || false
  }),
  actions: {
    authorizeUser() {
      localStorage.setItem('isAuthenticated', 'true');
    },
    completeOnboarding() {
      localStorage.setItem('hasCompletedOnboarding', 'true');
    },
    logoutUser() {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('hasCompletedOnboarding');
    }
  }
})
