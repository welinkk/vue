<template>
  <div>
    <div id="tabbar">
      <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabbar"
};
</script>
<style lang="" scoped>
#tabbar {
  /* 水平 */
  display: flex;
  background-color: #f6f6f6;
  /* 固定位置 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 设置阴影 rgba 前三个是颜色,后一个是透明度*/
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.15);
}


</style>
