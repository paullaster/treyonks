<template>
  <div class="landing">
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
      <v-img :src="HomePageDecoImg" alt="Hero" height="480px" class="rounded-lg"></v-img>
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
import { onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import ColorsHelper from '@/utils/ColorsHelper'
import HomePageDecoImg from "@/assets/Light+Objects+1.png"

// VUETIFY UTILS
const { mdAndDown } = useDisplay()

const text =
  'At Treyonks Technology Limited, we specialize in providing comprehensive support and customized solutions for Dynamics Business Central and Dynamics CRM.'
const displayedText = ref('')
const wordIndex = ref(0)
const words = ref([])

onMounted(() => {
  words.value = text.split(' ')
  console.log(words.value)
  typeWords()
})

function typeWords() {
  if (wordIndex.value < words.value.length) {
    displayedText.value += words.value[wordIndex.value] + ' '
    wordIndex.value++
    setTimeout(typeWords, 300) // Adjust the speed here
  } else {
    setTimeout(resetTyping, 120000) // Pause before restarting
  }
}
function resetTyping() {
  displayedText.value = ''
  wordIndex.value = 0
  typeWords()
}
</script>
