<template>
  <div class="blog-container">
    <Layout>
      <template #main>
        <div class="main" v-loading="isLoading">
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
  </div>
</template>

<script>
import fetchData from "../../../mixins";
import { getBlogId } from "../../../aip";
import Content from "./content.vue";
import blogToc from "./blogToc.vue";
import Commont from "../comment/index.vue";
import Layout from "../../../components/Layout.vue";
export default {
  mixins: [fetchData(null)],
  components: {
    Content,
    blogToc,
    Layout,
    Commont,
  },
  methods: {
    async fetchData() {
      return await getBlogId();
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
