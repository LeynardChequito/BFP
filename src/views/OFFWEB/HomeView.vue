<template>
  <div>
    <Header />
    <main>
      <h1>Welcome to BFP Official Website</h1>
 <Banner />
      <v-container>
        <v-row>
          <v-col>
            <router-link to="/whats-new/latest-updates">Latest Updates</router-link>
          </v-col>
          <v-col>
            <router-link to="/whats-new/vacancy">Notice of Vacancy</router-link>
          </v-col>
          <v-col>
            <router-link to="/whats-new/procurements">Procurements</router-link>
          </v-col>
          <v-col>
            <router-link to="/whats-new/other-agencies">Link to Other Agencies</router-link>
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
import Banner from '@/components/BODY/Banner.vue'

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
