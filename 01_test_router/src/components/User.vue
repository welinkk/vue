<template>
  <div>
    <h2>用户</h2>
    <span>我是用户的内容,哈哈哈哈</span>
    <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //   console.log(this.$route.params.userId);
      return this.$route.params.userId;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
