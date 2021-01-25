<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <router-link
      :to="{ path: '/profile', query: { name: 'kxq', age: 18, height: 1.88 } }"
      >档案</router-link
    >
    <!-- keep-alive会缓存,默认情况下是包含,
      可以使用include="组件中script中的名字" 
      exclude不包含 逗号间不加空格-->
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    };
  }
};
</script>

<style>
.active {
  color: crimson;
}
</style>
