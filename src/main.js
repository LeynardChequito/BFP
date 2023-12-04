import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';

loadFonts();

const app = createApp(App);

app.use(router).use(vuetify);

// Set up global axios instance
// app.config.globalProperties.$axios = axios.create({
//   baseURL: 'http://localhost:8080', // Remove the '/contactUs' from baseURL
// });

app.mount('#app');
