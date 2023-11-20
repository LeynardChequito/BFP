<!-- Header.vue -->
<template>
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-row align="center">
          <v-col>
            <v-btn text @click="goToHome">
              Home
            </v-btn>
          </v-col>
          <v-col>
            <v-btn text @click="goToGoodGovernance">
              Good Governance
            </v-btn>
          </v-col>
          <v-col>
            <v-btn text @click="goToDownloads">
              Downloads
            </v-btn>
          </v-col>
          <v-col>
            <v-btn text @click="goToAboutUs">
              About Us
            </v-btn>
          </v-col>
          <v-col>
            <v-btn text @click="goToContactUs">
              Contact Us
            </v-btn>
          </v-col>
          <v-col class="ml-auto">
            <v-btn text>
              {{ getCurrentTime() }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </template>
  
  <script>
  import moment from 'moment-timezone';
  
  export default {
    methods: {
      goToHome() {
        // Logic to navigate to the Home page
      },
      goToGoodGovernance() {
        // Logic to navigate to the Good Governance page
      },
      goToDownloads() {
        // Logic to navigate to the Downloads page
      },
      goToAboutUs() {
        this.$router.push({ name: 'vmgo' });
      },
      goToContactUs() {
        // Logic to navigate to the Contact Us page
      },
      getCurrentTime() {
        const philippineTime = moment().tz('Asia/Manila').format('MMMM D, YYYY h:mm A');
        return `Philippine Time: ${philippineTime}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .v-btn {
    min-width: 80px; /* Adjust the minimum width of buttons */
  }
  
  /* Optional: Add more styling based on your design preferences */
  </style>
  