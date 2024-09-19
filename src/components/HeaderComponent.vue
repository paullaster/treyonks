<template>
  <header id="header-component" :class="className">
    <v-toolbar-title @click="() => router.push({ name: 'home' })">Treyonks Limited</v-toolbar-title>
    <div
      v-if="mdAndDown"
      style="display: grid; grid-template-rows: repeat(auto-fit, minmax(10px, 1fr))"
      id="header-menu-icon"
      @click="globalStore.setMenuIconStatus"
    >
      <span
        id="top-line"
        :class="closed ? `icon top-closed header-menu-icon` : `icon top-open`"
      ></span>
      <span
        id="bottom-line"
        :class="closed ? `icon bottom-closed header-menu-icon` : `icon bottom-open`"
      ></span>
    </div>
    <div v-if="lgAndUp" class="big-screen-view">
      <router-link to="/services">Services</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <v-btn class="rounded-pill" :color="ColorsHelper.getColor('primary')" size="x-large">
        Request a demo
      </v-btn>
    </div>
  </header>
</template>
<script setup>
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useGlobal } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import ColorsHelper from '@/utils/ColorsHelper'
import { ref, watch } from 'vue'

// VUETIFY UTILs
const { lgAndUp, mdAndDown } = useDisplay()

// ROUTES
const router = useRouter()
const route = useRoute()

// INTERNAL APP STORE
const globalStore = useGlobal()
const { closed } = storeToRefs(globalStore)

// STATE
const className = ref('')
watch(
  () => [route.name, closed.value, mdAndDown],
  () => {
    getClassName()
  },
  { immediate: true, deep: true }
)
function getClassName() {
  className.value = 'header'
  if (route.name === 'home') {
    if (closed.value) {
      className.value += ' header-bg-grey'
    }
  }
  if (mdAndDown.value) {
    className.value += ' header-mobile'
  } else {
    className.value += ' header-desktop'
  }
}
</script>
<style scoped>
.header {
  color: #141414;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
}
.header-mobile {
  padding: 40px 20px;
}
.header-desktop {
  padding: 40px 120px;
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
.top-closed {
  top: 0;
  left: 0;
}
.bottom-closed {
  bottom: 0;
}
.top-open {
  transform: rotate(45deg);
}
.bottom-open {
  transform: rotate(-45deg);
}
</style>