import { createRouter, createWebHistory } from 'vue-router'



//Official Website------------------------------------------------------------
import HomeView from '../views/OFFWEB/HomeView.vue'
import WhatNew from '@/components/FeaturesOFFWeb/WhatNew.vue';
import VMGO from '@/components/OtherInfo/VMGO.vue';
//Login-----------------------------------------------------------------------
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

//Manage----------------------------------------------------------------------


//Features--------------------------------------------------------------------




const routes = [
  
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/about-us/mission-vision/',
    name: 'vmgo',
    component: VMGO,
  },
  {
    path: "/what's-new/news-update",
    name: 'news',
    component: WhatNew,
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
