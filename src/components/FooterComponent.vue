<template>
  <footer class="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo and Company Info -->
      <div class="space-y-4">
        <img :src="LogoPngClear" alt="Company Logo" class="h-40" />
        <p class="text-sm text-gray-300">Empowering businesses with innovative solutions.</p>
      </div>

      <!-- Explore Section -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Explore</h3>
        <ul class="space-y-2">
          <li v-for="link in exploreLinks" :key="link.text">
            <a :href="link.url" class="text-gray-300 hover:text-white transition duration-300 ease-in-out">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <!-- Engagement Section -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
        <div class="flex space-x-4">
          <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="text-gray-300 hover:text-white transition duration-300 ease-in-out">
            <component :is="social.icon" class="w-6 h-6" />
            <span class="sr-only">{{ social.name }}</span>
          </a>
        </div>
      </div>

      <!-- Newsletter Subscription -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
        <form @submit.prevent="subscribeNewsletter" class="space-y-4">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input v-model="email" type="email" id="email" required
              placeholder="Enter your email"
              class="w-full px-3 py-2 bg-blue-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              :class="{ 'border-red-500': emailError }"
            >
            <p v-if="emailError" class="mt-2 text-sm text-red-400">{{ emailError }}</p>
          </div>
          <button type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-gray-400">
      © {{ new Date().getFullYear() }} Treyonks. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next';
import LogoPngClear from "@/assets/logo.svg";

const exploreLinks = [
  { text: 'Home', url: '/' },
  { text: 'Services', url: '/services' },
  { text: 'About Us', url: '/about' },
  { text: 'Contact', url: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com' },
];

const email = ref('');
const emailError = ref('');

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const subscribeNewsletter = () => {
  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address.';
    return;
  }
  
  emailError.value = '';
  // Here you would typically send the email to your backend
  console.log('Subscribed:', email.value);
  // Show a success message (you can replace this with a more sophisticated notification system)
  alert('Thank you for subscribing to our newsletter!');
  email.value = '';
};
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.grid > div {
  animation: fadeInUp 0.5s ease-out forwards;
}

.grid > div:nth-child(2) { animation-delay: 0.1s; }
.grid > div:nth-child(3) { animation-delay: 0.2s; }
.grid > div:nth-child(4) { animation-delay: 0.3s; }

a, button {
  transition: all 0.3s ease;
}

a:hover, button:hover {
  transform: translateY(-2px);
}
</style>