<template>
  <section class="about">
    <h2>{{ Aboutheading }}</h2>
    <p class="about_description">
      <span class="key_text">
        Vision:
      </span>
      <span class="value_text">
        To revolutionize the business landscape through innovative Dynamics solutions.
      </span>
    </p>
    <p class="about_description">
      <span class="key_text">Mission:</span>
      <span class="value_text">
        We are more than just a service provider. We are a strategic partner, dedicated to empowering
      businesses with tailored Dynamics solutions that drive exceptional results. Our unwavering
      commitment to excellence and our passion for innovation fuel our mission to help clients
      achieve their ambitious goals.
      </span>
    </p>
    <v-btn :color="ColorsHelper.getColor('primary')" block class="rounded-pill" size="x-large">
      Learn more
    </v-btn>
  </section>
</template>

<script setup>
import ColorsHelper from '@/utils/ColorsHelper';
import { computed } from 'vue';

const Aboutheading = computed(()=> {
  return  window.location.href.includes('/about') ?
   'Who we are':'About our brand';
})
</script>

