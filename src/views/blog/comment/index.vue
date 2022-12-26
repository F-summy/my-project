<template>
  <div class="comont-list-container">
    <MessageArea
      title="评论列表"
      :list="data.rows"
      :subTitle="`(${data.total})`"
      @submit="handlesubmit"
    ></MessageArea>
    <div class="loading">
      <span v-if="hasMore">正在读取更多评论...</span>
      <span v-else>没有更多评论了！</span>
    </div>
  </div>
</template>

<script>
import MessageArea from "../../../components/MessageArea/index.vue";
import fetchData from "../../../mixins";
import { postComment, getComment } from "../../../aip";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
    };
  },
  created() {
    this.$events.$on("mainScroll", this.positionMoreArea);
  },
  beforeDestroy() {
    this.$events.$off("mainScroll", this.positionMoreArea);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    positionMoreArea(dom) {
      //当滑块滚动到底部区域加载更多
      if (this.isLoading || !dom) return;
      const height = 100;

      const top = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (top < height) {
        this.getMore();
      }
    },
    async fetchData() {
      //加载更多
      const id = this.$route.params.id;
      return await getComment(id, this.page);
    },
    async getMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const res = await this.fetchData();
      this.data.total = res.total;
      this.data.rows = this.data.rows.concat(res.rows);
      this.isLoading = false;
    },
    async handlesubmit(data, fn) {
      const res = await postComment({
        ...data,
        blogId: this.$route.params.id,
      });
      this.data.rows.unshift(res);
      this.data.total++;
      fn("评论成功！");
    },
  },
};
</script>

<style lang="less" scoped>
.comont-list-container {
  position: relative;
  margin: 50px 0;
  .loading {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 20px;
    height: 20px;
    color: #999;
    letter-spacing: 3px;
  }
}
</style>
