<template>
    <v-app>
      <v-main>
        <v-container>
        <Header />
        <Banner />
          <!-- Page content -->
          <v-row>
            <v-col>
              <h1>Vision and Mission</h1>
              
              <!-- Vision -->
              <div>
                <h2>Vision</h2>
                <p>A modern fire service fully capable of ensuring a fire safe nation by 2034.</p>
              </div>
              
              <!-- Mission -->  
              <div>
                <h2>Mission</h2>
                <p>
                  We commit to prevent and suppress destructive fires, investigate its causes; 
                  enforce Fire Code and other related laws; respond to man-made and natural disasters and other emergencies.
                </p>
              </div>
              
              <!-- Reference -->
              <p>
                Reference: 
                <a href="https://bfp.gov.ph/3956-2/">Memorandum Circular Number 2016-003</a>
              </p>
              
              <!-- Slider -->
              <!-- <v-carousel>
                Slides
              </v-carousel> -->
              
            </v-col>
          </v-row>
          
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import { VApp, VMain, VContainer, VRow, VCol, VCarousel } from 'vuetify'
import Banner from '../BODY/Banner.vue';
import Header from '@/components/BODY/Header.vue';

  export default {
    components: {
      Header,
      Banner,
      VApp,
      VMain, 
      VContainer,
      VRow,
      VCol,
      VCarousel
    }  
  }
  </script>