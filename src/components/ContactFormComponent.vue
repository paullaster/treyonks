<template>
  <section :class="mdAndDown ? 'contact contact_mobile' : 'contact contact_desktop'">
    <div class="contact_text_section">
      <div class="contact_headline">
      <h2>Contact Us</h2>
      <p>Drop Us a Line</p>
    </div>
    <div class="sendto">
      <a href="mailto:">emailus@email.com</a>
      <span></span>
      <a href="tel:+254725863023">(+2547) 25 863023</a>
    </div>
    </div>
    <div class="contact_form_section">
      <v-form>
      <v-row>
        <v-col cols="6">
        <v-text-field label="First Name" required variant="outlined" class="rounded-pill"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Last Name" required variant="outlined" class="rounded-pill"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Email" type="email" required variant="outlined" class="rounded-pill"></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea label="Message" required variant="outlined" class="rounded-pill"></v-textarea>
      </v-col>
      </v-row>
      <v-btn class="rounded-pill" :color="ColorsHelper.getColor('primary')" width="200px" height="50px">Send</v-btn>
    </v-form>
    </div>
  </section>
</template>
  
  <script setup>
import ColorsHelper from '@/utils/ColorsHelper';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { mdAndDown } = useDisplay();

</script>
  
  <style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.contact-card {
  padding: 20px;
}
</style>
  
