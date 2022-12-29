<template>
  <div class="message-container" ref="message">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    ></MessageArea>
    <div class="loading" v-if="!data.total">
      <span>当前没有留言！</span>
    </div>
    <div class="loading" v-else>
      <span v-if="hasMore">正在读取更多留言...</span>
      <span v-else>没有更多留言了！</span>
    </div>
  </div>
</template>

<script>
import MessageArea from "../../components/MessageArea/index.vue";
import { getMessage, postMessage } from "../../aip";
import fetchData from "../../mixins/index";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    this.$refs.message.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    this.$refs.message.removeEventListener("scroll", this.scroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getMessage(this.page);
    },
    async handleSubmit(data, fn) {
      const resp = await postMessage(data);
      fn("感谢您的留言");
      this.data.rows.unshift(resp);
    },
    async scroll() {
      if (this.isLoading) {
        // 目前正在加载更多
        return;
      }
      const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
      const dec = Math.abs(
        this.$refs.message.scrollTop +
          this.$refs.message.clientHeight -
          this.$refs.message.scrollHeight
      );
      if (dec <= range) {
        this.fetchMore();
      }
    },
    //加载更多
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
.loading {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px;
  height: 20px;
  color: #999;
  letter-spacing: 3px;
}
</style>
