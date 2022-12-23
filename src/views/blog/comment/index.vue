<template>
  <div class="comont-list-container">
    <MessageArea
      title="评论列表"
      :list="data.rows"
      :subTitle="`(${data.total})`"
      @submit="handlesubmit"
    ></MessageArea>
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
  methods: {
    async fetchData() {
      const id = this.$route.params.id;
      return await getComment(id);
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
  margin: 50px 0;
}
</style>
