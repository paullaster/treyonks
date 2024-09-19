<template>
    <section :class=" mdAndDown ? 'demo_page book_demo' : ' demo_page book_demo_desktop'">
       <h4>Book a free Consultation</h4>
       <div class="book_button">
           <v-btn class="rounded-pill" size="x-large" :block="mdAndDown" :color="ColorsHelper.getColor('header')" width="400px">Book Now</v-btn>
       </div>
    </section>
</template>

<script setup>
import ColorsHelper from '@/utils/ColorsHelper';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { mdAndDown } = useDisplay();

</script>

<style scoped>

</style>