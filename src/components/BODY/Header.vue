<template>
  <v-app-bar app color="red">
    <v-row align="center">

        <v-img src="@/assets/Banner03_18Aug2018.png" alt="Logo" class="logo"></v-img>

        <v-btn depressed @click="navigateTo('home')">Home</v-btn>
        <v-btn depressed @click="navigateTo('aboutUs')">About Us</v-btn>
        <v-btn depressed @click="navigateTo('contactUs')">Contact Us</v-btn>

        <v-text-field label="Search" style="color: white;" hide-details></v-text-field>



        <v-btn text>Philippine Standard Time: {{ philippineTime }}</v-btn>

    </v-row>
  </v-app-bar>
</template>


<script>
import moment from 'moment-timezone';

export default {
  data() {
    return {
      philippineTime: this.getCurrentTime(),
    };
  },
  methods: {
    navigateTo(route) {
      console.log(`Navigating to ${route}`);
      if (route === 'home') {
        this.$router.push('/home');
      }
      if (route === 'contactUs') {
        this.$router.push('/contactUs');
      }
    },
    getCurrentTime() {
      return moment().tz('Asia/Manila').format('MMMM D, YYYY h:mm A');
    },
    updatePhilippineTime() {
      setInterval(() => {
        this.philippineTime = this.getCurrentTime();
      }, 60000);
    },
  },
  mounted() {
    this.updatePhilippineTime();
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.logo {
  width: 500px;
  height: 50px;
}
</style>
