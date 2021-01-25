<template>
  <div id="app">
    <main-bar></main-bar>
    <router-view />
  </div>
</template>

<script>
import MainBar from "./components/common/tabbar/MainBar";
// import Tabbar from "@/components/tabbar/Tabbar.vue";
// import TabbarItem from "@/components/tabbar/Tabbaritem";
export default {
  name: "App",
  components: {
    // Tabbar,
    // TabbarItem
    MainBar
  }
};
</script>

<style>
/* style里引用用 @import */
@import "./normalize.css";
</style>
