<template>
  <div class="about-container" v-loading="loading">
    <Empty v-if="!data && !loading"></Empty>
    <iframe class="content" v-else :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import { getAbout } from "../../aip";
import Empty from "../../components/Empty.vue";
export default {
  components: {
    Empty,
  },
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
