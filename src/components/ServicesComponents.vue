<template>
    <h2 class="title">Our Services</h2>
    <p>
      Transform your business with our unparalleled Dynamics solutions. From strategic finance and
      HR to streamlined operations and customer engagement, we deliver tailored, innovative
      solutions that empower you to achieve exceptional results.
    </p>
    <div>
      <div>
        <v-img :src="financesln" />
        <p>Master Your Finances</p>
        <p>
          Our tailored finance management solutions, powered by Dynamics 365, provide you with the
          tools to streamline your operations, optimize cash flow, and make data-driven decisions.
          With real-time insights, automated workflows, and seamless integration, we help you
          achieve financial excellence.
        </p>
        <v-btn> Talk to an expert </v-btn>
      </div>
      <div>
        <v-img :src="hrslns" />
        <p>Elevate Your Workforce</p>
        <p>
          Our tailored HR solutions, powered by Dynamics 365, provide you with the tools to
          streamline your HR processes, optimize employee engagement, and foster a thriving
          workplace culture. With automated workflows, advanced analytics, and seamless integration,
          we help you attract, develop, and retain top talent.
        </p>
        <v-btn> Talk to an expert </v-btn>
      </div>
      <div>
        <v-img :src="crmsln" />
        <p>CRM Solutions</p>
        <p>
          Our tailored CRM solutions, provide you with the tools to nurture
          lasting relationships, drive sales, and deliver exceptional customer experiences. With
          automated workflows, advanced analytics, and seamless integration, we help you build
          customer loyalty and achieve your business goals.
        </p>
        <v-btn> Talk to an expert </v-btn>
      </div>
    </div>
</template>
  
  <script setup>
import financesln from '@/assets/finance_sln.png'
import hrslns from '@/assets/Light+Objects+1.png'
import crmsln from '@/assets/crm_sln.png'
</script>
  
  <style scoped>
</style>
  
