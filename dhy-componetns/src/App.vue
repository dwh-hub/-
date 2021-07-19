<template>
  <div id="app">
    <scroll-num :num="886" :delay="2" :differDelay="1"></scroll-num>
  </div>
</template>

<script>
import scrollNum from "./components/scroll-num/scroll-num-group.vue";
export default {
  name: "App",
  components: {
    scrollNum,
  },
};
</script>

<style lang="less">
@import './assets/reset.css';
</style>
