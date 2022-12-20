<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SideAside />
        </div>
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import SideAside from "./components/SideAside.vue";
export default {
  name: "App",
  components: {
    Layout,
    SideAside,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
#app {
  width: 100vw;
  height: 100vh;
  .left {
    width: 200px;
  }
  .main {
    background-color: rgb(208, 255, 0);
  }
  .right {
    width: 210px;
    background-color: rgb(255, 160, 83);
  }
}
</style>
