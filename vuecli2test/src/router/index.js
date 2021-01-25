import Vue from "vue";
import Router from "vue-router";
// import About from "../components/About.vue";
// import Home from "../components/Home.vue";
// import User from "../components/User.vue";
Vue.use(Router);

// 懒加载,打包后各自模块是各自的包,点击用到哪里加载哪个组件
const Home = () => import("../components/Home.vue");
const HomeNews = () => import("../components/HomeNews.vue");
const HomeMessage = () => import("../components/HomeMessage.vue");
const About = () => import("../components/About.vue");
const User = () => import("../components/User.vue");
const Profile = () => import("../components/profile.vue");

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    // meta 元数据,描述数据的数据
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
        component: HomeNews
      },
      {
        path: "message",
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
    // 组件内的前置守卫
    // beforeEnter: (to, from, next) => {
    //   /* must call `next` */
    //   console.log("about beforenter");

    //   next();
    // }
  },
  // 动态路由/user/:userId
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
  // http://localhost:8080/#/home 去掉中间的"#""  http://localhost:8080/home
  mode: "history",

  linkActiveClass: "active"
});

//前置守卫(guard)
router.beforeEach((to, from, next) => {
  // from 到 to
  // to 即将要进入的目标的路由对象
  // from 当前导航即将要离开的路由对象
  // next 调用该方法后,才能进入到下一个钩子
  document.title = to.matched[0].meta.title;
  // console.log(to);
  // console.log("++++++++");
  next();
});
//后置钩子(hook)
router.afterEach((to, from) => {
  console.log("------");
});

export default router;
