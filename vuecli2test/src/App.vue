<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- replace不能前后返回 =history.replaceState-->
    <!-- <router-link to="/home" tag="button">首页</router-link> -->
    <!-- <router-link to="/home" tag="button" active-class="active">
      首页</router-link
    >

    <router-link to="/about" tag="button" active-class="active">
      关于</router-link
    > -->
    <!-- 自定义路由跳转的方式 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home"> 首页</router-link>

    <router-link to="/about"> 关于</router-link>

    <router-link :to="'/user/' + userId"> 用户</router-link>
    <!-- 绑定对象的方式传递参数  -->
    <router-link
      :to="{ path: '/profile', query: { name: 'why', age: 18, height: 1.88 } }"
    >
      档案</router-link
    >

    <!-- <button @click="clickUser">用户</button>
    <button @click="clickProfile">档案</button> -->
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    };
  },
  methods: {
    homeClick() {
      this.$router.push("/home");
      // this.$router.replace("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    },
    clickUser() {
      this.$router.push("/user/" + this.userId);
    },
    clickProfile() {
      this.$router.push({
        path: "/profile",
        query: { name: "cobe", age: 18, height: 1.88 }
      });
    }
  }
};
</script>

<style>
/* .router-link-active {
  color: crimson;
} */
.active {
  color: crimson;
}
</style>
