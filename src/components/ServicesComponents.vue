<template>
   <section :class="mdAndDown ? `services` : `services-desktop`">
    <div>
      <h2 class="section-heading">Our Services</h2>
    <p class="service-intro">
      Transform your business with our unparalleled Microsoft 365 Dynamics and CRM solutions. From strategic finance and
      HR to streamlined operations and customer engagement, we deliver tailored, innovative
      solutions that empower you to achieve exceptional results.
    </p>
    </div>
    <div class="services-container">
      <div class="service-card">
        <div class="image-card"><v-img :src="financesln" class="rounded-lg"></v-img></div>
       <div class="service-card-description">
        <h5>Master Your Finances</h5>
        <p>
          Our tailored finance management solutions, powered by Dynamics 365, provide you with the
          tools to streamline your operations, optimize cash flow, and make data-driven decisions.
          With real-time insights, automated workflows, and seamless integration, we help you
          achieve financial excellence.
        </p>
        <v-btn class="rounded-pill" size="x-large" density="default" variant="outlined" block > Talk to an expert </v-btn>
       </div>
      </div>
      <div class="service-card">
        <div class="image-card">
          <v-img :src="hrslns" class="rounded-lg"/>
        </div>
        <div class="service-card-description">
          <h5>Elevate Your Workforce</h5>
          <p>
            Our tailored HR solutions, powered by Dynamics 365, provide you with the tools to
            streamline your HR processes, optimize employee engagement, and foster a thriving
            workplace culture. With automated workflows, advanced analytics, and seamless integration,
            we help you attract, develop, and retain top talent.
          </p>
          <v-btn class="rounded-pill" size="x-large" density="default" variant="outlined" block> Talk to an expert </v-btn>
        </div>
      </div>
      <div class="service-card">
        <div class="image-card">
          <v-img :src="crmsln" class="rounded-lg"/>
        </div>
        <div class="service-card-description">
          <h5>CRM Solutions</h5>
          <p>
            Our tailored CRM solutions, provide you with the tools to nurture
            lasting relationships, drive sales, and deliver exceptional customer experiences. With
            automated workflows, advanced analytics, and seamless integration, we help you build
            customer loyalty and achieve your business goals.
          </p>
          <v-btn class="rounded-pill" size="x-large" density="default" variant="outlined" block> Talk to an expert </v-btn>
        </div>
      </div>
    </div>
   </section>
</template>
  
  <script setup>
import financesln from '@/assets/finance_sln.png'
import hrslns from '@/assets/Light+Objects+1.png'
import crmsln from '@/assets/crm_sln.png'
import { useDisplay } from 'vuetify/lib/framework.mjs';


const { mdAndDown } = useDisplay();

</script>

  
