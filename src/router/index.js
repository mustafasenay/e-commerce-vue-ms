import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/homePage.vue'
import furniturePage from "../components/furnituresPage.vue"
import decorPage from "../components/decorPage.vue"
import storagePage from "../components/storagePage.vue"
import lightingPage from "../components/lightingPage.vue"
import officePage from "../components/officePage.vue"
import bedroomPage from "../components/bedroomPage.vue"
import bathroomPage from "../components/bathroomPage.vue"
import kitchenPage from "../components/kitchenPage.vue"
import outdoorPage from "../components/outdoorPage.vue"
import loginPage from "../components/loginPage.vue"
import registerPage from "../components/registerPage.vue"



Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name : "homePage",
    component : homePage
  },
  {
    path : "/furniture",
    name : "furnituresPage",
    component : furniturePage
  },
  {
    path : "/decor",
    name : "decorPage",
    component : decorPage
  },
  {
    path : "/storage",
    name : "storagePage",
    component : storagePage
  },
  {
    path : "/lighting",
    name : "lightingPage",
    component : lightingPage
  },
  {
    path : "/office",
    name : "officePage",
    component : officePage
  },
  {
    path : "/bedroom",
    name : "bedroomPage",
    component : bedroomPage
  },
  {
    path : "/bathroom",
    name : "bathroomPage",
    component : bathroomPage
  },
  {
    path : "/kitchen",
    name : "kitchenPage",
    component : kitchenPage
  },
  {
    path : "/outdoor",
    name : "outdoorPage",
    component : outdoorPage
  },
  {
    path: '/loginpage',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/register',
    name: 'registerPage',
    component: registerPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
