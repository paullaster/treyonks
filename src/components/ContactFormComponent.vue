<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <!-- Contact Information Section -->
        <div class="md:w-1/3 bg-gradient-to-b from-indigo-600 to-purple-700 p-8 text-white">
          <h2 class="text-3xl font-extrabold mb-6">Contact Us</h2>
          <p class="mb-8 text-indigo-100">We'd love to hear from you. Fill out the form and we'll be in touch as soon as possible.</p>
          <div class="space-y-4">
            <div class="flex items-center">
              <UserIcon class="w-6 h-6 mr-4" />
              <div>
                <p class="font-semibold">Chris Makau</p>
                <p class="text-sm text-indigo-200">Chief Customer Relations Officer</p>
              </div>
            </div>
            <div class="flex items-center">
              <PhoneIcon class="w-6 h-6 mr-4" />
              <p>(+2547) 25 863023</p>
            </div>
            <div class="flex items-center">
              <MailIcon class="w-6 h-6 mr-4" />
              <p>cmakau@treyonks.com</p>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="md:w-2/3 p-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model="form.name" type="text" id="name" required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                :class="{ 'border-red-500': errors.name }"
              >
              <p v-if="errors.name" class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="form.email" type="email" id="email" required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                :class="{ 'border-red-500': errors.email }"
              >
              <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea v-model="form.message" id="message" rows="4" required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-2 text-sm text-red-600">{{ errors.message }}</p>
            </div>
            <div>
              <button type="submit"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { UserIcon, PhoneIcon, MailIcon } from 'lucide-vue-next';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitted = ref(false);

const validateForm = () => {
  let isValid = true;
  errors.name = '';
  errors.email = '';
  errors.message = '';

  if (!form.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Invalid email format';
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form);
    isSubmitted.value = true;
    // Reset form after submission
    Object.keys(form).forEach(key => form[key] = '');
    // Show a success message (you can replace this with a more sophisticated notification system)
    alert('Thank you for your message! We will get back to you soon.');
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.md\:flex > div {
  animation: fadeIn 0.5s ease-out forwards;
}

.md\:flex > div:nth-child(2) {
  animation-delay: 0.2s;
}

input, textarea {
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>