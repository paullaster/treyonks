<template>

   <nav class="mobile-view-nav">
    <ul>
        <li><router-link to="/services">
            Services
        </router-link></li>
        <li><router-link to="/about">
            About
        </router-link></li>
        <li><router-link to="/contact">
            Contacts
        </router-link></li>
    </ul>
    <v-btn
    class="rounded-pill button-position"
    size="x-large"
    :color="ColorsHelper.getColor('primary')"
    >
        Request a demo
    </v-btn>
   </nav>
</template>

<script setup>
import ColorsHelper from '@/utils/ColorsHelper';


</script>