import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/components/Home.vue");
const About = () => import("@/components/About.vue");
const User = () => import("@/components/User.vue");
const Profile = () => import("@/components/Profile.vue");
const HomeNews = () => import("@/components/HomeNews.vue");
const HomeMessage = () => import("@/components/HomeMessage.vue");
Vue.use(Router);
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        name: "News",
        component: HomeNews
      },
      {
        path: "message",
        name: "HomeMessage",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: "/user/:userId",
    name: "User",
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "档案"
    }
  }
];
const router = new Router({
  routes,
  mode: "history",
  linkActiveClass: "active"
});
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});
export default router;
