import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
