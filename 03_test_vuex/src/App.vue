<template>
  <div id="app">
    <test-vuex></test-vuex>
    <router-view />
    <h2>App {{ $store.state.counter }}</h2>
    <button @click="addAction">-</button>
    <button @click="subAction">+</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
  </div>
</template>

<script>
import TestVuex from "./components/TestVuex";
import { INCREMENT } from "./store/mutations-types.js";

export default {
  name: "App",
  data() {
    return {
      message: "value"
    };
  },
  components: { TestVuex },
  methods: {
    addAction() {
      this.$store.commit("decrement");
    },
    subAction() {
      this.$store.commit(INCREMENT);
    },
    addcount(count) {
      // 第一种提交风格：
      // this.$store.commit("inremneCount", count);

      //第二种提交风格：出入的是数组
      this.$store.commit({
        type: "inremneCount",
        count
        // 后面还可以提交很多数据，但是store 的index中的count就是一个对象
      });
    }
  }
};
</script>

<style></style>
