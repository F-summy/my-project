<template>
  <div class="article-container">
    <Layout>
      <template #main>
        <div class="main">
          <BlogList></BlogList>
        </div>
      </template>
      <template #right>
        <div class="right">
          <BlogClass></BlogClass>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import BlogList from "./content/blogList.vue";
import Layout from "../../components/Layout.vue";
import BlogClass from "./content/blogClass.vue";
export default {
  components: { BlogList, Layout, BlogClass },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.article-container {
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 100%;
  }
  .right {
    width: 220px;
    height: 100%;
  }
}
</style>
