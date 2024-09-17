<template>
  <div class="content-wrapper">
    <p class="description">
      <span>
        Vision:
      </span>
      <span>
        To revolutionize the business landscape through innovative Dynamics solutions.
      </span>
    </p>
    <p class="description">
      <span>Mission:</span>
      <span>
        We are more than just a service provider. We are a strategic partner, dedicated to empowering
      businesses with tailored Dynamics solutions that drive exceptional results. Our unwavering
      commitment to excellence and our passion for innovation fuel our mission to help clients
      achieve their ambitious goals.
      </span>
    </p>
    <v-btn :color="ColorsHelper.getColor('primary')">
      Learn more
    </v-btn>
  </div>
</template>

<script setup>
import ColorsHelper from '@/utils/ColorsHelper';

</script>

<style scoped>
/* .vision-mission-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}

.content-wrapper {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
}

.title {
  font-size: 2.5rem;
  color: #2e3d49;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
} */
</style>

