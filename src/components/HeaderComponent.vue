<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300 flex">
            <img :src="LogoPNG" alt="treyonks technology limited logo" class="h-10">
            <span class="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300">Treyonks Limited</span>
          </a>
        </div>

        <!-- Navigation for larger screens -->
        <nav class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item.name" :href="item.href"
             class="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
             :class="{ 'bg-indigo-100 text-indigo-700': item.current }"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <button @click="requestDemo" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            REQUEST A DEMO
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-600 hover:text-indigo-600 focus:outline-none">
            <MenuIcon v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <XIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a v-for="item in navItems" :key="item.name" :href="item.href"
               class="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
               :class="{ 'bg-indigo-100 text-indigo-700': item.current }"
            >
              {{ item.name }}
            </a>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-200">
            <button @click="requestDemo" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              REQUEST A DEMO
            </button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { MenuIcon, XIcon } from 'lucide-vue-next';
import LogoPNG from "@/assets/logo.clear.png";

const navItems = [
  { name: 'Services', href: '/services', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const requestDemo = () => {
  // Implement your demo request logic here
  console.log('Demo requested');
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

header {
  animation: fadeIn 0.5s ease-out;
}

nav a, button {
  transition: all 0.3s ease;
}

nav a:hover, button:hover {
  transform: translateY(-2px);
}
</style>