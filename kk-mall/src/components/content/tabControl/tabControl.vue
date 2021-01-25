<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  directives: {},
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  /* 拉长横线 */
  padding: 5px;
}
.active {
  color: red;
  border: 1px;
  /* border-bottom: 2px; */
  /* border-bottom-color: tomato; */
}
.active span {
  border-bottom: red 3px solid;
}
</style>
