<template>
    <section class="bg-gradient-to-br from-blue-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-extrabold text-white text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="relative group">
            <div class="absolute inset-0 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:scale-105"></div>
            <div class="relative p-6 flex flex-col h-full">
              <div class="flex-1">
                <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <component :is="service.icon" class="w-8 h-8" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 text-center mb-4">{{ service.title }}</h3>
                <p class="text-gray-600 text-center mb-6">{{ service.description }}</p>
              </div>
              <ul class="space-y-2">
                <li v-for="feature in service.features" :key="feature" class="flex items-center text-gray-700">
                  <CheckIcon class="w-5 h-5 mr-2 text-green-500" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-16 text-center">
          <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
            <ArrowRightIcon class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { DollarSignIcon, UsersIcon, BarChartIcon, CheckIcon, ArrowRightIcon } from 'lucide-vue-next';
  
  const services = ref([
    {
      title: 'Finance Management',
      description: 'Streamline your financial processes with our cutting-edge solutions integrated with Microsoft Dynamics 365.',
      icon: DollarSignIcon,
      features: [
        'Real-time financial reporting',
        'Automated invoice processing',
        'Cash flow forecasting',
      ],
    },
    {
      title: 'HR Solutions',
      description: 'Empower your HR team with our user-friendly portals and Microsoft Dynamics 365 integration.',
      icon: UsersIcon,
      features: [
        'Employee self-service portal',
        'Performance management',
        'Recruitment and onboarding automation',
      ],
    },
    {
      title: 'CRM Solutions',
      description: 'Elevate your customer relationships with our CRM solutions built on Microsoft Dynamics 365.',
      icon: BarChartIcon,
      features: [
        '360-degree customer view',
        'Sales pipeline management',
        'Marketing automation integration',
      ],
    },
  ]);
  </script>
  
  <style scoped>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .group:hover .w-16 {
    animation: float 2s ease-in-out infinite;
  }
  </style>