<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, key) in recommends.list">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      default() {
        return [];
      }
    }
  },
  components: {},
  directives: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 13px;

  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  height: 80%;
  margin-bottom: 10px;
}

.recommend-item a {
  text-decoration: none;
  color: #333;
}
.recommend-item:hover {
  background-color: yellowgreen;
}
</style>
