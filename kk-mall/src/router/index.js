import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../views/home/Home.vue");
const Sort = () => import("../views/sort/Sort.vue");
const CarShop = () => import("../views/carshop/CarShop.vue");
const Profile = () => import("../views/profile/Profile.vue");
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/sort",
    name: "Sort",
    component: Sort
  },
  {
    path: "/carshop",
    name: "CarShop",
    component: CarShop
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];
export default new Router({
  routes,
  mode: "history"
  // linkActiveClass: active
});
