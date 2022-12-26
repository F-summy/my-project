<template>
  <div class="blog-container">
    <Layout>
      <template #main>
        <div class="main" ref="mainScroll" v-loading="isLoading">
          <Content v-if="data" :blog="data"></Content>
          <Commont v-if="data"></Commont>
        </div>
      </template>
      <template #right>
        <div class="right" v-loading="isLoading">
          <blogToc v-if="data" :toc="data.toc"></blogToc>
        </div>
      </template>
    </Layout>
    <Totop></Totop>
  </div>
</template>

<script>
import fetchData from "../../../mixins";
import { getBlogId } from "../../../aip";
import Content from "./content.vue";
import blogToc from "./blogToc.vue";
import Totop from "../../../components/Totop.vue";
import Commont from "../comment/index.vue";
import Layout from "../../../components/Layout.vue";
export default {
  mixins: [fetchData(null)],
  components: {
    Content,
    blogToc,
    Layout,
    Commont,
    Totop,
  },
  mounted() {
    this.$refs.mainScroll.addEventListener("scroll", this.scroll);
    this.$events.$on("setScroll", this.setScroll);
  },
  beforeDestroy() {
    this.$events.$off("setScroll", this.setScroll);
    this.$refs.mainScroll.removeEventListener("scroll", this.scroll);
  },
  methods: {
    async fetchData() {
      return await getBlogId();
    },
    scroll() {
      this.$events.$emit("mainScroll", this.$refs.mainScroll);
    },
    setScroll(value) {
      this.$refs.mainScroll.scrollTop = value;
    },
  },
};
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .main {
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  .right {
    width: 220px;
    height: 100%;
    position: relative;
  }
}
</style>
