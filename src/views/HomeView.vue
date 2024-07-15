<template>
   <div class="landing">
    <div>
      <h1>Welcome to Treyonks Technology Limited</h1>
      <p>
        At Treyonks Technology Limited, we specialize in providing comprehensive support and customized solutions for Dynamics Business Central and Dynamics CRM.
      </p>
      <!--<p class="typing-text">{{ displayedText }}</p>-->
      <div class="call-to-action">
        <v-btn color="primary" large to="/about" class="mr-6">Learn More</v-btn>
        <v-btn color="secondary" large to="/contact">Contact Us</v-btn>
      </div>
    </div>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <AboutViewVue />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ServiceComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ServiceComponent from '@/components/ServicesComponents.vue'
import AboutViewVue from './AboutView.vue'
import { onMounted, ref } from 'vue';

const text = "At Treyonks Technology Limited, we specialize in providing comprehensive support and customized solutions for Dynamics Business Central and Dynamics CRM.";
const displayedText = ref("");
const wordIndex = ref(0);
const words = ref([]);

onMounted(() => {
  words.value = text.split(" ");
  console.log(words.value)
    typeWords();
})

function typeWords() {
      if (wordIndex.value < words.value.length) {
        displayedText.value += words.value[wordIndex.value] + " ";
        wordIndex.value++;
        setTimeout(typeWords, 300); // Adjust the speed here
      } else {
        setTimeout(resetTyping, 120000); // Pause before restarting
      }
    };
function resetTyping() {
      displayedText.value = "";
      wordIndex.value = 0;
      typeWords();
    }

</script>
<style scoped>

.v-toolbar-title {
  font-size: 24px;
  font-weight: bold;
}
.typing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
}

.typing-text {
  font-size: 1.5rem;
  border-right: 2px solid #2e3d49;
  white-space: nowrap;
  overflow: hidden;
  animation: blink-caret 0.7s step-end infinite;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #2e3d49;
  }
}
</style>
