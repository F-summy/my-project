<template>
  <div class="blog-class-container" v-loading="isLoading">
    <h4>文章分类</h4>
    <List :list="list" @select="handleSelect"></List>
  </div>
</template>

<script>
import { getBlogType } from "../../../aip";
import List from "../list/index.vue";
import fetchData from "../../../mixins";
export default {
  mixins: [fetchData([])],
  components: {
    List,
  },
  computed: {
    id() {
      return +this.$route.params.id || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const sum = this.data.reduce((a, b) => a + b.articleCount, 0);
      const data = [{ name: "全部", id: -1, articleCount: sum }, ...this.data];
      return data.map((item) => ({
        ...item,

        selected: item.id === this.id,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogType();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({ name: "Blog", query });
      } else {
        this.$router.push({
          name: "CalssBlog",
          query,
          params: {
            id: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-class-container {
  position: relative;
  width: 100%;
  height: 100%;
  h4 {
    font-size: 24px;
    margin: 15px 0;
    margin-left: 15px;
    letter-spacing: 3px;
  }
}
</style>
