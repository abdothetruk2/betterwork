import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null,
  }),
  
  getters: {
    getUser: (state) => state.user,
    isUserAuthenticated: (state) => state.isAuthenticated,
  },
  
  actions: {
    async login(credentials) {
      this.loading = true;
      this.error = null;
      
      try {
        // Here you would make an API call to your authentication endpoint
        // For now, we'll simulate a successful login
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate a successful response
        const response = {
          user: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: credentials.email,
            avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
            role: 'freelancer',
          },
          token: 'mock-jwt-token',
        };
        
        this.user = response.user;
        this.token = response.token;
        this.isAuthenticated = true;
        
        // Store user data in cookies
        Cookies.set('auth_token', response.token, { expires: 7 });
        Cookies.set('user', JSON.stringify(response.user), { expires: 7 });
        
        return { success: true };
      } catch (error) {
        this.error = error.message || 'Failed to login';
        return { success: false, error: this.error };
      } finally {
        this.loading = false;
      }
    },
    
    async logout() {
      // Clear user data
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      
      // Remove cookies
      Cookies.remove('auth_token');
      Cookies.remove('user');
      
      return { success: true };
    },
    
    async checkAuth() {
      const token = Cookies.get('auth_token');
      const userData = Cookies.get('user');
      
      if (!token || !userData) {
        this.isAuthenticated = false;
        return { authenticated: false };
      }
      
      try {
        const user = JSON.parse(userData);
        this.user = user;
        this.token = token;
        this.isAuthenticated = true;
        
        return { authenticated: true };
      } catch (error) {
        this.user = null;
        this.token = null;
        this.isAuthenticated = false;
        Cookies.remove('auth_token');
        Cookies.remove('user');
        
        return { authenticated: false };
      }
    },
  },
});