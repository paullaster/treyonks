<template>
    <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-8">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
              Discover Innovation
            </h1>
            <p class="text-xl text-gray-600 animate-fade-in-delay-1">
              Empowering your business with personalized Microsoft 365 Dynamics and CRM solutions.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
              <a href="/services" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105">
                Our Services
              </a>
              <button @click="learnMore" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
  
          <!-- Image -->
          <div class="relative h-64 sm:h-72 md:h-96 animate-fade-in-delay-3">
            <img :src="HomePageDecoImg" alt="Modern office desk setup" class="w-full h-full object-cover rounded-lg shadow-lg">
            <div class="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import HomePageDecoImg from '@/assets/Light+Objects+1.png'
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const learnMore = () => {
    router.push({name: 'contact'  });
  };
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-fade-in-delay-1 {
    animation: fadeIn 0.6s ease-out 0.2s forwards;
    opacity: 0;
  }
  
  .animate-fade-in-delay-2 {
    animation: fadeIn 0.6s ease-out 0.4s forwards;
    opacity: 0;
  }
  
  .animate-fade-in-delay-3 {
    animation: fadeIn 0.6s ease-out 0.6s forwards;
    opacity: 0;
  }
  </style>