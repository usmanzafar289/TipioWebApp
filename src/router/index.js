import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrgSøk from "../components/tipio/OrgSøk";
import InkrementeltSok from "../components/tipio/InkrementeltSøk";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
 
  {
    path: "/OrgSøk/:orgnr",
    name: "OrgSøk",
    component: OrgSøk
  },

  {
    path: "/InkrementeltSok",
    name: "Inkrementelt",
    component: InkrementeltSok
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
