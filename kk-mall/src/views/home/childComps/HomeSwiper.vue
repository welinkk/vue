<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, key) in banners.list" :key="key">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },

  props: {
    banners: {
      //   type: Array,
      default() {
        return [];
      }
    }
  },

  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
