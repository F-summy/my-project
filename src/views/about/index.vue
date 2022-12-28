<template>
  <div class="about-container" v-loading="loading">
    <iframe class="content" v-if="data" :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import { getAbout } from "../../aip";
export default {
  data() {
    return {
      data: "",
      loading: true,
    };
  },
  async created() {
    this.data = await getAbout();
    this.loading = false;
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
