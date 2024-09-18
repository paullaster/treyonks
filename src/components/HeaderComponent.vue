<template>
  <header>
    <v-toolbar-title>Treyonks Limited</v-toolbar-title>
    <div
      v-if="mdAndDown"
      style="display: grid; grid-template-rows: repeat(auto-fit, minmax(10px, 1fr))"
      id="header-menu-icon"
      @click="globalStore.setMenuIconStatus"
    >
      <span id="top-line" :class="closed ? `icon top-closed header-menu-icon` : `icon top-open`"></span>
      <span id="bottom-line" :class="closed ? `icon bottom-closed header-menu-icon` : `icon bottom-open`"></span>
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
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useGlobal } from '@/stores'
import { storeToRefs } from 'pinia'

// VUETIFY UTILs
const { lgAndUp, mdAndDown } = useDisplay()

// INTERNAL APP STATE
const globalStore = useGlobal()
const { closed } = storeToRefs(globalStore)
</script>
<style scoped>
header {
  background-color: #dcdcdc;
  color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
}
.v-toolbar-title {
  font-size: 24px;
  font-weight: bold;
}
#header-menu-icon {
  cursor: pointer;
  position: relative;
  height: 12px;
  width: 10%;
}
.icon {
  position: absolute;
  font-size: 24px;
  margin-right: 10px;
  display: block;
  width: 30px;
  background-color: #6e6e6e;
  height: 2px;
  transition: all 0.5s ease;
}
.top-closed{
  top: 0;
  left: 0;
}
.bottom-closed{
  bottom: 0;
}
.top-open {
  transform: rotate(45deg);
}
.bottom-open {
  transform: rotate(-45deg);
}
</style>