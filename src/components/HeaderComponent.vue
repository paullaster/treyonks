<template>
  <header>
    <v-toolbar-title>Treyonks Limited</v-toolbar-title>
    <div
    v-if="mdAndDown"
    style="
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(10px, 1fr));
    "
    id="header-menu-icon"
    @click="globalStore.setMenuIconStatus"
    >
        <span :class="closed ? `icon-closed header-menu-icon` : ``"></span>
        <span :class="closed ? `icon-closed header-menu-icon` : ``"></span>
    </div>
   <div v-if="lgAndUp">
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About Us</v-btn>
    <v-btn text to="/services">Services</v-btn>
    <v-btn text to="/contact">Contact</v-btn>
   </div>
  </header>
</template>
<script setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useGlobal } from '@/stores';
import { storeToRefs } from 'pinia';

// VUETIFY UTILs
const { lgAndUp, mdAndDown} = useDisplay();


// INTERNAL APP STATE
const globalStore = useGlobal();
const {closed} = storeToRefs(globalStore);

</script>
<style scoped>
header {
  background-color: #dcdcdc;
  color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
}
.v-toolbar-title {
  font-size: 24px;
  font-weight: bold;
}
.icon-closed {
  font-size: 24px;
  margin-right: 10px;
  display: block;
  width: 30px;
  background-color: #6e6e6e;
  height: 2px;
}
</style>