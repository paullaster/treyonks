<template>
    <section class="book_demo">
       <h4>Book a free Consultation</h4>
       <div class="book_button">
           <v-btn class="rounded-pill" size="x-large" block :color="ColorsHelper.getColor('header')">Book Now</v-btn>
       </div>
    </section>
</template>

<script setup>
import ColorsHelper from '@/utils/ColorsHelper';

</script>

<style scoped>

</style>