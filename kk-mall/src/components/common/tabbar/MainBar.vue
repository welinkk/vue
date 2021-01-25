<template>
  <div>
    <tabbar>
      <tabbar-item path="/home" activeColor="red">
        <!-- 使用 slot属性 调用插槽 -->
        <img slot="item-icon" src="~assets/image/tabbar/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/homed.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/sort" activeColor="red">
        <img slot="item-icon" src="~assets/image/tabbar/sort.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/sortd.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/carshop" activeColor="red">
        <img slot="item-icon" src="~assets/image/tabbar/shopcar.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/shopcard.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/image/tabbar/my.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/myd.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/common/tabbar/Tabbar.vue";
import TabbarItem from "@/components/common/tabbar/Tabbaritem";
export default {
  name: "MainBar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style lang="" scoped></style>
