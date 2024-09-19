<template>
  <div :class="mdAndDown ? `landing mobile-lading` : `landing desktop_landing`">
    <div class="landing-section-1">
      <h3><span>Discover</span> <span>Innovation</span></h3>
      <p>Empowering your business with personalized Microsoft 365 Dynamics and CRM solutions.</p>
      <div class="call-to-action">
        <v-btn
          :color="ColorsHelper.getColor('primary')"
          large
          to="/about"
          class="mr-6 rounded-pill"
          desity="default"
          size="x-large"
          >Learn More</v-btn
        >
      </div>
    </div>
    <div class="hero-image">
      <v-img :src="HomePageDecoImg" alt="Hero" height="100%" class="rounded-lg"></v-img>
    </div>
  </div>
  <ServiceComponent />
  <BookDemo />
  <AboutViewVue />
</template>

<script setup>
import ServiceComponent from '@/components/ServicesComponents.vue'
import BookDemo from '@/components/BookDemo.vue'
import AboutViewVue from './AboutView.vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import ColorsHelper from '@/utils/ColorsHelper'
import HomePageDecoImg from "@/assets/Light+Objects+1.png"

// VUETIFY UTILS
const { mdAndDown } = useDisplay()

</script>
