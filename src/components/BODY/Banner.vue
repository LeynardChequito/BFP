<template>
  <v-container>
    <v-carousel hide-delimiters ref="carousel" height="400">
      <v-carousel-item v-for="image in filteredImages" :key="image.id">
        <v-img :src="require(`@/assets/${image.src}`)" :alt="image.alt" class="carousel-image"></v-img>
      </v-carousel-item>
    </v-carousel>

    <!-- Emergency Contacts Shortcut Button with Label -->
    <div class="emergency-call-container">
      
      <v-btn fab dark fixed bottom left color="red" @click="callEmergencyContacts"><v-icon>mdi-phone</v-icon>
      <div class="emergency-call-label">Emergency Call</div>
        
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import moment from 'moment-timezone';

export default {
  data() {
    return {
      philippineTime: this.getCurrentTime(),
      images: [
        { id: 1, src: 'images1.jpg', alt: 'BFP Image 1' },
        { id: 2, src: 'images2.jpg', alt: 'BFP Image 2' },
        { id: 3, src: 'bfp-modernization.jpg', alt: 'BFP Image 3' },
        { id: 4, src: 'bfp-banner.jpg', alt: 'BFP Image 4' },
        { id: 5, src: 'images2.jpg', alt: 'BFP Image 5' },
        { id: 6, src: 'BABALA-400-×-1500px.png', alt: 'BFP Image 6' },
        { id: 7, src: 'fire-safety-advocacy-banner-2023-01.jpg', alt: 'BFP Image 7' },
      ],
    };
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) => /\.(jpeg|jpg|png)$/i.test(image.src));
    },
  },
  methods: {
    showNextImage() {
      this.$refs.carousel.next();
    },
    showPrevImage() {
      this.$refs.carousel.prev();
    },
    getCurrentTime() {
      return moment().tz('Asia/Manila').format('MMMM D, YYYY h:mm A');
    },
    updatePhilippineTime() {
      setInterval(() => {
        this.philippineTime = this.getCurrentTime();
      }, 60000);
    },
    callEmergencyContacts() {
      // Implement the logic to initiate a call to emergency contacts
      // You can use browser-specific APIs for this purpose.
      // For example, in a mobile app, you might use Cordova or Capacitor plugins.

      // For demonstration purposes, you can show an alert.
      alert('Calling Emergency Contacts!');
    },
  },
  mounted() {
    this.updatePhilippineTime();
  },
};
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
}

.logo {
  width: 150px;
  height: auto;
}

.emergency-call-container {
  position: fixed;
  bottom: 50%;
  left: 16px;
  transform: translateY(50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.emergency-call-label {
  margin-bottom: 8px;
  font-size: 12px;
  color: White;
}
</style>
