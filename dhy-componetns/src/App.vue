<template>
  <div id="app">
    <scroll-num :num="886" :delay="2" :differDelay="1" />
    <div class="virtual-list">
      <virtual-list :listData="vList" :itemSize="100" />
    </div>
  </div>
</template>

<script>
import scrollNum from "./components/scroll-num/scroll-num-group.vue";
import virtualList from "./components/virtual-list.vue";
export default {
  name: "App",
  components: {
    scrollNum,
    virtualList,
  },
  data() {
    let vList = [];
    for (let i = 0; i < 1000; i++) {
      vList.push({ id: i, value: i });
    }
    return {
      vList,
    };
  },
};
</script>

<style lang="less">
@import "./assets/reset.css";
.virtual-list {
  width: 375px;
  height: 667px;
}
</style>
