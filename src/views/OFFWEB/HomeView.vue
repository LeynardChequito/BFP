<template>
  <div>
    <Header />
    <main>
      <Banner />
      <v-container>
        <!-- Existing Navigation Removed -->
        <v-row>
          <!-- Local News and Announcements -->
          <v-col>
            <v-card>
              <v-card-title>Local News and Announcements</v-card-title>
              <v-card-text>
                <!-- Add your content for local news and announcements -->
                <router-link to="/local-news/category-1">Category 1</router-link>
                <router-link to="/local-news/category-2">Category 2</router-link>
                <!-- Add more as needed -->
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Global News and Announcements -->
          <v-col>
            <v-card>
              <v-card-title>Global News and Announcements</v-card-title>
              <v-card-text>
                <!-- Add your content for global news and announcements -->
                <router-link to="/global-news/category-1">Category 1</router-link>
                <router-link to="/global-news/category-2">Category 2</router-link>
                <!-- Add more as needed -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <router-view></router-view>
    </main>
    <Footer />
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
    Footer,
    Banner,
  },
};
</script>

<style lang="sass" scoped>
/* Your existing styles */
</style>
