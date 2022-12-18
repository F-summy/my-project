<template>
  <div id="app">
    <div class="content">
      <SideAside />
    </div>
  </div>
</template>

<script>
import SideAside from "./components/SideAside.vue";

export default {
  name: "App",
  components: {
    SideAside,
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
#app {
  width: 100vw;
  height: 100vh;
}
.content {
  width: 220px;
  height: 100%;
  .side-aside-container {
    background: @dark;
    height: 100%;
  }
}
</style>
