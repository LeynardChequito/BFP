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
import Mobile from "@/components/FeaturesOFFWeb/Mobile.vue";



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
    path: '/whats-new',
    component: WhatNew,
    children: [
      // { path: 'latest-updates', component: LatestUpdates },
      // { path: 'vacancy', component: Vacancy },
      // { path: 'procurements', component: Procurements }, 
      // { path: 'other-agencies', component: OtherAgencies },
    ],
  },
  {
    path: "/mobile",
    name: 'mobile',
    component: Mobile,
  },
  {
    path: '/about-us/mission-vision/',
    name: 'vmgo',
    component: VMGO,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
