<template>
    <v-container class="contact-container" fill-height>
      <v-card class="contact-card" width="40vw">
        <v-row>
          <v-col cols="12">
            <h2>Contact Us</h2>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-text-field label="Name" required></v-text-field>
              <v-text-field label="Email" required></v-text-field>
              <v-textarea label="Message" required></v-textarea>
              <v-btn color="primary">Send</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
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
  
