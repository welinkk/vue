<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  text-align: center;
}
.left,
.right {
  width: 60px;
  /* background-color: rebeccapurple; */
}
.center {
  /* 剩下的 */
  flex: 1;
  /* background-color: seagreen; */
}
</style>
