<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  // created() {
  //   document.title = "首页";
  // },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
  activated() {
    this.$router.push(this.path);
  }
};
</script>
<style scoped></style>
