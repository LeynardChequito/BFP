<template>
  <div>
    <!-- First header for smartphone only -->
    <v-app-bar app color="red" v-if="screenSize <= 1000">
      <v-row align="center" justify="space-between">
        <v-img
          src="@/assets/Banner03_18Aug2018.png"
          alt="Logo"
          class="logo"
        ></v-img>

        <!-- Styled emergency call button -->
        <v-btn
          class="text-none emergency-btn"
          color="red darken-4"
          dark
          rounded
          @click="makeEmergencyCall"
        >
          <v-icon>mdi-phone-in-talk</v-icon>
          EMERGENCY CALL
        </v-btn>
      </v-row>
    </v-app-bar>

    <!-- Second header for desktop mode only -->
    <v-app-bar app color="red">
      <v-row align="center">

        <v-img
          v-if="screenSize >= 1000"
          src="@/assets/Banner03_18Aug2018.png"
          alt="Logo"
          class="logo"
        ></v-img>

        <v-btn v-if="screenSize >= 1000" depressed @click="navigateTo('home')">Home</v-btn>
        <v-btn v-if="screenSize >= 1000" depressed @click="navigateTo('aboutUs')">About Us</v-btn>
        <v-btn v-if="screenSize >= 1000" depressed @click="navigateTo('contactUs')">Contact Us</v-btn>

        <v-icon class="pa-2 ma-9" style="margin-left: 90px;" v-if="screenSize < 1000" @click="navigateTo('home')">mdi-home</v-icon>
        <v-icon class="pa-2 ma-5"  v-if="screenSize < 1000" @click="navigateTo('aboutUs')">mdi-information</v-icon>
        <v-icon class="pa-2 ma-1"  v-if="screenSize < 1000" @click="navigateTo('contactUs')">mdi-email</v-icon>

        <v-text-field label="Search" style="color: white; margin-left: 20px; margin-right: -10px; height: 50px;" hide-details></v-text-field>

        <v-btn v-if="screenSize >= 1000" text>Philippine Standard Time: {{ philippineTime }}</v-btn>

        <v-icon @click="toggleMenu" class=" ma-9">mdi-menu</v-icon>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import moment from 'moment-timezone';

export default {
  data() {
    return {
      philippineTime: this.getCurrentTime(),
      screenSize: window.innerWidth,
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
      }, 100000);
    },
    handleResize() {
      this.screenSize = window.innerWidth;
    },
    makeEmergencyCall() {
      // Add your logic for emergency call
      console.log('Emergency call initiated!');
    },
  },
  mounted() {
    this.updatePhilippineTime();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
<style scoped>
.logo {
  max-width: 1000px;
  height: 500px;
  margin-left: 15px;
}


.v-icon {
  cursor: pointer;
  size: 100px;
}

.v-btn {
  margin-left: 1px;
}

.v-text-field {
  margin-left: 1px;
  margin-right: 2px;
  max-width:300px;
}

/* Emergency call button styling */
.emergency-btn {
  background-color: white;
  color: #340905; 
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid #730303;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 20px;
  width: 180px;
}

.emergency-btn:hover {
  background-color: #e74c3c; /* Red background on hover */
  color: white;
  transform: scale(0.03);
}
</style>