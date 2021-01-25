<template>
  <div class="tabbar-item" @click="itemClik" :class="{ barActive: isActive }">
    <!-- 矩形插槽根据 name 区分 -->
    <!-- 插槽最好都div封装一下,否则会被冲刷 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{ active: isActive }"> -->
    <div :style="activeStyle">
      <slot name="item-text"> </slot>
    </div>
    <!-- {{ activeStyle }} -->
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  // data() {
  //   return {
  //     isActive: true
  //   };
  // },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      // indexOf ==-1 代表没找到, !==-1代表找到
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // console.log("-----" + this.activeColor);
      return this.isActive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    //点击跳转页面
    itemClik() {
      // console.log("111");
      this.$router.push(this.path);
    }
  }
};
</script>
<style lang="" scoped>
.tabbar-item {
  /* 均等分 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 去除图片下的空格 */
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
.barActive {
  background-color: #e2e2e2;
}
</style>
