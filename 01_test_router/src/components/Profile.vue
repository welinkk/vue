<template>
  <div>
    <h2>档案</h2>
    <span>我是档案的内容,哈哈哈哈</span>
    <h2>{{ $route.query }}</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
