<template>
    <div>

        <Header />

        <div id="app">
            <RealTimeLocation />
        </div>

        <Footer />
    </div>
    
  </template>
  
  <script>
 import RealTimeLocation from '@/components/BODY/RealTimeLocation.vue';
 import Header from '@/components/BODY/Header.vue';
 import Footer from '@/components/BODY/Footer.vue';

  export default {
    components: {
        Header,
        Footer,
        RealTimeLocation,
    },
    data() {
    return {};
  },
  };
  </script>