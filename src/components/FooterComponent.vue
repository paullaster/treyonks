<template>
    <footer>
      <div>
        Treyonks Limited
      </div>
      <div>
        <div>
          <h4>Explore</h4>
          <div>Solutions</div>
          <div>About us</div>
          <div>Contacts</div>
        </div>
        <div>
          <h4>Engage us</h4>
          <div>Email</div>
          <div>X</div>
          <div>Linkedin</div>
          <div>Instagram</div>
        </div>
      </div>
      <div>
        <h4>
          Sign up for our newsletter</h4>
          <p>Stay updated with trending technology insights</p>
          <v-form>
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
            />
            <v-btn class="ml-2" :color="ColorsHelper.getColor('primary')">Subscribe</v-btn>
          </v-form>
      </div>
      <v-col class="text-center white--text">© 2024 Treyonks Technology Limited</v-col>
    </footer>
  </template>
  <script setup>
import ColorsHelper from '@/utils/ColorsHelper';
import { ref } from 'vue';

  const email = ref('')
</script>
  <style scoped>
  .v-footer {
    padding: 20px 0;
  }
  </style>
