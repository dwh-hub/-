<template>
  <div class="flex">
    <scroll-num
      v-for="(number, idx) of numArr"
      :key="idx"
      :i="number"
      :delay="delay + differDelay * idx"
      :blur="blur"
    ></scroll-num>
  </div>
</template>

<script>
import scrollNum from "./scroll-num.vue";

export default {
  name: "scroll-num-group",
  props: {
    // 滚动数字
    num: {
      type: Number,
    },
    // 滚动时间 单位 秒
    delay: {
      type: Number,
      default: 1,
    },
    // 数字间滚动时间差 单位 秒
    differDelay: {
      type: Number,
      default: 0,
    },
    // 模糊参数
    blur: {
      type: Number,
      default: 2,
    },
  },
  components: {
    scrollNum,
  },
  computed: {
    numArr() {
      const str = String(this.num);
      let setLen = str.length;
      let arr = [];
      for (let i = 0; i < setLen; i++) {
        arr.push(parseInt(str[i]));
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
</style>