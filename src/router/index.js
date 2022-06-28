import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowDetails from "../views/DetailsView.vue";
import SearchDetails from "../views/SearchDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/showDetails/:id",
    name: "show-details",
    props: true,
    component: ShowDetails,
    meta: { title: "Vue-Showdetails" },
  },
  {
    path: "/searchDetails/:searchText",
    name: "search-details",
    props: true,
    component: SearchDetails,
    meta: { title: "Vue-Searchdetails" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
