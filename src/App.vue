<template>
  <v-app>
    <HeaderComponent />
    <MobileViewNav v-if="!closed"/>
    <v-main v-if="closed">
      <router-view v-slot="{Component, route}">
        <transition name="fade">
        <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </v-main>
    <FooterComponent v-if="closed"/>
  </v-app>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import MobileViewNav from './components/MobileViewNav.vue';
import { useGlobal } from './stores';
import { storeToRefs } from 'pinia';

// STATE
const globalStore = useGlobal();
const { closed } = storeToRefs(globalStore);
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

/* h1, h2 {
  /* color: #0b5b9c; */
  /* color: rgb(24, 103, 192);
} */

/* button {
  cursor: pointer;
} */
/* 
.landing {
  background-image: linear-gradient(
      rgba(1, 8, 15, 0.74), 
      rgba(0, 0, 0, 0.836)
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
} */

/* .call-to-action {
  margin-top: 20px;
} */

/* @keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}  */
</style>