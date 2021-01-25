<template>
  <div>
    <h2>我是用户</h2>
    <span>我是用户,嘿嘿嘿</span>
    <h2>{{ userId }}</h2>
    <button @click="clickbtn">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  // created() {
  //   document.title = "用户";
  // },
  computed: {
    //   获取当前用户
    userId() {
      return this.$route.params.userId;
    }
  },
  methods: {
    clickbtn() {
      // router/index.js中的router对象 大对象
      console.log(this.$router);
      // 当前活跃的小路由
      console.log(this.$route);
    }
  }
};
</script>
<style scoped></style>
