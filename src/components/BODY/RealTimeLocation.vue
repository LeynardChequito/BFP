<template>
  <div>
    <h1>Realtime Location</h1>
    <p>Latitude: {{ latitude }}</p>
    <p>Longitude: {{ longitude }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
    };
  },
  // mounted() {
  //   this.getLocation();
  // },
  // methods: {
  //   getLocation() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.watchPosition(
  //         (position) => {
  //           this.latitude = position.coords.latitude;
  //           this.longitude = position.coords.longitude;
  //           this.saveLocationToDatabase();
  //         },
  //         (error) => {
  //           console.error(error.message);
  //         },
  //         { enableHighAccuracy: true, maximumAge: 0 }
  //       );
  //     } else {
  //       console.error("Geolocation is not supported by this browser.");
  //     }
  //   },
  //   saveLocationToDatabase() {
  //     // Use Axios to send data to your PHP backend
  //     this.$axios.post("/src/components/save-location.php", {  // Assuming save-location.php is in the root of your backend
  //       latitude: this.latitude,
  //       longitude: this.longitude,
  //     });
  //   },
  // },
};
</script>
