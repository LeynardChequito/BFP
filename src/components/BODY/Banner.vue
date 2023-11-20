<template>
    <v-container>
      <v-carousel hide-delimiters ref="carousel">
        <v-carousel-item v-for="image in filteredImages" :key="image.id">
          <v-img :src="require(`@/assets/${image.src}`)" :alt="image.alt" class="carousel-image" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
        //   { id: 1, src: 'image1.jpg', alt: 'BFP Image 1' },
        //   { id: 2, src: 'image2.jpg', alt: 'BFP Image 2' },
        //   // Add more image objects as needed with different file extensions
        ],
      };
    },
    computed: {
      filteredImages() {
        // Filter images based on file extension (e.g., jpeg or jpg)
        return this.images.filter((image) => /\.(jpeg|jpg)$/i.test(image.src));
      },
    },
    methods: {
      showNextImage() {
        // Show the next image in the carousel
        this.$refs.carousel.next();
      },
      showPrevImage() {
        // Show the previous image in the carousel
        this.$refs.carousel.prev();
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-image {
    width: 100%;
    height: auto;
  }
  </style>
  