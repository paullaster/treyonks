<template>
  <section :class="lgAndUp ? 'about_Desktop' :'about'">
    <div v-if="lgAndUp" class="about_img_card">
      <v-img :src="aboutIMG"></v-img>
    </div>
    <div class="about_description">
      <h2>{{ Aboutheading }}</h2>
    <!-- <p class="about_description">
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
    </p> -->
    <p>
      We are more than just a service provider. We are a strategic partner, dedicated to empowering
      businesses with tailored Dynamics solutions that drive exceptional results. Our unwavering
      commitment to excellence and our passion for innovation fuel our mission to help clients
      achieve their ambitious goals.
    </p>
    <v-btn :color="ColorsHelper.getColor('primary')" :block="!lgAndUp" class="rounded-pill" size="x-large">
      Learn more
    </v-btn>
    </div>
  </section>
</template>

<script setup>
import ColorsHelper from '@/utils/ColorsHelper';
import { computed } from 'vue';
import aboutIMG from "@/assets/Light+Objects+2.png";
import { useDisplay } from 'vuetify/lib/framework.mjs';



//VUETIFY
const {lgAndUp} = useDisplay();
const Aboutheading = computed(()=> {
  return  window.location.href.includes('/about') ?
   'Who we are':'About our brand';
})
</script>

