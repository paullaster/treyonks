<template>
  <footer class="footer">
    <div class="company">
      <h1>Treyonks Limited</h1>
    </div>
    <div class="footer_links">
      <div>
        <h4>Explore</h4>
        <div @click="()=>router.push({name: 'services'})">Solutions</div>
        <div @click="()=>router.push({name: 'about'})">About </div>
        <div @click="()=>router.push({name: 'contact'})">Contacts</div>
      </div>
      <div>
        <h4>Engage us</h4>
        <div>
          <a href="mailto:">
            <v-icon class="mr-3" :color="ColorsHelper.getColor('email')">mdi-email</v-icon>
            <span>Email</span>
          </a>
        </div>
        <div>
          <a href="https://">
            <v-icon class="mr-3" :color="ColorsHelper.getColor('x')">mdi-alpha-x-box</v-icon>
            <span>X</span>
          </a>
        </div>
        <div>
          <a href="https://">
            <v-icon class="mr-3" :color="ColorsHelper.getColor('linkedin')">mdi-linkedin</v-icon>
            <span>Linkedin</span>
          </a>
        </div>
        <div>
          <a href="https://">
            <v-icon class="mr-3" :color="ColorsHelper.getColor('instagram')">mdi-instagram</v-icon>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
    <div class="newsletter">
      <p>Sign up for our newsletter, stay updated with trending technology insights</p>
      <v-form class="my-3">
        <v-text-field v-model="email" label="Email" type="email" required variant="outlined" />
        <v-btn class="ml-2 rounded-pill" :color="ColorsHelper.getColor('primary')">Subscribe</v-btn>
      </v-form>
    </div>
    <v-col class="text-center white--text">© 2024 Treyonks Technology Limited</v-col>
  </footer>
</template>
  <script setup>
import ColorsHelper from '@/utils/ColorsHelper'
import { useRouter } from 'vue-router';
import { ref } from 'vue'


// ROUTING
const router = useRouter();



const email = ref('')
</script>
