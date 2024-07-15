<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

h1, h2 {
  color: #2e3d49;
}

button {
  cursor: pointer;
}

.landing {
  background-image: linear-gradient(
      rgba(0, 123, 255, 0.74), 
      rgba(0, 123, 255, 0.836)
    ),
    url('@/assets/background.jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  animation: fadeIn 2s ease-in-out;
}

.call-to-action {
  margin-top: 20px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>