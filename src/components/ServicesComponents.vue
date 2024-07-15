<template>
    <v-container class="services-container">
      <h2 class="title">Our Services</h2>
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="service-card">
            <v-card-title class="card-title">Dynamics Business Central Customization</v-card-title>
            <v-card-text>
              <ul>
                <li>Financial Management</li>
                <li>Supply Chain Optimization</li>
                <li>Advanced Reporting</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="service-card">
            <v-card-title class="card-title">Dynamics CRM Customization</v-card-title>
            <v-card-text>
              <ul>
                <li>Sales Automation</li>
                <li>Customer Service Enhancement</li>
                <li>Marketing Automation</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .services-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #2e3d49;
  }
  
  .service-card {
    margin: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .service-card:hover {
    transform: scale(1.05);
  }
  
  .card-title {
    font-weight: bold;
    color: #2e3d49;
  }
  li {
    list-style-type: none;
    margin-bottom: 0.5rem;
    color: #2e3d49;
  }
  </style>
  
