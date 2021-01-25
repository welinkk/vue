<template>
  <div>
    <h2>首页</h2>
    <span>我是首页的内容</span>
    <br />
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    // console.log("home created");
  },
  // 有了keep-alive之后就不会 销毁
  destroyed() {
    // console.log("home destroyed");
  },
  // activated,deactivated只有keep-alive存在时才有效
  activated() {
    this.$router.push(this.path);
  },
  deactivated() {
    // console.log("deactivated");
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
