<template>
  <div>
    <Header />
    <main>
      <Banner />
      <v-container justify-item:center class="custom-card">
        <v-row>
          <!-- BFP Section -->
          <v-card class="bfp-card" @click="goToNews">
            <v-card-text>
              <v-text class="text-h6">News</v-text>
            </v-card-text>
          </v-card>

          <v-card class="bfp-card" @click="goToAnnouncements">
            <v-card-text>
              <v-text class="text-h6">Announcements</v-text>
            </v-card-text>
          </v-card>

          <!-- Another Government Agency Section -->
          <v-card class="gov-agency-card" @click="goToGovContent">
            <v-card-text>
              <v-text class="text-h6">Government Content</v-text>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
      <router-view></router-view>
    </main>
    <Footer :isVisible="isVisible" /> 
  </div>
</template>

<script>
import Header from '@/components/BODY/Header.vue';
import Footer from '@/components/BODY/Footer.vue';
import Banner from '@/components/BODY/Banner.vue';

export default {
  name: 'home',
  components: {
    Header,
    Banner,
    Footer,
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    goToNews() {
      this.$router.push({ name: 'news' });
    },
    goToAnnouncements() {
      this.$router.push({ name: 'announcement' });
    },
    goToGovContent() {
      this.$router.push({ name: 'gov-content' });
    },
  },
};
</script>

<style lang="sass" scoped>
.text-h6
  cursor: pointer

.custom-card
  display: flex
  width: auto
  margin-bottom: 16px

.bfp-card, .gov-agency-card
  border: 2px solid red
  border-radius: 8px
  margin-right: 10px
  cursor: pointer
  transition: background-color 0.3s

.bfp-card:hover, .gov-agency-card:hover
  background-color: #007BFF
</style>
